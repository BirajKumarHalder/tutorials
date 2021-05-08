import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private popupConfig = new Subject<any>();

  confirmThis(message: string, yesFn: () => void, noFn: () => void): any {
    this.setPopupConfig(message, yesFn, noFn);
  }

  setPopupConfig(message: string, yesFn: () => void, noFn: () => void): any {
    const that = this;
    this.popupConfig.next({
      type: 'confirm',
      text: message,
      accept(): any {
        yesFn();
        that.popupConfig.next();
      },
      cancel(): any {
        noFn();
        that.popupConfig.next();
      }
    });
  }

  getPopupConfig(): Observable<any> {
    return this.popupConfig.asObservable();
  }

}
