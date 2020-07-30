import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-employees',
  templateUrl: './register-employees.component.html',
  styleUrls: ['./register-employees.component.css']
})

export class RegisterEmployeesComponent implements OnInit {

  roles : any;
  registerForm = new FormGroup({
    first_name : new FormControl(''),
    last_name : new FormControl(''),
    birthday : new FormControl(''),
    role_id : new FormControl(''),
    cod_bagde : new FormControl('')
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    //Buscar dados assim que a page for carregada
    this.getRoles();

  }

  //Buscar os cargos
  getRoles(){

    
    this.auth.getRoles().subscribe(roles => {
      this.roles = roles
    });
    
  }

  registerEmployee(){

    let data = this.registerForm.value;
    console.log(data)

    this.auth.insertEmployee(data.first_name, data.last_name, data.birthday, data.role_id, data.cod_bagde).subscribe(dados => {
      console.log(dados)
    });

  }

}
