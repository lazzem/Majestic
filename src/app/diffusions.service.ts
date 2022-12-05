import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiffusionsService {
  private baseUrl = environment.apiUrl + 'api/diffusion/';

  constructor(private http: HttpClient) { }

  getDiff(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}find/${id}`);
  }

  addDiff(data: any) {
    return this.http.post<any>(`${this.baseUrl}add`, data);
    //{ headers: new HttpHeaders().set("Content-Type", "application/json")}
  }

  updateDiff(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, value);
  }

  deleteDiff(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }

  getDiffsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}list`);
  }
}
