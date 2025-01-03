import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
})
export class AppComponent {
  items = [
    { name: 'Apple', price: 1.5, quantity: 10 },
    { name: 'Banana', price: 0.5, quantity: 20 },
  ];

  isAddingItem = false;

  addItemForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0.01)]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  openAddItemForm() {
    this.isAddingItem = true;
  }

  closeAddItemForm() {
    this.isAddingItem = false;
    this.addItemForm.reset();
  }

  addItem() {
    if (this.addItemForm.valid) {
      const newItem = {
        name: this.addItemForm.value.name as string,
        price: parseFloat(this.addItemForm.value.price as string),
        quantity: parseInt(this.addItemForm.value.quantity as string, 10),
      };
      this.items.push(newItem);
      this.closeAddItemForm();
    }
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
