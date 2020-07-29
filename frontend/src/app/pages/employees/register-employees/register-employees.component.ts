import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register-employees',
  templateUrl: './register-employees.component.html',
  styleUrls: ['./register-employees.component.css']
})

export class RegisterEmployeesComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }


  getRoles(){

    return this.auth.getRoles();

  }

}
