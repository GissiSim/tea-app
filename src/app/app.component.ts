import { Component } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { AuthService } from './services/auth.service'

import { User } from './models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userContext: Observable<firebase.User>
  items: FirebaseListObservable<any[]>
  msgVal: string = ''
  user: User = {
    displayName: '',
    photoURL: '',
    email: ''
  }

  constructor(public af: AngularFireDatabase, public authService: AuthService) {
    this.userContext = this.authService.afAuth.authState
    this.authService.afAuth.authState.subscribe(data => {
      if (data) {
        console.log(data)
        this.user.displayName = data.displayName
        this.user.photoURL = data.photoURL
        this.user.email = data.email
      }
    })
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    })
  }

  login() {
    this.authService.loginWithGoogle()
  }
  logout() {
    this.authService.logout()
  }
  Send(desc: string) {
    this.items.push({ message: { text: desc, userPic: this.user.photoURL } })
    this.msgVal = ''
  }
}
