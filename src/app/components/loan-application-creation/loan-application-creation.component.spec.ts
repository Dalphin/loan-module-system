import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationCreationComponent } from './loan-application-creation.component';

describe('LoanApplicationCreationComponent', () => {
  let component: LoanApplicationCreationComponent;
  let fixture: ComponentFixture<LoanApplicationCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanApplicationCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
