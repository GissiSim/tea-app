import { Injectable } from '@angular/core'

declare const Favico: any

@Injectable()
export class FavicoService {
  eventNum: number = 0
  favIco: any
  constructor() {
    this.favIco = new Favico({
      animation: 'slide',
      bgColor: '#0797C7',
      textColor: '#fff'
    })
  }

  addEvent() {
    this.favIco.badge((this.eventNum += 1))
  }
  removeEvent() {
    this.favIco.badge((this.eventNum -= 1))
  }
  resetEvent() {
    this.favIco.badge(0)
  }
}
