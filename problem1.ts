/**
 * Created by Akshar on 7/17/2017.
 */

type  bankaccount = {money: number, deposit: (val: number) => void };
let bankAccount: bankaccount = {
    money: 2000,
    deposit(value: number):  void {
        this.money += value;
    }
};

let myself:  {name: string, bankAccount: bankaccount, hobbies: string[] }= {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);


