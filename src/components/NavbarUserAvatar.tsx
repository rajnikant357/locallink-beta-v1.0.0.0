import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

type NavbarUserAvatarProps = { name: string; type: "customer" | "provider" };

function getLocalKey(type: "customer" | "provider") {
  return type === "provider" ? "locallink_profile_photo_provider" : "locallink_profile_photo_user";
}

export default function NavbarUserAvatar({ name, type }: NavbarUserAvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const saved = localStorage.getItem(getLocalKey(type));
    if (saved) setImageUrl(saved);
  }, [type]);

  return (
    <Avatar className="h-9 w-9">
      <AvatarImage src={imageUrl} alt={name} />
      <AvatarFallback className="text-lg">{initials}</AvatarFallback>
    </Avatar>
  );
}