/**
 * 
 * Package: ndarrays
 * Author: Ganesh B
 * Description: 
 * Install: npm i ndarrays --save
 * Github: https://github.com/ganeshkbhat/numericalarrays
 * npmjs Link: https://www.npmjs.com/package/ndarrays
 * File: index.mjs
 * File Description: 
 * 
 * 
 * 
 * References:
 * 
 * Covers Numpy Modules and Files:
 * 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { loadPyodide } = require("pyodide");


async function run() {
  let pyodide = await loadPyodide({
    indexURL: "",
  });
  return pyodide.runPythonAsync("1+1");
}
