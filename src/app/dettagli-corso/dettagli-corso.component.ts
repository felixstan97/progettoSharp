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
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Student } from '../Interfacce/Student';
import { StudentSearchInfo } from '../Interfacce/StudentSearchInfo';
import { EnrollmentInfo } from '../Interfacce/EnrollmentInfo';
import { threadId } from 'worker_threads';

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
  styleUrls: ['./dettagli-corso.component.scss']
})
export class Iscrizioni implements OnInit  {
  constructor(@Inject(MAT_DIALOG_DATA) 
              public data:CourseEditionDialogData, 
              private courseService:CourseService ){

  }


  myControl = new FormControl();
  // options: string[] = [];
  filteredOptions!: Observable<string[]>;


  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  // }


  listaPersone:ApplicationPerson[] = []
  listaStudenti:Student[] = [];
  inputLike:any = "";
  selectedStudent:Student | null = null;

  ngOnInit():void{
    this.getApplicationPerson(this.data.courseEditionId);
  }

  // ngOnChange(){
  //   console.log("funziona change normale ")
  //   this.changeAutoComplete();
  // }

  changeAutoComplete():void{
    console.log("change funziona")
    let objectLike:StudentSearchInfo = {}
    objectLike.emailLike = this.inputLike;
    objectLike.nameLike = this.inputLike;
    objectLike.surnameLike = this.inputLike;
    objectLike.limit = 5;

    this.courseService.searchStudent(objectLike).subscribe({
      next: data => {
        this.listaStudenti = data.map(obj => Student.fromObject(obj));
        for(let st of this.listaStudenti){
          console.log(st.constructor)
        }
      },
      error: err => console.log(err)
    })
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
    console.log("fill application person")
    console.log(tempData)
    }
  
    public toString(student:Student){
      return `${student.firstName} ${student.lastName} ${student.email}`;
    }

    public iscrivi(){
      let info:EnrollmentInfo = {idStudent:this.inputLike.id, idEdition:this.data.courseEditionId};

      this.courseService.enrollStudent(info).subscribe({
        next: data => {
          console.log("fatto subscribe"),
          console.log(data)
          this.getApplicationPerson(this.data.courseEditionId);
        },

        error: err => console.log(err)
      });
      console.log(this.inputLike.constructor);
    }

}



// ------------------ INTEFACCIA D'AIUTO ocio --------------------------------------------


export interface CourseEditionDialogData{
  courseEditionId:number;
}
