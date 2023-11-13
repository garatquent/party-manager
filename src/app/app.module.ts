import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './template/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EventsComponent } from './pages/events/events.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { LegalComponent } from './pages/legal/legal.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { EventsService } from './shared/services/events.service';
import { SearchFilterPipe } from './shared/pipe/search-filter.pipe';
import { EventSelectComponent } from './pages/event-select/event-select.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    UsersComponent,
    ProfileComponent,
    EventsComponent,
    InscriptionComponent,
    ConnectionComponent,
    LegalComponent,
    ContactComponent,
    SearchFilterPipe,
    EventSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
