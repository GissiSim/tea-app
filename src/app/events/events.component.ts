import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { FirebaseListObservable } from 'angularfire2/database'
import { EventsService, Event } from '../shared'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events$: FirebaseListObservable<Event[]>
  selectedEvent

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.events$ = this.eventsService.events$
  }

  resetEvent() {
    let emptyEvent = {
      name: '',
      description: '',
      type: ''
    }
    this.selectedEvent = emptyEvent
  }

  selectEvent(event: Event) {
    this.selectedEvent = event
  }

  saveEvent(event: Event) {
    this.eventsService.saveEvent(event)
    // Generally, we would want to wait for the result
    this.resetEvent()
  }

  deleteEvent(event: Event) {
    this.eventsService.deleteEvent(event)

    // Generally, we would want to wait for the result
    this.resetEvent()
  }
}
