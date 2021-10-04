import { Message } from "./message/message";

export interface Subscriber {
    receive(message: Message): void;
}