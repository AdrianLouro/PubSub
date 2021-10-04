import { Message } from "../message/message";
import { Subscriber } from "../subscriber";
import { Subscription } from "./subscription";
import { Bus } from "./bus";

export class SyncBus implements Bus {
    private readonly subscribers = new Map<string, Subscriber[]>();

    public subscribe(subscriber: Subscriber): Subscription {
        return {
            to: (...types: string[]): void => {
                types.forEach((type: string) => this.subscribersOf(type).push(subscriber));
            }
        }
    }

    public send(message: Message): void {
        this.subscribersOf(message.type).forEach(s => s.receive(message));
    }

    private subscribersOf(type: string): Subscriber[] {
        this.createIfNotExistSubscribersOf(type);
        return this.subscribers.get(type) ?? [];
    }

    private createIfNotExistSubscribersOf(type: string): void {
        if (!this.subscribers.has(type)) {
            this.subscribers.set(type, []);
        }
    }
}