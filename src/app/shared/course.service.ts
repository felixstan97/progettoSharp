import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Corso } from '../Interfacce/Corso';
import { tap, catchError } from 'rxjs/operators'; 
import { Edizione } from '../Interfacce/edizione';
import { Modulo } from '../Interfacce/modulo';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl = 'http://localhost:8080/api/course/';

  constructor(private http : HttpClient) { }

  public getCourses(): Observable<Corso[]>{
    return this.http.get<Corso[]>(this.courseUrl)
                          .pipe(//tap(data => console.log(JSON.stringify(data))),
                          catchError(this.handleError)
                          );
  }

  public getCourseById(id:number): Observable<Corso>{
    return this.http.get<Corso>(`${this.courseUrl}/${id}`)
                          .pipe(//tap(data => console.log(JSON.stringify(data))),
                          catchError(this.handleError)
                          );
  }

  public getEditionsByCourseId(id:number): Observable<Edizione>{
    return this.http.get<Edizione>(`${this.courseUrl}editions/${id}`)
                          .pipe(//tap(data => console.log(JSON.stringify(data))),
                          catchError(this.handleError)
                          );
  }

  public getModuleByEditionId(id:number): Observable<Modulo>{
    let temp = this.http.get<Modulo>(`${this.courseUrl}modules/${id}`)
    .pipe(//tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError));
    return temp;   
  }

  handleError(err:any){
    let errorMessage : string;
    if(err.error instanceof ErrorEvent) {
      errorMessage = `Errore di rete ${err.error.message}`;
    } else {
      // unsuccesful response code
      errorMessage = `il backend ha ritornato il codice di errore ${err.status} : ${err.body.error}` 
    }
    return throwError(errorMessage);
  }
}
