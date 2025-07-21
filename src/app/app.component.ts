import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: ` <h1>My To-Do Application</h1>
    <nav>
      <a routerLink="/">Tasks</a> |
      <a routerLink="/favourites">Favourites</a>
     
    </nav>
    <router-outlet></router-outlet>
  `
    
})
export class AppComponent {
}
