export enum MessageStatus {
    SENDING,
    SENT,
    RECEIVED
}
export interface Message {
    timestamp: number
    status: MessageStatus
    content: string
    id: number
}
export interface User {
    firstName: string
    lastName: string
    icon: string
    status: string
    id: number
    isNew: boolean
}
