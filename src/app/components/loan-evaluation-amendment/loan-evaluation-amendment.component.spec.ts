import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEvaluationAmendmentComponent } from './loan-evaluation-amendment.component';

describe('LoanEvaluationAmendmentComponent', () => {
  let component: LoanEvaluationAmendmentComponent;
  let fixture: ComponentFixture<LoanEvaluationAmendmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanEvaluationAmendmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEvaluationAmendmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
