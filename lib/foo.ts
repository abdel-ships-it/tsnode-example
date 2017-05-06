import { Bar } from './api/bar';

export class Foo {
    private _bar: Bar;

    constructor(){
        console.log("Foo constructed");
        
        this._bar = new Bar();

        setTimeout(() => {
            setInterval(() => this._bar.log("Baz"), 1000);
        }, 2000)
        
    }
}