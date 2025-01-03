import { Routes } from '@angular/router';
import { CustomerListComponent } from './customerlist/customerlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { OrdercreationComponent } from './ordercreation/ordercreation.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'customers', pathMatch: 'full' }, // child route
      { path: 'customers', component: CustomerListComponent }, // Customer child route
      { path: 'items', component: ItemlistComponent }, // Items child route
      { path: 'orders', component: OrdercreationComponent }, // Orders child route
    ],
  },
];
