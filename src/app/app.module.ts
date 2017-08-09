import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { Ng2RestAppRoutingModule } from './app-routing.module'

// Firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

import { EventsService, TypesService, HomeService, AuthService, FavicoService } from './shared'

import { AppComponent } from './app.component'
import { EventsComponent } from './events/events.component'
import { EventsListComponent } from './events/events-list/events-list.component'
import { EventDetailComponent } from './events/event-detail/event-detail.component'

import { TypesComponent } from './types/types.component'
import { TypesListComponent } from './types/types-list/types-list.component'
import { TypeDetailComponent } from './types/type-detail/type-detail.component'

import { HomeComponent } from './home/home.component'

export const firebaseConfig = {
  apiKey: 'AIzaSyD723zGmg0_uSXkKCY-GWKcvGuBpFLZASg',
  authDomain: 'tea-app-48153.firebaseapp.com',
  databaseURL: 'https://tea-app-48153.firebaseio.com',
  projectId: 'tea-app-48153',
  storageBucket: 'tea-app-48153.appspot.com',
  messagingSenderId: '537359846929'
}

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventsListComponent,
    EventDetailComponent,
    TypesComponent,
    TypesListComponent,
    TypeDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [EventsService, TypesService, HomeService, AuthService, FavicoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
