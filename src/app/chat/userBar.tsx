import React from "react";
import { User } from "./types";
import UserIcon from "./userIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function UserBar(props: {
  users: User[];
  selectedUser: User;
  className?: string;
  onUserChange: (user: User) => void;
}) {
  return (
    <div className="flex flex-col gap-4 h-full">
      {props.users.map((user) => {
        const pulsingAnimation =
          user.isNew && user != props.selectedUser ? "animate-pulse" : "";
        const hoverAnimation =
          !pulsingAnimation && user != props.selectedUser
            ? "transition ease-in-out hover:bg-stone-100"
            : "";
        const colour = user.isNew
          ? "bg-violet-400"
          : user == props.selectedUser
          ? "bg-stone-200"
          : "";
        const tooltip = user.isNew ? "Student needs help" : "";
        return (
          <TooltipProvider key={user.id}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  onClick={() => props.onUserChange(user)}
                  className={`${colour} ${pulsingAnimation} ${hoverAnimation} rounded-lg p-3`}
                >
                  <UserIcon
                    {...user}
                    className="min-h-16 min-w-16 max-h-16 max-w-16"
                  ></UserIcon>
                </div>
              </TooltipTrigger>
              {tooltip && (
                <TooltipContent>
                  <p>{tooltip}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
}
