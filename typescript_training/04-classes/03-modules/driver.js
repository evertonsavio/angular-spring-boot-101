"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
// Criar Instancia, necessario passar parametros pq tem construtor;
var myCustumer = new customer_1.Customer('Everton', 'Savio');
/* myCustumer.firstName = 'Everton';
myCustumer.lastName = 'Savio'; */
console.log(myCustumer.firstName + ' ' + myCustumer.lastName);
