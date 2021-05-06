import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Message } from '../../models';
import { ToastedMessageService } from '../toasted-message.service';

@Component({
  selector: 'app-toasted-message',
  templateUrl: './toasted-message.component.html',
  styleUrls: ['./toasted-message.component.css']
})
export class ToastedMessageComponent {

  messages: Message[] = [];
  constructor(private toastedMsgSvc: ToastedMessageService) {
    this.toastedMsgSvc.currentMessage.subscribe(msg => {
      this.messages.push(msg);
    });
  }

}
