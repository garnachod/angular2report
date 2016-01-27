import {ReportBlockProvider} from './../providers/report-block-provider';

export class ReportBlock {

    private provider: ReportBlockProvider;

    constructor(
        private directive: any,
        private id: string,
        private name: string,
        private language: string,
        private range: Array<string>) {
    }

    getId() { return this.id; };
    getName() { return this.name; };
    getLanguage() {return this.language; };
    getRange() {return this.range; };

    setId(id) { return this.id = id; };
    setName(name) { return this.name = name; };
    setLanguage(language) {return this.language = language; };
    setRange(range) {return this.range = range; };

    injectProvider(provider: ReportBlockProvider) {
        alert('Provider injected with ' + provider);
        this.provider = provider;
    }
}
