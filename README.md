# Angular_Spring_Boot

```
npm install -g @angular/cli
ng version
ng help
ng new angular-project
ng serve --open
```

- Gerar novo componente:

```
ng generate component sales-person-list
```

- No sales-person-list.component.ts copiar o selector app-sales-person-list e colar no app.component.html page. como:

```
<app-sales-person-list></app-sales-person-list>
```

- Gerar uma classe:

```
ng generate class sales-person-list/SalesPerson

export class SalesPerson {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public salesVolume: number
  ) {}
}
```
