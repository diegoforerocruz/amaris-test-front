import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { EmployeeDataService } from '../../services/employee-data.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-search',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
  ],
  templateUrl: './employee-search.component.html',
  styleUrl: './employee-search.component.scss'
})
export class EmployeeSearchComponent {
  displayedColumns: string[] = [
    "id",
    "employee_name",
    "employee_salary",
    "employeeAnnualSalary",
    "employee_age",
    "profile_image",
  ];

  employeesData: Employee[] = [];

  errorMsg: string = '';

  employeeID = new FormControl(null);

  constructor(private employeeDataService: EmployeeDataService) {}


  search() {
    this.employeesData = [];
    this.errorMsg = '';
    let id = this.employeeID.value;
    if(id) {
      this.employeeDataService.getEmployeeById(id).subscribe({
        next: (response) => {
          this.employeesData = response!==null?[response]:[];
        },
        error: (err) => {
          this.errorMsg = 'Ha ocurrido un error';
          console.log(err);
        }
      });
    } else {
      this.employeeDataService.getAllEmployees().subscribe({
        next: (response) => {
          console.log(response);
          this.employeesData = response !== null? response:[];
        },
        error: (err) => {
          this.errorMsg = 'Ha ocurrido un error';
          console.log(err);
        }
      });
    }
  }

  
}
