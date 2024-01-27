'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise(executor){
    if(typeof executor !== "function") throw TypeError("Executor must be a function")
    this._state = "pending"

    executor(this._internalResolve.bind(this), this._internalreject.bind(this))

}

$Promise.prototype._internalResolve = function() {
    if(this._state === "pending"){
        this._state = "fulfilled"
        this._value = value
        this._callHandlers()
    }
}

$Promise.prototype._internalreject = function() {
    if(this._state === "pending"){
        this._state = "reject"
        this._value = reason
        this._callHandlers()
    }
}

$Promise.prototype._callHandlers = function() {
    while (this._handlerGroups.length) {
        const hd = this._handlerGroups.shift()
        if(this._state === "fulfilled"){
            if(hd.successCb){
                hd.successCb(this._value)
            }
        }else if(this._state === "rejected"){
            if(hd.errorCb){
                hd.errorCb(this._value)
            }
        }
    }
}

$Promise.prototype.then = function(successCb, errorCb){
    if(typeof successCb !== "function") successCb = false
    if(typeof errorCb !== "function") errorCb = false
    this._handlerGroups.push({
        successCb,
        errorCb
    })
    if(this._state !== "pending") this._callHandlers()
}

$Promise.prototype.catch = function(errorCb){
    return this.then(null, errorCb)
}

const promise = new $Promise(resolve, reject => {
    resolve("value")
} )

const otherPromise = new $Promise("Hola")

promise
 .then(s1, e1)
 .then(s2, e2)
_handlerGroups = [
    { successCb: s1, errorCb: e1 },
    { successCb: s2, errorCb: e2 }
] 

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
