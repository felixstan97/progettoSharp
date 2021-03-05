import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private subject = new Subject<any>();
  private subjectHome = new Subject<string>();


  search(pacchetto:object){
    this.subject.next(pacchetto)
  }

  getSearch():Observable<any>{
    console.log("-- getSerch-- ")
    console.log(this.subject);
    return this.subject.asObservable();
  }

  homeSearch(parolaChiave:string){
    console.log("-- homeSerch-- ")
    this.subjectHome.next(parolaChiave);
    console.log("-- homeSerch - DOPO -- ")
    console.log(this.subjectHome);
  }

  getHomeSearch():Observable<string>{
    console.log("-- getHomeSerch-- ")
    console.log(this.subjectHome);
    return this.subjectHome.asObservable();
  }
  
}
