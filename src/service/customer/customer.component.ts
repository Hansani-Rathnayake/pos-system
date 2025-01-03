import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class CustomerService {
  private customers = [
    { name: 'Hansani', email: 'hansani@example.com', phone: '1234567890' },
    { name: 'Rathnayake', email: 'rathnayake@example.com', phone: '0987654321' },
  ]; // Initial customer data

  // Retrieve all customers
  getCustomers() {
    return this.customers;
  }

  // Add a new customer
  addCustomer(customer: { name: string; email: string; phone: string }) {
    this.customers.push(customer);
  }

  // Delete a customer by index
  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }
}
