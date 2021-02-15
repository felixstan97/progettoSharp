import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  formContatti = this.formBuilder.group({
    nome : ['', Validators.required],
    cognome : [''],
    email : ['',  Validators.compose(
      [Validators.required, Validators.email])],
    message : ['', Validators.compose(
      [Validators.minLength(10), Validators.required])],
    terminiCondizioni : ['', Validators.required]
  });

  doThisOnSubmit() {
    let form = this.formContatti;
    console.log(form.value.terminiCondizioni);
    this.formContatti.reset();
  }


}
