import { Component, Input } from '@angular/core'
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-firebase-items',
  templateUrl: './firebase-items.component.html',
  styleUrls: ['./firebase-items.component.scss']
})
export class FirebaseItemsComponent {
  @Input() items
}
