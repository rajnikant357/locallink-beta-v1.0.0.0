import { useRef, useState, useEffect } from "react";
import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfilePictureProps {
  name: string;
  type: "customer" | "provider" | "admin";
  editable?: boolean;
}

const getLocalKey = (type: "customer" | "provider" | "admin") => {
  if (type === "provider") return "locallink_profile_photo_provider";
  if (type === "admin") return "locallink_profile_photo_admin";
  return "locallink_profile_photo_user";
};

const ProfilePicture = ({ name, type, editable = false }: ProfilePictureProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(getLocalKey(type));
    if (saved) setImageUrl(saved);
  }, [type]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const url = ev.target?.result as string;
        setImageUrl(url);
        localStorage.setItem(getLocalKey(type), url);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative inline-block">
      <Avatar className="h-24 w-24 cursor-pointer" onClick={editable ? triggerFileInput : undefined}>
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
      </Avatar>
      {editable && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-full z-20 border-2 border-white shadow-md"
            style={{ transform: 'translate(25%, 25%)' }}
            onClick={triggerFileInput}
          >
            <Camera className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfilePicture;
