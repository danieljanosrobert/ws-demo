import { myRxStompConfig } from "../config/stomp.config";
import { RxStompService } from "../services/rx-stomp.service";

export function rxStompServiceFactory() {
  const rxStomp = new RxStompService();
  rxStomp.configure(myRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}