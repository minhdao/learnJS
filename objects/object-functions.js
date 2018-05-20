/**
 * Functions can return objects just like it can return variable
 */

/**
 * anonymous function - conver temperature from fahrenheit to celsius and kelvin
 *
 * @param  {number} fahrenheit fahrenheit value to convert
 * @return {object}            object with converted values in celsius and kelvis
 */
let tempConvert = function (fahrenheit) {
    let celsius = (fahrenheit - 31) * 5 / 9;
    let kelvin = (fahrenheit + 459.67) *5 / 9;
    return {
        celsius,
        kelvin
    };
};

let convertedTemp = tempConvert(79);
console.log(convertedTemp.celsius);
console.log(convertedTemp.kelvin);
