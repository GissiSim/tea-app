import { Component, OnInit } from '@angular/core'
import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable
} from 'angularfire2/database'

import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { User } from '../../../shared/user.model'

import { AuthService } from '../../../services/auth.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  userContext: Observable<firebase.User>
  user: User

  eventId: string
  private sub: any
  event
  title: string
  creator: string
  joinNum: number
  joinName
  joinedUsers

  event$: FirebaseObjectObservable<any[]>
  userList$: FirebaseListObservable<any[]>

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    public af: AngularFireDatabase
  ) {
    this.userContext = this.authService.afAuth.authState
    this.userContext.subscribe(user => (this.user = user))
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.eventId = params['id'] // (+) converts string 'id' to a number
    })
    this.event$ = this.af.object(`/events/${this.eventId}`)
    this.userList$ = this.af.list(`/events/${this.eventId}/namesJoined`)
    this.event$.subscribe(event => {
      this.event = event
      this.title = this.event.title
      this.creator = this.event.creatorName
      this.joinNum = this.event.numberJoined
    })
    this.joinedUsers = []
    this.userList$.forEach(user => {
      user.forEach(oneuser => this.joinedUsers.push(oneuser))
    })
  }

  selectUser() {
    this.userList$
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  joinEvent() {
    this.joinNum = this.joinNum + 1
    this.event$.update({ numberJoined: this.joinNum })
    this.userList$.push({ name: this.user.displayName })
  }
}
