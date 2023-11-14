import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IUsers } from 'src/app/shared/models/i-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  listUsers:Array<IUsers> = [];

  searchForm;

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  public ngOnInit(): void {
    const url:string = '/assets/data/users/users.json';
    this.http.get<Array<IUsers>>(url).subscribe((response) => {
      this.listUsers = response;
    }) 
  }
}
