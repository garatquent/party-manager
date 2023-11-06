import { Component } from '@angular/core';
import { IContact } from 'src/app/shared/models/i-users';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact:IContact = {
    name:'',
    firstname:'',
    age:0,
    address: {street:'', town:''} ,
    phone:'',
    mail:'',
    status:'',
    infos:'',
  }

  helloThere() {
    console.log(this.contact)
  }
}
