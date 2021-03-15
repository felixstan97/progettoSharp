import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Edizione } from '../Interfacce/edizione';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-iscrizioni',
  templateUrl: './iscrizioni.component.html',
  styleUrls: ['./iscrizioni.component.scss']
})
export class IscrizioniComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  Edizioni:Edizione[] = [];
  
  ngOnInit(): void {
    let idEdizione = this.route.snapshot.queryParams.searchString;
    console.log(idEdizione);
  }



}
