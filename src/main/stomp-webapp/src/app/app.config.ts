import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { RxStompService } from './services/rx-stomp.service';
import { rxStompServiceFactory } from './factories/rx-stomp-service.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
    },
  ]
};
