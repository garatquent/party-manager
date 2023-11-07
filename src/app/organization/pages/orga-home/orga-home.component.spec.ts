import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaHomeComponent } from './orga-home.component';

describe('OrgaHomeComponent', () => {
  let component: OrgaHomeComponent;
  let fixture: ComponentFixture<OrgaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgaHomeComponent]
    });
    fixture = TestBed.createComponent(OrgaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
