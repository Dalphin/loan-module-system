import { Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CustomerProfileCreationComponent } from '../components/customer-profile-creation/customer-profile-creation.component';
import { LoanApplicationCreationComponent } from '../components/loan-application-creation/loan-application-creation.component';
import { LoanApplicationAmendmentComponent } from '../components/loan-application-amendment/loan-application-amendment.component';
import { LoanEvaluationCreationComponent } from '../components/loan-evaluation-creation/loan-evaluation-creation.component';
import { LoanEvaluationAmendmentComponent } from '../components/loan-evaluation-amendment/loan-evaluation-amendment.component';
import { LoanOpeningCreationComponent } from '../components/loan-opening-creation/loan-opening-creation.component';

export const ThemeLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'customer-profile',   component: CustomerProfileCreationComponent },
    { path: 'loan-application-creation',   component: LoanApplicationCreationComponent },
    { path: 'loan-application-amendment',   component: LoanApplicationAmendmentComponent },
    { path: 'loan-evaluation-creation',   component: LoanEvaluationCreationComponent },
    { path: 'loan-evaluation-amendment',   component: LoanEvaluationAmendmentComponent },
    { path: 'loan-opening-creation',   component: LoanOpeningCreationComponent }
];
