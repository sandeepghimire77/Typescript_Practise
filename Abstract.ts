
/* abstract classes may never be instantiated
* https://hackernoon.com/abstract-classes-in-typescript-text-video-cda9a4e6a56a */
abstract class Project {
    projectName: string = "default";
    budget: number;
    abstract changeName(name: string): void;

    calculatebudget() {
        return this.budget*2;
    }
}

class ITproject extends project {
    changeName(name: string): void {
        this.projectName= name;
    }

}
var project = new ITproject();
console.log(project);
