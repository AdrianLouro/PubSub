import { Bus } from "../event/bus/bus";

export interface Publisher {
    registerBus(bus: Bus): void;
}