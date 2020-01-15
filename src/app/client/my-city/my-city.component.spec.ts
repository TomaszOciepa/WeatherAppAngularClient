import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCityComponent } from './my-city.component';

describe('MyCityComponent', () => {
  let component: MyCityComponent;
  let fixture: ComponentFixture<MyCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
