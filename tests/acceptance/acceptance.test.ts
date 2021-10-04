import { SyncBus } from "../../src/event/bus/sync-bus";
import { Message1 } from "../../src/event/message/message1";
import { Message2 } from "../../src/event/message/message2";
import { Message3 } from "../../src/event/message/message3";
import { Service1 } from "../../src/service/service1";
import { Service2 } from "../../src/service/service2";
import { Service3 } from "../../src/service/service3";

// TODO: implement real tests
describe('PubSub', () => {

  it('Publishers are publishing messages and subscribers are receiving them', () => {
    const bus = new SyncBus();
    const service1 = new Service1();
    service1.registerBus(bus);
    const service2 = new Service2();
    service2.registerBus(bus);
    const service3 = new Service3();
    service3.registerBus(bus);

    bus.subscribe(service1).to(Message1.name);
    bus.subscribe(service2).to(Message2.name);
    bus.subscribe(service3).to(Message1.name, Message2.name, Message3.name);

    service1.executeLogic();
    service2.executeLogic();
    service3.executeLogic();
  });
});