import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  class: '' },
  { path: '/customer-profile', title: 'Customer Profile',  class: '' },
  { path: '/loan-application-creation', title: 'Loan Application Creation',  class: '' },
  { path: '/loan-application-amendment', title: 'Loan Application Amendment',  class: '' },
  { path: '/loan-evaluation-creation', title: 'Loan Evaluation Creation',  class: '' },
  { path: '/loan-evaluation-amendment', title: 'Loan Evaluation Amendment',  class: '' },
  { path: '/loan-opening-creation', title: 'Loan Opening Creation',  class: '' }
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
