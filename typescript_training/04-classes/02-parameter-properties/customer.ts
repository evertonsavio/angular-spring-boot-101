class Customer {
  constructor(private _firstName: string, private _lastName: string) {}

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(theFirst: string) {
    this._firstName = theFirst;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}

// Criar Instancia, necessario passar parametros pq tem construtor;
let myCustumer = new Customer('Everton', 'Savio');

/* myCustumer.firstName = 'Everton';
myCustumer.lastName = 'Savio'; */

console.log(myCustumer.firstName + ' ' + myCustumer.lastName);
