import { Component } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>
  items: FirebaseListObservable<any[]>
  msgVal: string = ''
  user_displayName: string = ''
  user_photoURL: string = ''
  user_email: string = ''

  constructor(public af: AngularFireDatabase, public authService: AuthService) {
    this.user = this.authService.afAuth.authState
    this.authService.afAuth.authState.subscribe(data => {
      if (data) {
        this.user_displayName = data.displayName
        this.user_photoURL = data.photoURL
        this.user_email = data.email
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
    this.items.push({ message: desc })
    this.msgVal = ''
  }
}
