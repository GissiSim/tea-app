import { Component } from '@angular/core'
import * as firebase from 'firebase/app'
import { AuthService, FavicoService } from './shared'
import * as Rx from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brightwire Tea App '
  links = {
    items: ['/events'],
    types: ['/types'],
    home: ['/home']
  }

  user: firebase.User
  userContext = this.authService.userContext
  favicon: any
  noteNum: number = 0
  constructor(public authService: AuthService, public favicoService: FavicoService) {
    this.userContext.subscribe(user => (this.user = user))
  }
  test() {
    this.favicoService.addEvent()
  }
  login() {
    this.authService.loginWithGoogle()
  }
  logout() {
    this.authService.logout()
  }
}

Notification.requestPermission().then(function(result) {
  console.log(result)
})
