import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  all(): Observable<any> {
    return this.http.get(`${BASE_URL}projects`);
  }

  constructor(private http: HttpClient) {}
}
