import { Message } from "./message";

export class Message3 implements Message {

    readonly type: string;
    readonly timestamp: Date;
    readonly message: string;

    constructor(message: string) {
        this.type = Message3.name;
        this.timestamp = new Date();
        this.message = message;
    }

}