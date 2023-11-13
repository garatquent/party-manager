import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSelectComponent } from './event-select.component';

describe('EventSelectComponent', () => {
  let component: EventSelectComponent;
  let fixture: ComponentFixture<EventSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSelectComponent]
    });
    fixture = TestBed.createComponent(EventSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
