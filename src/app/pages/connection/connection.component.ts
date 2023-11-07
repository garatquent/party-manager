import { Component } from '@angular/core';
import { IConnect } from 'src/app/shared/models/i-connect';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
  constructor(public auth:AuthService){}
}