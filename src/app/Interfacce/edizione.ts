import { LocalDate } from "@js-joda/core";

export class Edizione{
    id : number = 0;
    startDate : LocalDate = LocalDate.now();
    classroomId : number = 0;
    description : string = '';
    tutorId : number = 0;
    courseId : number = 0;
}