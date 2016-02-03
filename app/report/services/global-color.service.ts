import { Injectable } from 'angular2/core';

export class GlobalColor {

    public backgroundColor: string;
    public primaryColor: string;
    public secondaryColor: string;

    constructor () {
        this.backgroundColor = 'rgba(245, 208, 159, 0.4)';
        this.primaryColor = 'rgba(91, 104, 158, 0.7)';
        this.secondaryColor = 'rgba(204, 89, 205, 1)';
    }
}
