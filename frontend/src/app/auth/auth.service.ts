import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  BASE_URL = "http://192.168.14.30:8000/api";

  //Registar novo funcionário
  insertEmployee(st_name : string, lst_name : string, role : number, birthday : Date, badge : number ){

    const url = `${this.BASE_URL}/employee`;
    return this.http.post(url, {
      "first_name" : st_name,
      "last_name" : lst_name,
      "role_id" : role,
      "birthday" : birthday,
      "cod_badge" : badge,
    })

  }
  
  //Buscar todos os funcionários
  getAllEmployees(){

    const url = `${this.BASE_URL}/employee`;
    return this.http.get(url);

  }

  //Buscar funcionário especificado
  getEmployee(id: any){

    const url = `${this.BASE_URL}/employee/` + id
    return this.http.get(url);

  }

  //Buscar todos os cargos
  getRoles(){
    
    const url = `${this.BASE_URL}/roles/`;
    return this.http.get(url);

  }


}
