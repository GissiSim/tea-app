import { Component, Input } from '@angular/core'
import { FirebaseListObservable } from 'angularfire2/database'
import { Router } from '@angular/router'

@Component({
  selector: 'app-firebase-items',
  templateUrl: './firebase-items.component.html',
  styleUrls: ['./firebase-items.component.scss']
})
export class FirebaseItemsComponent {
  @Input() items
  constructor(private router: Router) {}
  goToEvent(item) {
    this.router.navigate([`/event/${item.$key}`])
  }
}
