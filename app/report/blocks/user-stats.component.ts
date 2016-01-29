import { FileService } from "../services/file-service";
import { Block } from './block';
import { Component, Inject, OnInit } from 'angular2/core';

@Component({
    providers: [FileService],
    selector: 'user-stats',
    template: `
    Soy el componente user-start. Me han inyectado datos: {{ data }}
    `
})
export class UserStatsComponent extends Block {
    public data : string;

    loadData() {
        this.data = this.service.getData();
    }
}
