import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

// New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

// Components
import { AppComponent } from './app.component'
import { LoginComponent } from './components/pages/login/login.component'
import { HomeComponent } from './components/pages/home/home.component'

// Services
import { AuthService } from './services/auth.service'

export const firebaseConfig = {
  apiKey: 'AIzaSyD723zGmg0_uSXkKCY-GWKcvGuBpFLZASg',
  authDomain: 'tea-app-48153.firebaseapp.com',
  databaseURL: 'https://tea-app-48153.firebaseio.com',
  projectId: 'tea-app-48153',
  storageBucket: 'tea-app-48153.appspot.com',
  messagingSenderId: '537359846929'
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
