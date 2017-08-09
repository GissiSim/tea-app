import { Injectable } from '@angular/core'
import { EventsService } from './events.service'
import { TypesService } from './types.service'
import { FavicoService } from './favico.service'
import { Event } from './event.model'
import { Type } from './type.model'
import { Observable } from 'rxjs/Observable'
import { FirebaseListObservable } from 'angularfire2/database'

export interface UserData {
  name: string
  events: Event[]
}

@Injectable()
export class HomeService {
  events$: FirebaseListObservable<Event[]> = this.eventsService.events$
  types$: FirebaseListObservable<Type[]> = this.typesService.types$
  data$: Observable<UserData[]> = Observable.combineLatest(
    this.types$,
    this.events$,
    (types, events) => {
      this.favicoService.addEvent()
      return types.map(type => {
        return Object.assign(
          {},
          {
            name: type.name,
            events: events.filter(event => event.type == type.$key)
          }
        )
      })
    }
  )

  constructor(
    private typesService: TypesService,
    private eventsService: EventsService,
    public favicoService: FavicoService
  ) {}
}
