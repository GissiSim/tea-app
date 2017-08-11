import { Component, OnInit } from '@angular/core'
import { HomeService, EventData, AuthService, User } from '../shared'
import * as firebase from 'firebase/app'

import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/combineLatest'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data$: Observable<EventData[]> = this.homeService.data$
  currentUser: User
  constructor(private homeService: HomeService, private authService: AuthService) {}
  ngOnInit() {
    this.authService.currentUser.subscribe(user => (this.currentUser = user))
  }
}
