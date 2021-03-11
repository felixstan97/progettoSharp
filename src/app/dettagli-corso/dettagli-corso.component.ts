import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { corsiProva } from '../Interfacce/corsiProva';
import { Corso } from '../Interfacce/Corso';
import { Edizione } from '../Interfacce/edizione';
import { Modulo } from '../Interfacce/modulo';
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
  moduli!: Modulo[];
  
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
    console.log('---edizioni---');
    console.log(this.edizioni);
    console.log('---moduli---');
    console.log(this.moduli);

  }

  fillEdizioni(cs:any){
    let tempEd: Edizione[] = [];
      cs.forEach((element: Edizione) => {
        tempEd.push(element);
      });
      this.edizioni = tempEd;
  }

  fillModuli(cs:any){
    let tempMod: Modulo[]= [];
    cs.forEach((element: Modulo) => {
      tempMod.push(element);
    });
    tempMod.forEach(modulo => {
      this.edizioni.forEach((edizione,index) =>{
        if(edizione.id == modulo.editionId){
          console.log(modulo);
          this.edizioni[index].modules.push(modulo);
          console.log('if');
        }
      })
    })
    // this.edizioni.m = tempMod;
    // this.moduli = tempMod;
}

  viewEditionDetails(id: number,i: number){
    // let editionTemp = this.edizioni[id];
    this.courseService.getModuleByEditionId(id).subscribe({
      next: cs => {this.fillModuli(cs)},
      error: err => console.log(err)
    });
    let element = document.getElementsByClassName("moduli");
   }

}
