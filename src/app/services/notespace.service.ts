import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notespace } from '../models/Notespace';
import { Router } from '@angular/router/src/router';

const ApiUrl = 'http://localhost:65475/api'

@Injectable()
export class NotespaceService {

  constructor(private _http: HttpClient) { }

  getNotespace() {
    return this._http.get(`${ApiUrl}/Notespace`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  updateNotespace(notespace: Notespace) {
    return this._http.put(`${ApiUrl}/Notespace`, notespace, { headers: this.getHeaders() });
  }

}
