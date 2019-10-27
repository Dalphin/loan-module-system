import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEvaluationCreationComponent } from './loan-evaluation-creation.component';

describe('LoanEvaluationCreationComponent', () => {
  let component: LoanEvaluationCreationComponent;
  let fixture: ComponentFixture<LoanEvaluationCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanEvaluationCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEvaluationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
