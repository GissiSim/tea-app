import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'
import { AuthService } from '../services/auth.service'
import { User } from '../shared/user.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userContext: Observable<firebase.User>
  user: User
  constructor(public authService: AuthService) {
    this.userContext = this.authService.afAuth.authState
    this.userContext.subscribe(user => (this.user = user))
  }
  ngOnInit() {}
  login() {
    this.authService.loginWithGoogle()
  }
  logout() {
    this.authService.logout()
  }
}
