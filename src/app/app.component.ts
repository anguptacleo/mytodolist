import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssistantChatboxComponent } from './assistant-chatbox/assistant-chatbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,AssistantChatboxComponent],
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss']
    
})
export class AppComponent {
}
