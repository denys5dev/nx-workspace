import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

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
    return this._http.post<PeriodicElement[]>(`${environment.baseUrl}/elements`, element);
  }

  getElements() {
    return this._http.get<PeriodicElement[]>(`${environment.baseUrl}/elements`);
  }

}
