import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core'
import { TypesService, Event, Type } from '../../shared'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDetailComponent implements OnInit {
  originalName: string
  selectedEvent
  types$: Observable<Type[]> = this.typesService.types$

  @Output() saved = new EventEmitter()
  @Output() cancelled = new EventEmitter()

  @Input()
  set event(value) {
    if (value) {
      this.originalName = value.name
    }
    this.selectedEvent = value
  }

  constructor(private typesService: TypesService) {}

  ngOnInit() {
    this.selectedEvent = { name: '', description: '', type: '' }
  }
}
