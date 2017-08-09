import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EventsComponent } from './events/events.component'
import { TypesComponent } from './types/types.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'types', component: TypesComponent },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule {}
