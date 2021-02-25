import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contatti',
  templateUrl: './form-contatti.component.html',
  styleUrls: ['./form-contatti.component.scss']
})
export class FormContattiComponent implements OnInit {

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
