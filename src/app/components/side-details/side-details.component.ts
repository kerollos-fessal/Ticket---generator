import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { FormControl, FormGroup } from '@angular/forms';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-side-details',
  templateUrl: './side-details.component.html',
  styleUrls: ['./side-details.component.css']
})


export class SideDetailsComponent implements OnInit{
  customers: Customer[] | undefined;
  selectedCustomer: Customer[] | undefined;
  formGroup: FormGroup | undefined;
  i: number = 0;
  issues: City[] | undefined;

  selectedIssues: City | undefined;


  ngOnInit() {
    this.customers = [
      { name: 'عالية', code: 'عا', index:0 },
      { name: 'متوسطة', code: 'مت', index:0 },
      { name: 'منخفضة', code: 'من', index:0  },
    ];
    this.formGroup = new FormGroup({
      selectedCustomer: new FormControl<Customer | null>(null),
    });

    this.issues = [
      { name: 'مشكلة مرتجع', code: 'NY' },
      { name: 'مشكلة ثانية', code: 'RM' },
      { name: 'مشكلة ثالثة', code: 'LDN' },

  ];
  }
}
