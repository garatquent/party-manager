import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from '../models/i-users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authID:{id:string, pass:string} = {id:'', pass:''};
  profile!:IUsers;
  isLogged:boolean = false;

  constructor(private http:HttpClient, private route:Router) { }

  authentication() {
    this.http.get<IUsers>(`assets/data/ids/${this.authID.id}@${this.authID.pass}.json`).subscribe(
      {
        next:p => {
          this.profile = p;
          this.isLogged = true;
          this.route.navigateByUrl('/');
        },
        error:e => {
          console.log(e)
        }
      }
    )
  }
}
