import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const body = {
      query: message
    };

    // Change this to your actual API endpoint
    return this.http.post<any>('', body, {
      headers: {
        Authorization: 'sk-17c1e8d047b28e228e7b9bd51482f26880bfd8c2718eefd57189fd934bdef658'
      }
    });
  }
}
