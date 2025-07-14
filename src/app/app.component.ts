import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MytodolistComponent } from './mytodolist/mytodolist.component';  // ✅ Import your custom component

@Component({
  selector: 'app-root',
  standalone: true,                           // ✅ THIS LINE IS REQUIRED
  imports: [RouterOutlet, MytodolistComponent],  // ✅ Add custom component to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected title = 'mylist';
}
