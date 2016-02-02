import { JSONService } from "../services/json.service";
import { Block } from './block';
import { Injector, DynamicComponentLoader,  Component, Inject, OnInit, provide, forwardRef } from 'angular2/core';
import { ReportComponent } from '../report.component';

declare var $:any;
const NUM_USERS = 15;

@Component({
    selector: 'user-stats',
    template: `
        <div *ngIf="data">
            Soy el componente user-start. Me han inyectado datos {{ data }}
        </div>
        Hola holita.
    `
})
export class UserStatsComponent {

    public data: any;

    public setData(data) {
        this.data = data;
    }

}
