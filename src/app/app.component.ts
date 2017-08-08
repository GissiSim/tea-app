import { Component } from '@angular/core'

import * as Rx from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  event

  constructor() {
    const $body = document.body
    const watchMouse = Rx.Observable.fromEvent($body, 'mousemove')
    watchMouse.subscribe(event => (this.event = event))
  }
}
