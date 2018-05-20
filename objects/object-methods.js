/**
 * method is an object property which has the value as a function
 * 'this' in a method refers to the object that the methods is created in
 */
let restaurant = {
    name: "Tai Hu",
    guestCapacity: 100,
    guestCount: 0,
    seatLeft: 100,
    checkAvailability: function (partySize) {
        this.seatLeft = this.guestCapacity - this.guestCount;
        return this.seatLeft >= partySize;
    },
    addGuestCount: function (partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount += partySize;
            this.seatLeft -= partySize;
            console.log(`${partySize} Guest(s) added successfully. Current number of seat left ${this.seatLeft}/${this.guestCapacity}`);
        }else {
            console.log(`Not enough seats for ${partySize} guest(s) because current number of seats left is ${this.seatLeft}/${this.guestCapacity}`);
        }
    },
    removeGuestCount: function (partySize) {
        this.guestCount -= partySize;
        this.seatLeft += partySize;
        console.log(`Removed ${partySize} guests from count. Current number of seats lelft ${this.seatLeft}/${this.guestCapacity}`);
    }
};

restaurant.addGuestCount(50);
restaurant.addGuestCount(30);
restaurant.addGuestCount(30);
restaurant.removeGuestCount(40);
restaurant.addGuestCount(30);

/**
 * JS native objects also provide useful methods to use
 */
let min = 10;
let max = 20;
let random = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(random(30, 50));

let firstEmployeeId = 11200000;
let lastestEmployeeId = 11799999;
let randomEmployee = function (first, lastest) {
    return `Our lucky employee is s${random(first, lastest)}`;
};
console.log(randomEmployee(firstEmployeeId, lastestEmployeeId));
