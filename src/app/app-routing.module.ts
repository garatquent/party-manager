import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }        from './pages/home/home.component';
import { ProfileComponent }     from './pages/profile/profile.component';
import { UsersComponent }       from './pages/users/users.component';
import { EventsComponent }      from './pages/events/events.component';
import { ConnectionComponent }  from './pages/connection/connection.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LegalComponent }       from './pages/legal/legal.component';
import { ContactComponent }     from './pages/contact/contact.component';
import { EventSelectComponent } from './pages/event-select/event-select.component';
import { authGuard }            from './shared/security/auth.guard';

const routes: Routes = [
  {path:'',             component:HomeComponent},
  {path:'profile',      component:ProfileComponent},
  {path:'users',        component:UsersComponent},
  {path:'events',       component:EventsComponent},
  {path:'event/:fiesta',component:EventSelectComponent},
  {path:'connection',   component:ConnectionComponent},
  {path:'inscription',  component:InscriptionComponent},
  {path:'legal',        component:LegalComponent},
  {path:'contact',      component:ContactComponent},
  {path:'organization', loadChildren:
    () => import('./organization/organization.module').then(m => m.OrganizationModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
