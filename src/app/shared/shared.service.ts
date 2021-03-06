import { stringify } from '@angular/compiler/src/util';
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
    return this.subject.asObservable();
  }

  
}
