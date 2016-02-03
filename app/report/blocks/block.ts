export class Block {

    constructor(
        public componentName: string,
        public directive: any,
        public id: string,
        public name: string,
        public language: string,
        public interval: Array<string>) {
    }

}
