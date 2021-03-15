import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { corsiProva } from '../Interfacce/corsiProva';
import { Corso } from '../Interfacce/Corso';
import { Edizione } from '../Interfacce/edizione';
import { Modulo } from '../Interfacce/modulo';
import { CourseService } from '../shared/course.service';
import { SharedService } from '../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { IscrizioniComponent } from '../iscrizioni/iscrizioni.component';

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

  openDialog() {
    const dialogRef = this.dialog.open(Iscrizioni);

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
    
    // console.log(this.corso);
    // console.log('---edizioni---');
    // console.log(this.edizioni);
    // console.log('---moduli---');
    // console.log(this.moduli);

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



@Component({
  selector: 'iscrizioni',
  templateUrl: './iscrizioni.html',
})
export class Iscrizioni {}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */