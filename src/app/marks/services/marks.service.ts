import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marks } from 'src/app/models/marks.model'; // Assuming you have a Marks interface

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  private apiUrl = 'http://localhost:8080/marks';

  constructor(private http: HttpClient) { }

  createMarks(marks: Marks): Observable<Marks> {
    return this.http.post<Marks>(`${this.apiUrl}/createMarks`, marks);
  }

  getAllMarks(): Observable<Marks[]> {
    return this.http.get<Marks[]>(`${this.apiUrl}/getMarks`);
  }

  getMarksByStudentId(id: number): Observable<Marks[]> {
    return this.http.get<Marks[]>(`${this.apiUrl}/getMarks/${id}`);
  }

  updateMarks(id: number, marks: Marks): Observable<Marks> {
    return this.http.put<Marks>(`${this.apiUrl}/updateMarks/${id}`, marks);
  }

  deleteMarksByStudentId(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteMarks/${id}`);
  }
}
