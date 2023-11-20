import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from '../models/i-users';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authID:{id:string, pass:string} = {id:'', pass:''};
  profile!:IUsers;
  isLogged:boolean = false;

  constructor(private route:Router, private fire:Auth) { }

  fireAuth() {
    signInWithEmailAndPassword(this.fire, this.authID.id, this.authID.pass)
    .then(creds => {
      console.log(creds, creds.user)
      this.isLogged = true
      console.log(this.profile)
      this.route.navigateByUrl('/');
    })
    .catch(err => console.log(err))
  }
}
