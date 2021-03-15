import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { corsiProva } from '../Interfacce/corsiProva';
import { Corso } from '../Interfacce/Corso';
import { Edizione } from '../Interfacce/edizione';
import { Modulo } from '../Interfacce/modulo';
import { CourseService } from '../shared/course.service';
import { SharedService } from '../shared/shared.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IscrizioniComponent } from '../iscrizioni/iscrizioni.component';
import { Observable } from 'rxjs';
import { ApplicationPerson } from '../Interfacce/application-person';
import { element } from 'protractor';

@Component({
  selector: 'app-dettagli-corso',
  templateUrl: './dettagli-corso.component.html',
  styleUrls: ['./dettagli-corso.component.scss']
})
export class DettagliCorsoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router:Router,
              private courseService:CourseService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCorso();
    this.edizioni= [];
  }

  corso! : Corso;
  edizioni!: Edizione[];
  moduli!: Modulo[];
  showPopup:boolean=false;

  openDialog(edizione: Edizione) {
    const dialogRef = this.dialog.open(Iscrizioni, {
      data: {
        courseEditionId : edizione.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toIscrizioni(id:number){
    // this.router.navigate(['iscrizioni/'+id])
    // console.log(id);
    this.router.navigate(['iscrizioni/'], {queryParams: {searchString : id}});
    window.scroll(0,0);
  }

  getCorso(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    
    this.courseService.getCourseById(id).subscribe({
      next: cs => this.corso = cs,
      error: err => console.log(err)
    })


    this.courseService.getEditionsByCourseId(id).subscribe({
      next: cs => {this.fillEdizioni(cs)},
      error: err => {
        console.log(err);
        this.edizioni=[];
      }
    })
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

// -----------------------------------    SECONDO COMPONENTE TS OCIO --------------------

@Component({
  selector: 'iscrizioni',
  templateUrl: './iscrizioni.html',
})
export class Iscrizioni {
  constructor(@Inject(MAT_DIALOG_DATA) 
              public data:CourseEditionDialogData, 
              private courseService:CourseService ){

    console.log(data)

  }

  listaPersone:ApplicationPerson[] = []

  ngOnInit():void{
    this.getApplicationPerson(this.data.courseEditionId);
  }


  public getApplicationPerson(id:number){
    let temp = this.courseService.getApplicationPersonService(id).subscribe({
      next: data => this.fillApplicationPerson(data),
      error : err => console.log(err)
    });
    console.log("metodo-iscrizioni")
    console.log(temp)
  }

  public fillApplicationPerson(data:any){
    let tempData : ApplicationPerson[] = [];
    data.forEach((element: ApplicationPerson) => {
      tempData.push(element)
      });
    this.listaPersone = tempData;
    };
  

}



// ------------------ INTEFACCIA D'AIUTO ocio --------------------------------------------


export interface CourseEditionDialogData{
  courseEditionId:number;
}
