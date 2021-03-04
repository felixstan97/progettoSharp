import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private subject = new Subject<any>();

  search(pacchetto:object){
    this.subject.next(pacchetto)
  }

  getSearch():Observable<any>{
    console.log("-- getSerch-- ")
    return this.subject.asObservable();
  }

  homeSearch(parolaChiave:string){
    console.log("-- homeSerch-- ")
    this.subject.next(parolaChiave);
  }

  getHomeSearch():Observable<string>{
    console.log("-- getHomeSerch-- ")
    return this.subject.asObservable();
  }
  
}
