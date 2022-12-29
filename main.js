class Worker{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}


const today = new Date();
today.setFullYear(today.getFullYear() * 4);

class Worker1 extends Worker{
    constructor(name, surname, rate, days, sum){
        super(name, surname)   
        this.rate = rate;
        this.days  = days;
        this.sum = sum;
    }

    getSalary(){
        return `рабочий1.рабочий2.: ${this.name + " " + this.surname}`;
    };

}




const worker = new Worker1("Роберт", "Абрус", 4, 10, 40)
console.log(worker.getSalary());
console.log(`Сколько они зарабатывает в день: ${worker.rate}`);
console.log(`количество отработанных дней: ${worker.days}`);
console.log(`Сумма общим: ${worker.sum}`);











