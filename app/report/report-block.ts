import {ReportBlockProvider} from './providers/report-block-provider';

export class ReportBlock {

    constructor(
        private id:string,
        private name:string,
        private language:string,
        private range:Array<string>) {

    }

    getId() { return this.id; };
    getName() { return this.name; };
    getLanguage() {return this.language; };
    getRange() {return this.range; };
    intjectProvider(provider: ReportBlockProvider) {

    }
}
