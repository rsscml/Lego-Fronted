import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmodelManagementComponent } from './carmodel-management.component';

describe('CarmodelManagementComponent', () => {
  let component: CarmodelManagementComponent;
  let fixture: ComponentFixture<CarmodelManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmodelManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmodelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
