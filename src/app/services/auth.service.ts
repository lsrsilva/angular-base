import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public list(): Observable<any> {
    return this.http.get(`${environment.API_URL}/auth/permissions`);
  }

  public create(profile): Observable<any> {
    return this.http.post(`${environment.API_URL}/auth/profiles`, profile);
  }

  public delete(id): Observable<any> {
    return this.http.delete(`${environment.API_URL}/auth/profiles/${id}`);
  }
}
