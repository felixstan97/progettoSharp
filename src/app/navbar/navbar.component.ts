import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private router : Router) { 
   
  }
  
  redirectToHome(){
    this.router.navigate(['home']);
  }
  redirectToLavoro(){
    this.router.navigate(['lavoro']);
  }
  redirectToCorsi(){
    this.router.navigate(['corso']);
  }
  redirectToContatti(){
    this.router.navigate(['contatti']);
  }


  ngOnInit(): void {
  }
 
  
}
