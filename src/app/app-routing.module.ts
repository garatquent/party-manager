import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { EventsComponent } from './pages/events/events.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'users', component:UsersComponent},
  {path:'events', component:EventsComponent},
  {path:'connection', component:ConnectionComponent},
  {path:'inscription', component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
