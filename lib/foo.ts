import { Bar } from './api/bar';

export class Foo {
    private _bar: Bar;

    constructor(){
        console.log("Foo constructed");
        
        this._bar = new Bar();
        this._bar.log("Baz");
       
        
    }
}
