import { Corso } from './Corso';
import { moduliProva } from './moduli';

export const corsiProva : Corso[] = [
    {
        id : 1, 
        titolo : "Full Stack Developer intermedio",
        // durata in ore
        durata : 400,
        costo : 800,
        programma : "Insegnamento dei linguaggi Angular e PHP per studenti di livello intermedio",
        certificazione : true,
        categoria : "informatica",
        numeroEdizione : 3,
        inizioEdizione : "febbraio 2021",
        fineEdizione : "marzo 2021",
        aula : "Aula Vienna",
        moduli : [moduliProva[0], moduliProva[1]],
        insegnanti : ["Mr. Bean"],
        responsabile : "Fausto Shortino",
        lezioniSettimanali: ["lun pm4", "mer am9", "gio am10"]
    },
    {
        id : 2, 
        titolo : "Angular Developer intermedio",
        // durata in ore
        durata : 200,
        costo : 0,
        programma : "Insegnamento dei linguaggi Angular e PHP per studenti di livello intermedio",
        certificazione : false,
        categoria : "informatica",
        numeroEdizione : 3,
        inizioEdizione : "febbraio 2021",
        fineEdizione : "marzo 2021",
        aula : "Aula Vienna",
        moduli : [moduliProva[0], moduliProva[1]],
        insegnanti : ["Mr. Bean"],
        responsabile : "Fausto Shortino",
        lezioniSettimanali: ["lun pm4", "mer am9", "gio am10"]
    },
    {
        id : 3, 
        titolo : "JavaScript Developer intermedio",
        // durata in ore
        durata : 100,
        costo : 300,
        programma : "Insegnamento dei linguaggi Angular e PHP per studenti di livello intermedio",
        certificazione : true,
        categoria : "informatica",
        numeroEdizione : 3,
        inizioEdizione : "febbraio 2021",
        fineEdizione : "marzo 2021",
        aula : "Aula Vienna",
        moduli : [moduliProva[0], moduliProva[1]],
        insegnanti : ["Mr. Bean"],
        responsabile : "Fausto Shortino",
        lezioniSettimanali: ["lun pm4", "mer am9", "gio am10"]
    },
    {
        id : 4, 
        titolo : "C# Developer intermedio",
        // durata in ore
        durata : 1000,
        costo : 0,
        programma : "Insegnamento dei linguaggi Angular e PHP per studenti di livello intermedio",
        certificazione : false,
        categoria : "cucina",
        numeroEdizione : 3,
        inizioEdizione : "febbraio 2021",
        fineEdizione : "marzo 2021",
        aula : "Aula Vienna",
        moduli : [moduliProva[0], moduliProva[1]],
        insegnanti : ["Mr. Bean"],
        responsabile : "Fausto Shortino",
        lezioniSettimanali: ["lun pm4", "mer am9", "gio am10"]
    },
] 