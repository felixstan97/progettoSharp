import { Edizione } from './edizione';

export class Corso {
    id : number = 0;
    name : String = '';
    duration : number = 0;
    price : number = 0;
    program : String = '';
    certification : boolean = false;
    category : String = '';
    editions: Edizione[] = [];
}