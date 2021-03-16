import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Corso } from '../Interfacce/Corso';
import { tap, catchError, ignoreElements } from 'rxjs/operators'; 
import { Edizione } from '../Interfacce/edizione';
import { Modulo } from '../Interfacce/modulo';
import { ApplicationPerson } from '../Interfacce/application-person';
import { Student } from '../Interfacce/Student';
import { StudentSearchInfo } from '../Interfacce/StudentSearchInfo';
import { EnrollmentInfo } from '../Interfacce/EnrollmentInfo';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl = 'http://localhost:8080/api/course/';
  editionUrl = 'http://localhost:8080/api/edition/';
  studentUrl = 'http://localhost:8080/api/student/';
  applicationUrl = 'http://localhost:8080/api/application/';

  constructor(private http : HttpClient) { }

  private courseSearch$ = new BehaviorSubject<Corso[]>([]);
  private searchStudent$ = new BehaviorSubject<ApplicationPerson[]>([]);

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


  public getElemetiFiltrati(pacchetto:any){
    let temp = this.http.get(`${this.courseUrl}get-by-filtri/${pacchetto}`)
                            .pipe(catchError(this.handleError));
    return temp;
  }

  public searchCourse(pacchetto:any){ 
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
    this.http.post<Corso[]>(`${this.courseUrl}`, pacchetto, { headers }).subscribe(
      {
        next: data => this.courseSearch$.next(data),
        error: err => console.log(err)
      }
    );
  }

  public getCourseSearch(){
    return this.courseSearch$.asObservable();
  }

    //--  APPLICATIONS ---
  public getApplicationPersonService(id:number): Observable<any>{
    let temp = this.http.get(`${this.editionUrl}${id}/applications`).pipe(catchError(this.handleError));
      console.log("service")
      console.log(temp);
    return temp;
  }


 //--------- SEARCH STUDENTS------
  public searchStudent(info:StudentSearchInfo):Observable<Student[]>{
    let params = new HttpParams();

    if(info.emailLike){
      params = params.set('emailLike', info.emailLike);
    }
    if(info.nameLike){
      params = params.set('nameLike', info.nameLike);
    }
    if(info.surnameLike){
      params = params.set('surnameLike', info.surnameLike);
    }
    if(info.limit){
      params = params.set('limit', info.limit.toString());
    }

    return this.http.get<Student[]>(this.studentUrl, { params })
          .pipe(catchError(this.handleError));
  }

  public enrollStudent(ids:EnrollmentInfo):Observable<ApplicationPerson>{
    const headers = new HttpHeaders({"Content-Type" : "application/json"});
    return this.http.post<ApplicationPerson>(this.applicationUrl, ids, { headers });

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
