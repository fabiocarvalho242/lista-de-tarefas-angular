import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private apiUrl = 'http://localhost:3000/Tasks';

  constructor(private http: HttpClient) { }

  getTasks() : Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }
}
