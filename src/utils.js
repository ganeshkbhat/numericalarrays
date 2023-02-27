/**
 * 
 * Package: extenders
 * Author: Ganesh B
 * Description: Node module for Array, Object, String, Decorator extention Utils like for Python and more for Node.js
 * Install: npm i extenders --save
 * Github: https://github.com/ganeshkbhat/jsextenders
 * npmjs Link: https://www.npmjs.com/package/extenders
 * File: src/numpyjs.js
 * File Description: 
 * 
 * 
 * References:
 * 
 * Covers Numpy Modules and Files:
 * 
 * 
 * References:
 * https://numpy.org/doc/1.23/numpy-user.pdf
 * https://numpy.org/doc/1.23/numpy-ref.pdf
 * 
*/

/* eslint no-console: 0 */

'use strict';


// https://github.com/numpy/numpy/blob/main/numpy/compat/py3k.py
// def asunicode(s):
// def asbytes(s):
// def asstr(s):
// def isfileobj(f):
// def open_latin1(filename, mode='r'):
// def sixu(s):
// def getexception():
// def asbytes_nested(x):
// def asunicode_nested(x):
// def is_pathlib_path(obj):
// class contextlib_nullcontext:
// def npy_load_module(name, fn, info=None):

// Math functions Needs:
// https://github.com/numpy/numpy/blob/main/numpy/core/umath.py

// '_UFUNC_API', 'ERR_CALL', 'ERR_DEFAULT', 'ERR_IGNORE', 'ERR_LOG',
// 'ERR_PRINT', 'ERR_RAISE', 'ERR_WARN', 'FLOATING_POINT_SUPPORT',
// 'FPE_DIVIDEBYZERO', 'FPE_INVALID', 'FPE_OVERFLOW', 'FPE_UNDERFLOW', 'NAN',
// 'NINF', 'NZERO', 'PINF', 'PZERO', 'SHIFT_DIVIDEBYZERO', 'SHIFT_INVALID',
// 'SHIFT_OVERFLOW', 'SHIFT_UNDERFLOW', 'UFUNC_BUFSIZE_DEFAULT',
// 'UFUNC_PYVALS_NAME', '_add_newdoc_ufunc', 'absolute', 'add',
// 'arccos', 'arccosh', 'arcsin', 'arcsinh', 'arctan', 'arctan2', 'arctanh',
// 'bitwise_and', 'bitwise_or', 'bitwise_xor', 'cbrt', 'ceil', 'conj',
// 'conjugate', 'copysign', 'cos', 'cosh', 'deg2rad', 'degrees', 'divide',
// 'divmod', 'e', 'equal', 'euler_gamma', 'exp', 'exp2', 'expm1', 'fabs',
// 'floor', 'floor_divide', 'float_power', 'fmax', 'fmin', 'fmod', 'frexp',
// 'frompyfunc', 'gcd', 'geterrobj', 'greater', 'greater_equal', 'heaviside',
// 'hypot', 'invert', 'isfinite', 'isinf', 'isnan', 'isnat', 'lcm', 'ldexp',
// 'left_shift', 'less', 'less_equal', 'log', 'log10', 'log1p', 'log2',
// 'logaddexp', 'logaddexp2', 'logical_and', 'logical_not', 'logical_or',
// 'logical_xor', 'maximum', 'minimum', 'mod', 'modf', 'multiply', 'negative',
// 'nextafter', 'not_equal', 'pi', 'positive', 'power', 'rad2deg', 'radians',
// 'reciprocal', 'remainder', 'right_shift', 'rint', 'seterrobj', 'sign',
// 'signbit', 'sin', 'sinh', 'spacing', 'sqrt', 'square', 'subtract', 'tan',
// 'tanh', 'true_divide', 'trunc'

