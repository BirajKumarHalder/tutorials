import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppResolverService implements Resolve<any>{

  constructor(private appSvc: AppService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const courseId = route.params['courseId'];
    return new Observable(subscriber => {
      this.appSvc.getCourseById(courseId).subscribe(res => {
        const selectedTopicId = res.topics[0].topicId;
        subscriber.next(selectedTopicId);
        subscriber.complete();
      })
    })
  }
}
