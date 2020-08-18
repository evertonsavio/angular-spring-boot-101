class Customer {
  private _firstName: String;
  private _lastName: String;

  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

  public get firstName(): String {
    return this._firstName;
  }

  public set firstName(theFirst: String) {
    this._firstName = theFirst;
  }
  public get lastName(): String {
    return this._lastName;
  }
  public set lastName(value: String) {
    this._lastName = value;
  }
}

// Criar Instancia, necessario passar parametros pq tem construtor;
let myCustumer = new Customer('Everton', 'Savio');

/* myCustumer.firstName = 'Everton';
myCustumer.lastName = 'Savio'; */

console.log(myCustumer.firstName + ' ' + myCustumer.lastName);
