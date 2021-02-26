import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  formRicercaCorso = new FormControl('');

  onSubmit(){
    console.log(this.formRicercaCorso.value);
    this.formRicercaCorso.reset();
    this.router.navigate(['corso']);
    window.scroll(0,0);
  }

}
