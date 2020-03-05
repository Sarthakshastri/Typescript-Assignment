interface Person {
    Name: String;
    age: number;
}

class Student implements Person {
    Class: String;
    favouriteSub: String; 
}

class School {
    SchoolName: String;
    Students: Array<string> = ['Muskan', 'Shreya', 'Pallavi', 'Shubhi'];
}
