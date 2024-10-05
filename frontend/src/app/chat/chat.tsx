import type { Message, User } from "./types";
import MessageBubble from './messageBubble';
import UserActivity from "./userActivity";
import MessageInput from "./messageInput";
import { Separator } from "@/components/ui/separator"

interface ChatProps {
  messages: Message[];
  currentUser: User;
}
export default function Chat(props: ChatProps & { className?: string }) {
  return (
    <div className={(props.className ?? "") + " flex flex-col gap-4"}>
      <UserActivity {...props.currentUser}></UserActivity>
      <Separator orientation="horizontal" />
      <div className="grow h-full min-h-0">
        <div className="flex flex-col gap-4 overflow-y-auto h-full ">
          {props.messages.map((message) => (
            <MessageBubble key={message.id} {...message}></MessageBubble>
          ))}
        </div>
      </div>
      <Separator orientation="horizontal" />
      <MessageInput></MessageInput>
    </div>
  );
}
