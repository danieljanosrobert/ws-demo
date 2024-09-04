import { Injectable } from '@angular/core';
import { IMessage, RxStomp } from '@stomp/rx-stomp';
import { GreetingsResponse, GreetingsResponseDto } from '../data/greetings-response.dto';
import { map } from 'rxjs/operators';
import { RequestDto } from '../data/name-request.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxStompService extends RxStomp {
  constructor() {
    super();
  }

  sendMessage(nameRequest: RequestDto) {
    this.publish({
      destination: '/app/send',
      body: JSON.stringify(nameRequest),
    });
  }

  watchGreetings(): Observable<GreetingsResponse> {
    return this.watch('/topic/new-message').pipe(
      map((message: IMessage) => {
        const body = message.body || '{}';
        return JSON.parse(body);
      }),
      map((message: GreetingsResponseDto) => {
        const now = new Date();
        const responseTime = new Date(message.time);
        const isToday = responseTime.toDateString() === now.toDateString();
        return { ...message, time: responseTime, today: isToday };
      })
    );
  }
}