import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Type } from './type.model'

@Injectable()
export class TypesService {
  types$: FirebaseListObservable<Type[]> = this.af.list('/types')

  constructor(public af: AngularFireDatabase) {}

  saveType(type: Type) {
    return type.$key ? this.updateType(type) : this.createType(type)
  }

  createType(type: Type) {
    return this.af.list('/types').push(type)
  }

  updateType(type: Type) {
    return this.af.list('/types').update(type.$key, type)
  }

  deleteType(type: Type) {
    return this.af.list('/types').remove(type.$key)
  }
}
