import { DataService } from './../services/data-service';

export class Block {

    constructor(
        public directive: any,
        public id: string,
        public name: string,
        public language: string,
        public range: Array<string>,
        public service: DataService) {
    }

}
