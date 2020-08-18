"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirst) {
            this._firstName = theFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Criar Instancia, necessario passar parametros pq tem construtor;
var myCustumer = new Customer('Everton', 'Savio');
/* myCustumer.firstName = 'Everton';
myCustumer.lastName = 'Savio'; */
console.log(myCustumer.firstName + ' ' + myCustumer.lastName);
