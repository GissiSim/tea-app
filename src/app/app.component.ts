import { Component } from '@angular/core'
import { AuthService, FavicoService, User } from './shared'
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

  userContext = this.authService.userContext
  favicon: any
  noteNum: number = 0
  constructor(public authService: AuthService, public favicoService: FavicoService) {}
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
