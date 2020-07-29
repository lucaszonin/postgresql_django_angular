import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../../auth/auth.service';



@Component({
  selector: 'app-search-employees',
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.css'] 
})
export class SearchEmployeesComponent implements OnInit {

  constructor(private auth: AuthService) { }

  showData = false;
  employee = {};

  searchForm = new FormGroup({
    search_response : new FormControl('')
  });

  ngOnInit(): void {
  }

  showEmployees(){

    this.showData = true;
    return this.auth.getAllEmployees().subscribe(employee => {
      console.log(employee)
      this.employee = employee 
    });
  }

  showEmployee(){

    const search_data = this.searchForm.value;
    console.log(search_data);

   return this.auth.getEmployee(search_data.search_response).subscribe(employee => {
    console.log(employee) 
    this.employee = employee });
  }

}
