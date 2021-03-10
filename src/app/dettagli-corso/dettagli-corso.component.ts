import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { corsiProva } from '../Interfacce/corsiProva';
import { Corso } from '../Interfacce/Corso';
import { Edizione } from '../Interfacce/edizione';
import { CourseService } from '../shared/course.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dettagli-corso',
  templateUrl: './dettagli-corso.component.html',
  styleUrls: ['./dettagli-corso.component.scss']
})
export class DettagliCorsoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCorso();

  }

  corso! : Corso;
  edizioni!: Edizione[];
  
  getCorso(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    
    this.courseService.getCourseById(id).subscribe({
      next: cs => this.corso = cs,
      error: err => console.log(err)
    })


    this.courseService.getEditionsByCourseId(id).subscribe({
      next: cs => {this.fillEdizioni(cs)},
      error: err => console.log(err)
    })
    
    console.log(this.corso);
  }

  fillEdizioni(cs:any){
      cs.forEach((element: Edizione) => {
        this.edizioni.push(element);
      });
  }

}
