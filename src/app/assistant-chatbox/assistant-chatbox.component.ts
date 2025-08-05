import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assistant-chatbox',
  templateUrl: './assistant-chatbox.component.html',
  styleUrls: ['./assistant-chatbox.component.scss'],
  standalone: true,
  imports: [HttpClient]
})
export class AssistantChatboxComponent {
  isOpen = false;
  userInput = '';
  messages: { sender: 'user' | 'bot', text: string }[] = [];

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userText = this.userInput;
    this.messages.push({ sender: 'user', text: userText });
    this.userInput = '';

    // Send message to AI backend (Voiceflow, OpenAI, etc.)
    this.http.post<any>('http://localhost:3000/ai', { message: userText }).subscribe(
      res => {
        this.messages.push({ sender: 'bot', text: res.reply || 'No response' });
      },
      err => {
        this.messages.push({ sender: 'bot', text: 'Error connecting to assistant.' });
      }
    );
  }
}
