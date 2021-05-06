import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private subject = new Subject<any>();

  confirmThis(message: string, yesFn: () => void, noFn: () => void): any {
    console.log(message);
    this.setConfirmation(message, yesFn, noFn);
  }

  setConfirmation(message: string, yesFn: () => void, noFn: () => void): any {
    const that = this;
    this.subject.next({
      type: 'confirm',
      text: message,
      yesFn(): any {
        that.subject.next();
        yesFn();
      },
      noFn(): any {
        that.subject.next();
        noFn();
      }
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
