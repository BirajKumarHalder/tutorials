import { Component, OnInit } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  message: any;
  constructor(private popupSvc: PopupService) { }

  ngOnInit() {
    this.popupSvc.getMessage().subscribe(message => {
      console.log(">>>>>> " + message);
      this.message = message;
    });
  }

}
