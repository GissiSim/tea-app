import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { FirebaseListObservable } from 'angularfire2/database'
import { TypesService, Type } from '../shared'

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  types$: FirebaseListObservable<Type[]>
  selectedType

  constructor(private typesService: TypesService) {}

  ngOnInit() {
    this.types$ = this.typesService.types$
  }

  resetType() {
    let emptyType = {
      name: '',
      bio: ''
    }
    this.selectedType = emptyType
  }

  selectType(type: Type) {
    this.selectedType = type
  }

  saveType(type: Type) {
    this.typesService.saveType(type)

    // Generally, we would want to wait for the result
    this.resetType()
  }

  deleteType(type: Type) {
    this.typesService.deleteType(type)

    // Generally, we would want to wait for the result
    this.resetType()
  }
}
