import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Event } from './event.model'

@Injectable()
export class EventsService {
  events$: FirebaseListObservable<Event[]> = this.af.list('/events')

  constructor(public af: AngularFireDatabase) {}

  saveEvent(event) {
    return event.$key ? this.updateEvent(event) : this.createEvent(event)
  }

  createEvent(event: Event) {
    var options = {
      body: `Event: ${event.name} Description:${event.description}`,
      icon: 'icon'
    }
    var n = new Notification('New event created', options)
    return this.events$.push(event)
  }

  updateEvent(event: Event) {
    return this.events$.update(event.$key, event)
  }

  deleteEvent(event: Event) {
    return this.events$.remove(event.$key)
  }
}
