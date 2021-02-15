import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lavoro',
  templateUrl: './lavoro.component.html',
  styleUrls: ['./lavoro.component.scss']
})
export class LavoroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lavori : any[] = [
    {
      id : 1,
      titolo : "Sviluppatore Front-end",
      citta : "Torino",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam."
    },
    {
      id: 2,
      titolo : "Sviluppatore Back-end",
      citta : "Bari",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam."
    },
    {
      id: 3,
      titolo : "Sviluppatore FullStack",
      citta : "Roma",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam."
    },
    {
      id: 4,
      titolo : "Sviluppatore Java",
      citta : "Potenza",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam."
    }
  ];

  mostraDettagli(id:number) {
    console.log(id);
  }

  selezionaCat(value : string) {
    let tutteCategorie = document.getElementsByClassName('sottocategorie')
    let sottoCategoria = document.getElementById(value);
    sottoCategoria!.style.display = 'block';
  }

}
