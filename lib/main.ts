import { Bar } from './api/bar';

export class Main {
    private _bar: Bar;

    constructor(){
        console.log("Main constructed");
        
        this._bar = new Bar();
        this._bar.log("Baz");
            
    }
}
