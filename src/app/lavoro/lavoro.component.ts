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
      titolo : "Sviluppatore Front-end",
      citta : "Torino",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam."
    },
    {
      titolo : "Sviluppatore Back-end",
      citta : "Bari",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam."
    },
    {
      titolo : "Sviluppatore FullStack",
      citta : "Roma",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam."
    },
    {
      titolo : "Sviluppatore Java",
      citta : "Potenza",
      descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam."
    }
  ];

  // lavoro : any =     {
  //   titolo : "Sviluppatore Front-end",
  //   citta : "Torino",
  //   descrizione : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, accusantium magni. Sint reiciendis dolores deleniti maiores deserunt sunt enim velit dolor quasi, vero cumque nemo possimus obcaecati culpa blanditiis ullam."
  // };

}
