class Taxi {
    constructor(name){
        this.name = name;
        this.totalDistance = 0;
        this.price = 1;
        this.profit = 0;
    }

    formatCurrency(number){
        return number.toFixed(2) + ' Eur';
    }
    intro(){
        console.log(`Sveiki, as ${this.name} ir kilometro kaina su manimi yra ${this.formatCurrency(this.price)}.`);
    }
    updatePrice(newPrice){
        this.price = newPrice;
        console.log(`${this.name} nustate nauja kaina ${this.formatCurrency(newPrice)}.`);
    }
    ride(distance){
        this.totalDistance += distance;
        this.profit += distance * this.price;
    }
    stats(){
        console.log(`${this.name} nuvaziavo ${this.totalDistance} km ir uzdirbo ${this.formatCurrency(this.profit)}.`);
    }

}

module.exports = Taxi;