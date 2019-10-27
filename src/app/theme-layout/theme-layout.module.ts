import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';

import { ThemeLayoutRoutes } from './theme-layout.routing';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CustomerProfileCreationComponent } from '../components/customer-profile-creation/customer-profile-creation.component';
import { LoanApplicationCreationComponent } from '../components/loan-application-creation/loan-application-creation.component';
import { LoanApplicationAmendmentComponent } from '../components/loan-application-amendment/loan-application-amendment.component';
import { LoanEvaluationCreationComponent } from '../components/loan-evaluation-creation/loan-evaluation-creation.component';
import { LoanEvaluationAmendmentComponent } from '../components/loan-evaluation-amendment/loan-evaluation-amendment.component';
import { LoanOpeningCreationComponent } from '../components/loan-opening-creation/loan-opening-creation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ThemeLayoutRoutes),
    FormsModule,
    IconsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    CustomerProfileCreationComponent,
    LoanApplicationCreationComponent,
    LoanApplicationAmendmentComponent,
    LoanEvaluationCreationComponent,
    LoanEvaluationAmendmentComponent,
    LoanOpeningCreationComponent
  ]
})

export class ThemeLayoutModule {}