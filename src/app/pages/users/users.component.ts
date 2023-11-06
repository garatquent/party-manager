import { Component } from '@angular/core';
import { IUsers } from 'src/app/shared/models/i-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  listUsers:Array<IUsers> = [
    {name:'Garat',firstname:'Quentin',mail:'quentin.garat@gmail.com',status:'super_admin'},
    {name:'Man',firstname:'Bat',mail:'bat.man@gmail.com',status:'user'},
    {name:'Man',firstname:'Super',mail:'super.man@gmail.com',status:'admin'}
  ]
}
