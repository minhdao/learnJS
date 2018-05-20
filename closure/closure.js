// A JS CLOSURE is created when a function is created within another function
// the inner function form a CLOSURE so
// the inner function has access to outter function's variables and also
// outter function's params and the global variables

// JS CLOSURE allows the inner function to be able to access the updated properties
// of the outter function even after the outter has returned/done executing

// due to closure methods still has access to variable 'count' after execution
// therefore, 'count' can continued to be used
// this only allows a set of predefined functions to modify the varibale count
let createCounter = () => {
    let count = 0;
    return {
        increase: () => {
            count++;
        },
        decrease: () => {
            count--;
        },
        getCount: () => {
            return count;
        }
    };
};

let counter = createCounter();
counter.increase();
console.log(counter.getCount());
counter.increase();
counter.increase();
console.log(counter.getCount());
counter.decrease();

// add with a base value
// also uses closure
let createAdder = (base) => {
    return {
        add: (number) => {
            return number + base;
        }
    };
};

let add100 = createAdder(100);
console.log(add100.add(10)); // 110
console.log(add100.add(40)); // 140

let add31 = createAdder(31);
console.log(add31.add(1)); // 32
console.log(add31.add(43)); // 74

// calculate tips based on the based percentage
let createTipCal = (basePercentage) => {
    let percentage = basePercentage/100;
    return {
        calculateTip: (billAmount) => {
            return `Bill is ${billAmount}. Tip should be ${percentage * billAmount}`;
        }
    };
};

let tip13 = createTipCal(13);
console.log(tip13.calculateTip(276));
