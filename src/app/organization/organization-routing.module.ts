import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgaHomeComponent } from './pages/orga-home/orga-home.component';

const routes: Routes = [
  {path:'', component:OrgaHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
