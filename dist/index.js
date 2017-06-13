"use strict";

var _addition = require("./addition");

var _subtraction = require("./subtraction");

var _multiplication = require("./multiplication");

var _division = require("./division");

var _modules = require("./modules");

var _factorial = require("./factorial");

function addfn(a, b) {
    return (0, _addition.addition)(a, b);
}
function subfn(a, b) {
    return (0, _subtraction.subtraction)(a, b);
}
function mulfn(a, b) {
    return (0, _multiplication.multiplication)(a, b);
}
function divfn(a, b) {
    return (0, _division.division)(a, b);
}
function modfn(a, b) {
    return (0, _modules.modules)(a, b);
}
function facfn(a) {
    return (0, _factorial.factorial)(a);
}
module.exports = {
    add: addfn,
    sub: subfn,
    multiply: mulfn,
    divide: divfn,
    mod: modfn,
    factorial: facfn
};