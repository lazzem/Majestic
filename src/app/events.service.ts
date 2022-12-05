import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl = environment.apiUrl + 'api/event/';

  constructor(private http: HttpClient) { }



  getEvent(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}find/${id}`);
  }

  addEvent(data: any) {
    return this.http.post<any>(`${this.baseUrl}add`, data);
    //{ headers: new HttpHeaders().set("Content-Type", "application/json")}
  }

  updateEvent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}update/${id}`, value);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, { responseType: 'text' });
  }

  getEventsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}list`);
  }
  


}
