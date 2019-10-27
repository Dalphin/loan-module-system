import { Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CustomerProfileCreationComponent } from '../components/customer-profile-creation/customer-profile-creation.component';

export const ThemeLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'customer-profile',   component: CustomerProfileCreationComponent }
];
