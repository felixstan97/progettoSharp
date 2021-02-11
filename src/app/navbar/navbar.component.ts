import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

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
    window.scroll(0,0);
  }
  
  redirectToLavoro(){
    this.router.navigate(['lavoro']);
    window.scroll(0,0);
  }
  redirectToCorsi(){
    this.router.navigate(['corso']);
    window.scroll(0,0);
  }

  redirectToContatti(){
    this.router.navigate(['contatti']);
    window.scroll(0,0);
  }


  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])

  
  onWindowScroll() {
    let element = document.getElementsByClassName('navbarWrapper')[0];
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-change-color');
      } else {
        element.classList.remove('navbar-change-color');
      }
    }

 
  
}
