import { Message } from "../message/message";
import { Subscriber } from "../subscriber";
import { Subscription } from "./subscription";

export interface Bus {
    subscribe(subscriber: Subscriber): Subscription;
    send(message: Message): void;
}