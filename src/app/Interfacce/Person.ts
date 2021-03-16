import { LocalDate } from "@js-joda/core";

export class Person {

 id:number = 0;
 firstName:string = "";
 lastName:string= "";
 gender:Gender= Gender.MALE;
 email:string= "";
 phone:string= "";
 birthDate:LocalDate = LocalDate.now();
 birthPlace:string= "";
 fiscalCode:string= "";
 streetAddress:string= "";
 city:string= "";
 province:string= "";
 region:string= "";
 salary:number= 0;
 role:string= "";
 hourlyWage:number= 0;

 public toString():string{
    return `${this.firstName} ${this.lastName} ${this.email}`;
 }

}

export enum Gender{
    MALE,FEMALE
}