import {Component} from  'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'app',
    directives: [],
    providers: [],
    template: `

        <report></report>
        
    `
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
