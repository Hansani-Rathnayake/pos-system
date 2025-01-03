
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { CustomerListComponent } from './customerlist/customerlist.component';

import { ItemListComponent } from './itemlist/itemlist.component';

import { OrdercreationComponent } from './ordercreation/ordercreation.component';



const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },

  { path: 'customers', component: CustomerListComponent },

  { path: 'items', component: ItemListComponent },

  { path: 'order', component: OrdercreationComponent },

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
