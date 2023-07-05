/**
 * 
 * Package: ndarrays
 * Author: Ganesh B
 * Description: 
 * Install: npm i ndarrays --save
 * Github: https://github.com/ganeshkbhat/numericalarrays
 * npmjs Link: https://www.npmjs.com/package/ndarrays
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const ndarray = {
    rlib: require("lib-r-math.js"),
    // sigma: require(""),
    regression: require("d3-regression"),
    pickle: require("mod-pickle"),
    extenders: require("extenders"),
    stats: require("simple-statistics"),
    streamStats: require("stream-statistics"),
    pyc: require("pyodide")
}

module.exports = ndarray;
module.exports.default = ndarray;

