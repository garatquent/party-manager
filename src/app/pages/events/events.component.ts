import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IEvents } from 'src/app/shared/models/i-events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent {
  listEvents:Array<IEvents> = [
    {name:'BTS',date:'02/10/2023',location:'Ouillon',type:'999 drinks',capacity:200},
    {name:'Halloween',date:'10/11/2023',location:'St-Jammes',type:'999 drinks',capacity:300},
    {name:'Gala',date:'17/03/2024',location:'Beaumont Palace',type:'gala',capacity:500}
  ];

  searchForm;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }
}
