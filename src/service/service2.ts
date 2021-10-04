import { Bus } from "../event/bus/bus";
import { Message } from "../event/message/message";
import { Message3 } from "../event/message/message3";
import { Publisher } from "../event/publisher";
import { Subscriber } from "../event/subscriber";

export class Service2 implements Publisher, Subscriber {

    private bus: Bus | null = null;

    registerBus(bus: Bus): void {
        this.bus = bus;
    }

    receive(message: Message): void {
        console.log(Service2.name, 'received', message.message);
    }

    executeLogic(): void {
        this.bus?.send(new Message3('Message 3'));
    }
}