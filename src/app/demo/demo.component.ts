import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  name;
  lastName;
  power = 10;
  items: string[] = ['nicolas', 'ana', 'santiago', 'juliana'];
  users = [
    { name: 'Santiago', lastName: 'Pulido', age: 22, id: 1 },
    { name: 'Ana', lastName: 'Camargo', age: 29, id: 2 },
    { name: 'Camila', lastName: 'Fuentes', age: 24, id: 3 },
  ];
  constructor() {}

  ngOnInit(): void {}

  addItem(): void {
    this.items.push('nuevo usuario');
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
