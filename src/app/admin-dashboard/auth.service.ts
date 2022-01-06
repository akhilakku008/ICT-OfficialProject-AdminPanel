import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address :string ='http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  
  loginUser(user: any) {
    return this.http.post<any>(`${this.server_address}/login`, user)
  }

  // loggedIn() {
  //   return !!localStorage.getItem('token')
  // }

  // getToken() {
  //   return localStorage.getItem('token')
  // }

  // getUser() {
  //   console.log(localStorage.getItem('user'))
  //   return localStorage.getItem('user')
  // }

 
}
