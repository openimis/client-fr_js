import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coverage } from '../models/coverage';
import { Observable } from 'rxjs';
import { fhirUrl } from '../global';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {
  PatientID = 1975632;
  configUrl = fhirUrl + '/Coverage?_format=json&_pretty=true&beneficiary=Patient/' + this.PatientID;

  constructor(private http: HttpClient) { }

  getData(): Observable<Coverage[]> {
    return this.http.get<Coverage[]>(this.configUrl);
  }
}
