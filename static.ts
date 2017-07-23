/**
 * Created by Akshar on 7/20/2017.
 */
class Helpers {
    static  PI = 3.14;
    private diameter: number;
    static circumference(diameter: number) {
        return "the circumference is " + " " + this.PI * diameter;
    }

}


/* var helpers = new Helpers();
console.log(helpers.circumference(2)); */
 console.log(Helpers.PI);
console.log(Helpers.circumference(2));
