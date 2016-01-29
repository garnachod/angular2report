import { Http } from 'angular2/http';
import { DataService } from './data-service';
import { Injectable } from 'angular2/core';

@Injectable()
export class JSONService implements DataService {

    constructor(private file: string, private http: Http) {
    }

    getData(){
        return this.http.get(this.file).map(res => res.json());
    }
}
