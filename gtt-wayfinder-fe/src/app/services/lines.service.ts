import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Line } from '../interfaces/line';

@Injectable({
  providedIn: 'root',
})
export class LinesService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  findAvaiableLines(startStop: string, endStop: string): Observable<Line[]> {
    const params = new HttpParams().set('start', startStop).set('end', endStop);

    return this.http.get<Line[]>(`${this.url}/lines`, { params });
  }
}
