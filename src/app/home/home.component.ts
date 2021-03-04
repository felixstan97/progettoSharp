import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, 
              private sharedService:SharedService) { }

  ngOnInit(): void {
  }

  formRicercaCorso = new FormControl('');

  onSubmit(){
    console.log(this.formRicercaCorso.value);
    this.sharedService.homeSearch(this.formRicercaCorso.value);
    this.formRicercaCorso.reset();
    this.router.navigate(['corso']);
    window.scroll(0,0);
  }

}
