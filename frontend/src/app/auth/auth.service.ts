import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  BASE_URL = "http://192.168.14.30:8000/api";

  getAllEmployees(){

    const url = `${this.BASE_URL}/employee`;
    return this.http.get(url);

  }

  getEmployee(id: any){

    const url = `${this.BASE_URL}/employee/` + id;
    return this.http.post(url, {
      "id" : id
    });

  }

  getRoles(){
    
    const url = `${this.BASE_URL}/roles/`;
    return this.http.get(url);

  }


}
