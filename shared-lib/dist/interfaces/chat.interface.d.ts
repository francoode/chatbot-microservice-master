import { MessageBot } from "./message.interface";
export interface ChatBot {
    id: number;
    internalId: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    messages: MessageBot[];
}
