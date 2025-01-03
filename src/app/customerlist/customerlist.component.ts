import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../service/customer/customer.component';

interface Customer {

  name: string;

  email: string;

  phone: string;

}

@Component({
  selector: 'app-customerlist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss'],
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  newCustomer: Customer = { name: '', email: '', phone: '' };

  showForm = false;
  
  inputText: string = '';

 

  constructor(@Inject(CustomerService) private customerService: CustomerService) {} // Inject the service

  ngOnInit() {
    this.customers = this.customerService.getCustomers(); // Fetch customers on initialization
  }

  addCustomer() {
    if (this.newCustomer.name && this.newCustomer.email && this.newCustomer.phone) {
      this.customerService.addCustomer({ ...this.newCustomer }); // Add customer using the service
      this.newCustomer = { name: '', email: '', phone: '' }; // Reset the form
    }
  }

  deleteCustomer(index: number) {
    this.customerService.deleteCustomer(index); // Delete customer using the service
    this.customers = this.customerService.getCustomers(); // Update the local customer list
  }
}
