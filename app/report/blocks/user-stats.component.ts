import { JSONService } from "../services/json.service";
import { Block } from './block';
import { Component, Inject, OnInit, provide } from 'angular2/core';

@Component({
    selector: 'user-stats',
    template: `
        Soy el componente user-start. Me han inyectado datos
    `
})
export class UserStatsComponent  {

    data =  "test";

}
