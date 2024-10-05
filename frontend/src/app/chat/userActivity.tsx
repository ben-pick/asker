import type { User } from "./types";
import UserIcon from "./userIcon";
export default function userActivity(props: User) {
  return (
    <div className="flex justify-start gap-4">
      <UserIcon {...props}></UserIcon>
      <div className="flex flex-col">
        <p className="text-sm font-medium leading-none">
          {props.firstName} {props.lastName}
        </p>
        <p className="text-sm text-muted-foreground">{props.status}</p>
      </div>
    </div>
  );
}
