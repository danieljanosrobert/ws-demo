import { RxStompConfig } from '@stomp/rx-stomp';

export const myRxStompConfig: RxStompConfig = {
  brokerURL: 'ws://localhost:11300/ws-demo',
  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  reconnectDelay: 15000,
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
};
