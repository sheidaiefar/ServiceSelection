import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { TERMS_OF_CONDITIONS, SERVICE_TYPES } from './data';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  getServiceTypes() {
    return of(SERVICE_TYPES);
  }

  getTermsOfConditionsText() {
    return of(TERMS_OF_CONDITIONS);
  }
}
