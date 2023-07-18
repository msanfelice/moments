import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moments';

import { enviroment } from 'src/assets/environment';


@Injectable({
  providedIn: 'root'
})
export class MommentService {
  private baseApiUrl = enviroment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http:HttpClient) { }

    createMoment(formData: FormData): Observable<FormData> {
       return this.http.post<FormData>(this.apiUrl, formData)

    }
}
