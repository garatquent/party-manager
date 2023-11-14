import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IEvents } from 'src/app/shared/models/i-events';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit{
  searchForm;
  listEvents: Array<IEvents> = [];

  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  public ngOnInit(): void {
    const url:string = '/party-manager/assets/data/events/events.json';
    this.http.get<Array<IEvents>>(url).subscribe((response) => {
      this.listEvents = response;
    }) 
  }
}
