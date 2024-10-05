import { User } from "./types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserIcon(props: User & { className?: string }) {
  return (
    <Avatar className={props.className ?? ""}>
      <AvatarImage src={props.icon} />
      <AvatarFallback>
        {props.firstName.substring(0, 1)}
        {props.lastName.substring(0, 1)}
      </AvatarFallback>
    </Avatar>
  );
}
