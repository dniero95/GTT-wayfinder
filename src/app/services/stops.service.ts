import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stop } from '../interfaces/stop';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StopsService {

  url = environment.apiUrl;

  constructor(private http:HttpClient){}
  
  findAllStops():Observable <Stop[]>{
    return this.http.get<Stop[]>(`${this.url}`);
  }

}
