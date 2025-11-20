import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

type NavbarUserAvatarProps = { name: string; type: "customer" | "provider" | "admin" };

function getLocalKey(type: "customer" | "provider" | "admin") {
  if (type === "provider") return "locallink_profile_photo_provider";
  if (type === "admin") return "locallink_profile_photo_admin";
  return "locallink_profile_photo_user";
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
    <Avatar className="h-7 w-7">
      <AvatarImage src={imageUrl} alt={name} />
      <AvatarFallback className="text-lg">{initials}</AvatarFallback>
    </Avatar>
  );
}