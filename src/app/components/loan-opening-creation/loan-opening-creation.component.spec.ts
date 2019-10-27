import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOpeningCreationComponent } from './loan-opening-creation.component';

describe('LoanOpeningCreationComponent', () => {
  let component: LoanOpeningCreationComponent;
  let fixture: ComponentFixture<LoanOpeningCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanOpeningCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOpeningCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
