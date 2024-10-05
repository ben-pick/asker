"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Chat from "./chat";
import UserBar from "./userBar";
import { Separator } from "@/components/ui/separator";
import { ws } from "@/app/ws";

import { MessageStatus, User } from "./types";
const users = [
  {
    firstName: "Ben",
    lastName: "Smith",
    icon: "https://i.pravatar.cc/64",
    status: "Online",
    id: 1,
    isNew: false,
  },
  {
    firstName: "Georgia",
    lastName: "Ramesh",
    icon: "https://i.pravatar.cc/64",
    status: "Online",
    id: 2,
    isNew: true,
  },
];
const userToMessages = new Map();
userToMessages.set(1, [
  {
    timestamp: 1728107720,
    status: MessageStatus.SENT,
    content: "Hello georgia!!",
    id: 1,
  },
  {
    timestamp: 1728107767,
    status: MessageStatus.RECEIVED,
    content: "Hello anon!!",
    id: 2,
  },
]);
userToMessages.set(2, [
  {
    timestamp: 1728107720,
    status: MessageStatus.SENT,
    content: "Hello ben!!",
    id: 3,
  },
  {
    timestamp: 1728107767,
    status: MessageStatus.RECEIVED,
    content: "Hello anon!!",
    id: 4,
  },
]);

export default function Page() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const currMessages = userToMessages.get(selectedUser.id);
  const onUserChange = (newUser: User) => {
    setSelectedUser(newUser);
  };
  useEffect(() => {
    ws.on("connect", () => {
      console.log("here");
    });
  });
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="h-5/6 w-5/6">
        <CardContent className="h-full">
          <div className="flex pt-6 h-full gap-4">
            <UserBar
              onUserChange={onUserChange}
              selectedUser={selectedUser}
              className="h-full"
              users={users}
            ></UserBar>
            <Separator orientation="vertical"></Separator>
            <Chat
              className="h-full px-4 grow"
              currentUser={selectedUser}
              messages={currMessages}
            ></Chat>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
