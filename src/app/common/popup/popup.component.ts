import { Component } from '@angular/core';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  popupConfig: any;

  constructor(private popupSvc: PopupService) {
    this.popupSvc.getPopupConfig().subscribe(popupConfig => {
      this.popupConfig = popupConfig;
    });
  }

}
