/**
 * Created by Akshar on 7/22/2017.
 */
class Person {
    name : string;
   protected  age : number = 42;
    username: string;

    constructor(name: string, username: string) {
        this.name = name;
        this.username = username;
    }
    public agemethod() {
        console.log("old guy " + " " + "because you are " + " " + this.age+ "years old ");
    }
    printage () {
        console.log(this.age);
        console.log(this.agemethod());
    }
}
class sandeep extends Person {

    constructor() {
        super("Sandeep ghimire ", "sandy");
        this.age = 26;
    }
    public agemethod() {
        console.log("young guy " + " "+ "because he is " + " " + this.age +" "+ "years old ");
    }


}

var san = new sandeep();
console.log(san);
console.log(san.printage());
