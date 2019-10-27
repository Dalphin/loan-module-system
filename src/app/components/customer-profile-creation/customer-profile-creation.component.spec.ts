import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileCreationComponent } from './customer-profile-creation.component';

describe('CustomerProfileCreationComponent', () => {
  let component: CustomerProfileCreationComponent;
  let fixture: ComponentFixture<CustomerProfileCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
