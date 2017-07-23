/**
 * Created by Akshar on 7/20/2017.
 */
class Plant
{
    private _species: string = "Defaut";
    get species() {
        return this._species;
    }
    set species(value: string) {
        if(value.length >= 3) {
            this._species = value;
        }
        else {
            this._species = "DEFUALT";
        }
    }

}

var plant = new Plant();
plant.species = "ab";
console.log(plant.species);
plant.species= "Pednas ";
console.log(plant.species);