import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfilePictureProps {
  name: string;
  imageUrl?: string;
  onUpload?: () => void;
  editable?: boolean;
}

const ProfilePicture = ({ name, imageUrl, onUpload, editable = false }: ProfilePictureProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="relative inline-block">
      <Avatar className="h-24 w-24">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
      </Avatar>
      {editable && (
        <Button
          size="icon"
          variant="secondary"
          className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
          onClick={onUpload}
        >
          <Camera className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default ProfilePicture;
