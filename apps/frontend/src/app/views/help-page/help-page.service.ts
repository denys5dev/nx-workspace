import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const ENV = 'http://localhost:3333/api';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Injectable({
  providedIn: 'root'
})
export class HelpPageService {

  constructor(private _http: HttpClient) { }


  createElement(element) {
    return this._http.post<PeriodicElement[]>(`${ENV}/elements`, element);
  }

  getElements() {
    return this._http.get<PeriodicElement[]>(`${ENV}/elements`);
  }

}
