import { JSONService } from "../services/json-service";
import { Block } from './block';
import { Component, Inject, OnInit } from 'angular2/core';

@Component({
    providers: [JSONService],
    selector: 'user-stats',
    template: `
    Soy el componente user-start. Me han inyectado datos: {{ data }}
    `
})
export class UserStatsComponent  {
    public data : string;

    loadData() {
        this.data = this.service.getData();
    }
}
