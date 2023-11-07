import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrgaHomeComponent } from './pages/orga-home/orga-home.component';
import { OrgaMenuComponent } from './template/orga-menu/orga-menu.component';


@NgModule({
  declarations: [
    OrgaHomeComponent,
    OrgaMenuComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
