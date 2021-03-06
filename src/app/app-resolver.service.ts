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
    //this api call will be done for user not for course
    return new Observable(subscriber => {
      this.appSvc.getCourseById(courseId).subscribe(res => {
        let selectedTopicId = -1;
        if (res.topics?.length > 0) {
          selectedTopicId = res.topics[0].topicId;
        }
        subscriber.next(selectedTopicId);
        subscriber.complete();
      })
    })
  }
}
