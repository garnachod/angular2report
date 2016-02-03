import { Http } from 'angular2/http';
import { Injectable } from 'angular2/core';

@Injectable()
export class JSONService {

    constructor(private http: Http) {
    }

    getData(endpoint: string){
        return this.http.get(endpoint).map(res => res.json());
    }
}
