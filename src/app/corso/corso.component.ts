import { Component, OnInit } from '@angular/core';
// import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-corso',
  templateUrl: './corso.component.html',
  styleUrls: ['./corso.component.scss']
})
export class CorsoComponent implements OnInit {

  //l'array verrà popolato in seguito ad una query che dal database ritornerà la lista della città
  //senza ripetizioni

  corsi : any[] = [
    {
      id : 1,
      titolo : "Sviluppatore Front-end",
      citta : "Torino",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam.",
      durata: "6 mesi",
      categoria: "informatica",
      edizione: "2021-2022",
      certificazione: true,
      costo: 500,
      programma: "programma del corso: "
    },
    {
      id: 2,
      titolo : "Sviluppatore Back-end",
      citta : "Domodossolaasdasdads",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam.",
      durata: "5 mesi"
    },
    {
      id: 3,
      titolo : "Sviluppatore FullStack",
      citta : "Roma",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam.",
      durata: "7 mesi"
    },
    {
      id: 4,
      titolo : "Sviluppatore Java",
      citta : "Potenza",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam.",
      durata: "2 mesi"
    },
    {
      id: 5,
      titolo : "Sviluppatore Java",
      citta : "Bari",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam.",
      durata: "4 mesi"
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

  mostraDettagli(id:number) {
    console.log(id);
  }

  onSubmit(){

  }
}
