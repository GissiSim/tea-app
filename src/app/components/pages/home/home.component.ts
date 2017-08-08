import { Component, OnInit } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { AuthService } from '../../../services/auth.service'

import { User } from '../../../shared/user.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userContext: Observable<firebase.User>
  user: User
  items: FirebaseListObservable<any[]>
  eventTitle: string = ''

  constructor(public authService: AuthService, public af: AngularFireDatabase) {
    this.userContext = this.authService.afAuth.authState
    this.userContext.subscribe(user => (this.user = user))
    this.items = af.list('/events', { query: { limitToLast: 50 } })
  }

  ngOnInit() {}

  Send(eventTitle: string) {
    this.items.push({
      title: eventTitle,
      creatorName: this.user.displayName,
      creatorEmail: this.user.email,
      creatorPic: this.user.photoURL,
      numberJoined: 0
    })

    this.eventTitle = ''
  }
}
