import { LocalDate } from "@js-joda/core";
import { Gender, Person } from "./Person";
import { ApplicationPerson } from "./application-person";

export class Student extends Person{
    
    applications:ApplicationPerson[] = [];

    //metodo della moltiplicazione del corpo
    public static fromObject(obj:any):Student{
        let student = new Student();
        Object.assign(student,obj);

        return student;
    }

}