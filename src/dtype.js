/**
 * 
 * Package: ndarrays
 * Author: Ganesh B
 * Description: 
 * Install: npm i ndarrays --save
 * Github: https://github.com/ganeshkbhat/numericalarrays
 * npmjs Link: https://www.npmjs.com/package/ndarrays
 * File: dtype.mjs
 * File Description: 
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



/** 
 * numerictypes: Define the numeric type objects
 * 

This module is designed so "from numerictypes import \\*" is safe.
Exported symbols include:
  Dictionary with all registered number types (including aliases):
    sctypeDict
  Type objects (not all will be available, depends on platform):
      see variable sctypes for which ones you have
    Bit-width names
    int8 int16 int32 int64 int128
    uint8 uint16 uint32 uint64 uint128
    float16 float32 float64 float96 float128 float256
    complex32 complex64 complex128 complex192 complex256 complex512
    datetime64 timedelta64
    c-based names
    bool_
    object_
    void, str_, unicode_
    byte, ubyte,
    short, ushort
    intc, uintc,
    intp, uintp,
    int_, uint,
    longlong, ulonglong,
    single, csingle,
    float_, complex_,
    longfloat, clongfloat,
   As part of the type-hierarchy:    xx -- is bit-width
   generic
     +-> bool_                                  (kind=b)
     +-> number
     |   +-> integer
     |   |   +-> signedinteger     (intxx)      (kind=i)
     |   |   |     byte
     |   |   |     short
     |   |   |     intc
     |   |   |     intp
     |   |   |     int_
     |   |   |     longlong
     |   |   \\-> unsignedinteger  (uintxx)     (kind=u)
     |   |         ubyte
     |   |         ushort
     |   |         uintc
     |   |         uintp
     |   |         uint_
     |   |         ulonglong
     |   +-> inexact
     |       +-> floating          (floatxx)    (kind=f)
     |       |     half
     |       |     single
     |       |     float_          (double)
     |       |     longfloat
     |       \\-> complexfloating  (complexxx)  (kind=c)
     |             csingle         (singlecomplex)
     |             complex_        (cfloat, cdouble)
     |             clongfloat      (longcomplex)
     +-> flexible
     |   +-> character
     |   |     str_     (string_, bytes_)       (kind=S)    [Python 2]
     |   |     unicode_                         (kind=U)    [Python 2]
     |   |
     |   |     bytes_   (string_)               (kind=S)    [Python 3]
     |   |     str_     (unicode_)              (kind=U)    [Python 3]
     |   |
     |   \\-> void                              (kind=V)
     \\-> object_ (not used much)               (kind=O)

 * 
 */
