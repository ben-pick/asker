import { User } from "@prisma/client";

export default interface SocketUser {
  id: string;
  user: User
}
