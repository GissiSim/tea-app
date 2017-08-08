import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import { User } from '../shared/user.model'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthService {
  userContext: Observable<firebase.User>
  user: User
  constructor(public afAuth: AngularFireAuth) {
    this.userContext = this.afAuth.authState
    this.userContext.subscribe(data => {
      if (data) {
        this.user = new User(data.displayName, data.photoURL, data.email)
      }
    })
  }

  getUser() {
    return this.user
  }
  getUserContext() {
    return this.userContext
  }
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut()
  }
}
