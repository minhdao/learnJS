/**
 * Babel is a tool that help to convert and make sure JS code you write will be
 * compatable with other browsers by changing development code into legacy old JS code
 * input.js -> babel -> output.js(compatable accross different browsers)
 */

/**
 * Webpack is a tool that provides the JS module system to your code
 * JS module system makes it easier to control dependencies by
 *    Narrow down the scope of variables (no more global scope)
 *    Introduce import and export statements
 * Webpack also build and bundle for code in away that is good for browser performance
 * input.js -> webpack -> output.js
 */

import { add } from './utilities.js';
import { scream } from './scream.js';
import name, { func1, func2 } from './export-styles.js';

console.log(add(10, 21));
console.log(scream('hello'));