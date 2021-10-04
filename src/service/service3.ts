import { Bus } from "../event/bus/bus";
import { Message } from "../event/message/message";
import { Message1 } from "../event/message/message1";
import { Message2 } from "../event/message/message2";
import { Publisher } from "../event/publisher";
import { Subscriber } from "../event/subscriber";

export class Service3 implements Publisher, Subscriber {

    private bus: Bus | null = null;

    registerBus(bus: Bus): void {
        this.bus = bus;
    }

    receive(message: Message): void {
        console.log(Service3.name, 'received', message.message);
    }

    executeLogic(): void {
        this.bus?.send(new Message1('Message 1'));
        this.bus?.send(new Message2('Message 2'));
    }
}