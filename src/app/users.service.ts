import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  private baseUrl = environment.apiUrl + 'api/users/';

  constructor(private http: HttpClient) { }

  
  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}find/${id}`);
  }

  addUser(data: any) {
    return this.http.post<any>(`${this.baseUrl}add`, data);
    //{ headers: new HttpHeaders().set("Content-Type", "application/json")}
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}list`);
  }
  
}
