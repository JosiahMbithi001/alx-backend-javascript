interface Teacher {
    firstname: string;
    lastname: string,
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

function printTeacher (firstname: string, lastname: string):string {
    const firstInitial = firstname.charAt(0)
    return `${firstInitial}.${lastname}`
}

interface printTeacherFunction {
    (firstname: string, lastname: string) : string;
}

interface Student {
    firstName: string;
    lastname: string;
    new(firstName: string, lastName: string): StudetntClass;
}

class StudentClass implements Student{
    firstname = firstname;
    lastname = lastname ;
    
    constructor(firstName: string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return `${this.firtName}`
    }
}
