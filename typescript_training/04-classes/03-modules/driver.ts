import {Customer} from './customer';

// Criar Instancia, necessario passar parametros pq tem construtor;
let myCustumer = new Customer('Everton', 'Savio');

/* myCustumer.firstName = 'Everton';
myCustumer.lastName = 'Savio'; */

console.log(myCustumer.firstName + ' ' + myCustumer.lastName);
