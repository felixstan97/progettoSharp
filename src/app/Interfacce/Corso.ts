import {Modulo} from './modulo';

export interface Corso {
    id : number;
    titolo : String;
    // durata in ore
    durata : number;
    costo : number;
    programma : String;
    certificazione : boolean;
    categoria : String;
    numeroEdizione : number;
    inizioEdizione : String;
    fineEdizione : String;
    aula : String;
    moduli : Modulo[];
    insegnanti : String[];
    responsabile : String;
    lezioniSettimanali: String[];
}