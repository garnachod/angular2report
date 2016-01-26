import { Http } from 'angular2/http';
import { ReportBlockProvider } from './report-block-provider';

export class FileProvider implements ReportBlockProvider{

    constructor(private file: string, private http: Http) {

    }

    getData(){
        return this.http.get(this.file).map(res => res.json());
    }
}
