export enum MessageStatus {
  SENDING,
  SENT,
  RECEIVED,
}
export enum UserStatus {
  ONLINE="Online",
  OFFLINE="Offline",
}
export interface Message {
  timestamp: number;
  status: MessageStatus;
  content: string;
  id: number;
}
export interface User {
  firstName: string;
  lastName: string;
  icon: string;
  status: UserStatus;
  id: number;
  isNew: boolean;
}
