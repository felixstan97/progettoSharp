import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Corso } from '../Interfacce/corso';
import { tap, catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CoreServiceService {

  courseUrl = 'http://localhost:8080/api/course/';

  constructor(private http : HttpClient) { }

  public getCourses(): Observable<Corso[]>{
    return this.http.get<Corso[]>(this.courseUrl)
                          .pipe(tap(data => console.log(JSON.stringify(data))),
                          catchError(this.handleError)
                          );
  }

  public getCourseById(id:number): Observable<Corso>{
    return this.http.get<Corso>(`${this.courseUrl}/${id}`)
                          .pipe(tap(data => console.log(JSON.stringify(data))),
                          catchError(this.handleError)
                          );
  }

  handleError(err:any){
    let errorMessage : string;
    if(err.error instanceof ErrorEvent) {
      errorMessage = `Errore di rete ${err.error.message}`;
    } else {
      // unsuccesful response code
      errorMessage = `il backend ha ritornato il codice di errore ${err.status} : ${err.body.error}` 
    }
    console.log(err);
    return throwError(errorMessage);
  }
}