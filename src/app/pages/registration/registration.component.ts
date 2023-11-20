import { Component } from '@angular/core';
import { IRegistration } from 'src/app/shared/models/i-registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  sub:IRegistration = {
    name:'',
    firstname:'',
    age:0,
    phone:'',
    mail:'',
    status:'',
    infos:'',
  }
}
