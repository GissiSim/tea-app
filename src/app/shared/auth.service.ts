import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database'
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { User } from './user.model'

@Injectable()
export class AuthService {
  userContext: Observable<firebase.User> = this.afAuth.authState
  users$: FirebaseListObservable<User[]> = this.af.list('/users')
  currentUser = new BehaviorSubject<any>('message')
  user = this.currentUser.asObservable()

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.userContext.subscribe(me => {
      if (me) {
        this.users$.subscribe(users => {
          const theUser = users.filter(user => me.uid === user.uid)
          if (theUser.length > 0) {
            this.updateUser(theUser[0])
          } else {
            this.createUser(me)
          }
        })
      }
    })
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
  updateUser(user: User) {
    this.currentUser.next(user)
  }
  loadUserInfo() {
    return this.currentUser
  }
  createUser(user: firebase.User) {
    let newUser = {
      uid: user.uid,
      name: user.displayName,
      picture: user.photoURL,
      email: user.email
    }
    return this.users$.push(newUser)
  }
  logout() {
    this.currentUser.next({})
    return this.afAuth.auth.signOut()
  }
}
