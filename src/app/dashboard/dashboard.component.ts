import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  title = 'Dashboard';
  stats = {
    totalCustomers: 100,
    totalOrders: 50,
    totalitem: 50,
    totalRevenue: 15000,
  };
}