import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//add this line


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }// add this and below

  getAuthors(){
    return this._http.get('/authors')
  }


}

