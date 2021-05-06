import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToastedMessageService {

  private messageSource = new BehaviorSubject<Message>(new Message());
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: Message) {
    this.messageSource.next(message)
  }

}
