import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2'

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

import { AppComponent } from './app.component'

export const firebaseConfig = {
  apiKey: 'AIzaSyD723zGmg0_uSXkKCY-GWKcvGuBpFLZASg',
  authDomain: 'tea-app-48153.firebaseapp.com',
  databaseURL: 'https://tea-app-48153.firebaseio.com',
  projectId: 'tea-app-48153',
  storageBucket: 'tea-app-48153.appspot.com',
  messagingSenderId: '537359846929'
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
