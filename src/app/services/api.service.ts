import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from "../models/contact.model";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Response> {
    return this.http.get<Response>("https://reqres.in/api/users?delay=1") 
  }
}
