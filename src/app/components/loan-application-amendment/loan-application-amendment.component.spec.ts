import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationAmendmentComponent } from './loan-application-amendment.component';

describe('LoanApplicationAmendmentComponent', () => {
  let component: LoanApplicationAmendmentComponent;
  let fixture: ComponentFixture<LoanApplicationAmendmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanApplicationAmendmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationAmendmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
