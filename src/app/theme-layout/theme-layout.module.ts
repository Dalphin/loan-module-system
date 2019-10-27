import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';

import { ThemeLayoutRoutes } from './theme-layout.routing';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CustomerProfileCreationComponent } from '../components/customer-profile-creation/customer-profile-creation.component';

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
    CustomerProfileCreationComponent
  ]
})

export class ThemeLayoutModule {}