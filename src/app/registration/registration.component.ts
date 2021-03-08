import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { arrayAbilita } from '../Interfacce/arrayAbilita';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.printLocalDate();
  }

  formRegistration = this.formBuilder.group({
    nome : ['', Validators.required],
    cognome : ['', Validators.required],
    telefono : ['', Validators.required],
    email : ['',  Validators.compose(
      [Validators.required, Validators.email])],
    CF : ['', Validators.required],
    gender : ['', Validators.required],
    luogoNascita : ['', Validators.required],
    dataNascita : ['', Validators.required],
    
    indirizzo : ['', Validators.required],
    citta : ['', Validators.required],
    provincia : ['', Validators.required],
    regione : ['', Validators.required],
    stato : ['', Validators.required],
    competenze: this.formBuilder.array([
      this.formBuilder.group({
        abilita : [''],
        livello: ['']
      }),
    ])
    // terminiCondizioni : ['', Validators.required]
  });

  get comps() {
    return this.formRegistration.controls.competenze as FormArray;
  }

  addCompetence() {
    this.comps.push(this.formBuilder.group({
      abilita : [''],
      livello: ['']
    }));
  }

  abilities = arrayAbilita;

  divCompetenze = document.querySelectorAll(".competenza");

  doThisOnSubmit() {
    let form = this.formRegistration;
    // this.formRegistration.reset();
    console.log(form.value);
  }

  public deleteComp(i:number){
    // let resp = this.service.deletUser(id);
    // resp.subscribe((data)=>this.users = data);
   this.comps.removeAt(i);
   console.log(this.comps);
  }


  localDate = new Date();
  minDate = "1940-01-01";
  maxDate = "";
  
  printLocalDate(){
    let dd = String(this.localDate.getDate()).padStart(2, '0');
    let mm = String(this.localDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = this.localDate.getFullYear() - 16;

    let localDateAsString = yyyy + '-' + mm + '-' + dd;
    this.maxDate = localDateAsString;
  }

}
