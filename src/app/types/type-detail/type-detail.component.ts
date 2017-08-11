import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { Type } from '../../shared'

@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeDetailComponent {
  originalName: string
  selectedType
  @Output() saved = new EventEmitter()
  @Output() cancelled = new EventEmitter()

  @Input()
  set type(value) {
    if (value) {
      this.originalName = value.name
    }
    this.selectedType = value
  }
  ngOnInit() {
    this.selectedType = { name: '', bio: '' }
  }
}
