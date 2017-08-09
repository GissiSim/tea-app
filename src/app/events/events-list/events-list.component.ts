import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Event } from '../../shared'

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsListComponent {
  @Input() events: Event[]
  @Output() selected = new EventEmitter()
  @Output() deleted = new EventEmitter()
}
