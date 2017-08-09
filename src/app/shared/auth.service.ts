import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthService {
  userContext = this.afAuth.authState
  user: firebase.User
  constructor(public afAuth: AngularFireAuth) {
    this.userContext.subscribe(user => (this.user = user))
  }

  getUserContext() {
    return this.afAuth.authState
  }
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut()
  }
}
