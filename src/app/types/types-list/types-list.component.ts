import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Type } from '../../shared'

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypesListComponent {
  @Input() types: Type[]
  @Output() selected = new EventEmitter()
  @Output() deleted = new EventEmitter()
}
