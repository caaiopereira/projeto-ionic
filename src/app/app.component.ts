import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sobre', url: '/sobre', icon: 'reader' },
    { title: 'Produtos', url: '/produtos', icon: 'cart' },
    { title: 'Login', url: '/login', icon: 'person' }
  ];
  public labels = [];
  constructor() {}
}
