import { LocalDate } from "@js-joda/core";

export class ApplicationPerson{

    idPerson:number = 0;
    idAppliction:number = 0;
    firstName:string = "";
    lastName:string = "";
    email:string ="";
    status:string ="";
    applicationDate:LocalDate = LocalDate.now();
    comment:string = "";

}