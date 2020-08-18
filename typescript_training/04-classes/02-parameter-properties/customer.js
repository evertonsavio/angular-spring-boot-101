"use strict";
var Customer = /** @class */ (function () {
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
