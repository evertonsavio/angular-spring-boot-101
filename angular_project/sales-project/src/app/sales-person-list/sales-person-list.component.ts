import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  //Criar um array de objetos

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Savio', 'Everton', 'evertonsavio@hotmail.com', 900),
    new SalesPerson('Lucas', 'Everton', 'everton@hotmail.com', 200),
    new SalesPerson('Santos', 'Everton', 'savio@hotmail.com', 940),
    new SalesPerson('Savio', 'Lucas', 'eversavio@hotmail.com', 300),
  ];

  constructor() {}

  ngOnInit(): void {}
}
