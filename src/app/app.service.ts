import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseDetails, TopicDetails } from './models';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private localApiUrl = environment.localApiUrl;
  private currentTopic = new BehaviorSubject<number>(2);

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  setCurrentTopic = (topicId: number) => this.currentTopic.next(topicId);
  getCurrentTopic = () => this.currentTopic.asObservable();

  getAllCourses(): Observable<CourseDetails[]> {
    return new Observable(subscriber => {
      let allCourses: CourseDetails[] = [];
      this.http.get(this.localApiUrl + "all-courses").subscribe((res: any[]) => {
        res.map(doc => {
          let course = new CourseDetails();
          course.courseId = doc.courseId;
          course.courseName = doc.courseName;
          course.topicCount = doc.topicCount;
          let objectURL = 'data:image/jpeg;base64,' + doc.courseLogo.data;
          course.courseLogo = this.sanitizer.bypassSecurityTrustUrl(objectURL)
          allCourses.push(course);
        });
        subscriber.next(allCourses);
      }, error => {
        subscriber.next(error);
      })
    })
  }

  addCourse(course: CourseDetails): Observable<CourseDetails> {
    return new Observable(subscriber => {
      subscriber.next(null);
    })
  }

  getCourseById(courseId: number): Observable<CourseDetails> {
    return new Observable(subscriber => {
      this.http.get(this.localApiUrl + "course/" + courseId).subscribe((res: any) => {
        let course = new CourseDetails();
        course.courseId = res.courseId;
        course.courseName = res.courseName;
        course.topicCount = res.topicCount;
        let objectURL = 'data:image/jpeg;base64,' + res.courseLogo.data;
        course.courseLogo = this.sanitizer.bypassSecurityTrustUrl(objectURL)
        res.topics.map(topic => {
          let topicEntity = new TopicDetails();
          topicEntity.topicId = topic.topicId;
          topicEntity.name = topic.topicName;
          topicEntity.order = topic.topicOrder;
          topicEntity.courseId = courseId;
          course.topics.push(topicEntity);
        });
        course.topics.sort((a, b) => a.order > b.order ? 1 : 0)
        subscriber.next(course);
      }, error => {
        subscriber.next(error);
      })
    })
  }

  getTopicById(topicid: number): Observable<TopicDetails> {
    return new Observable(subscriber => {
      this.http.get(this.localApiUrl + "topic/" + topicid).subscribe((res: any) => {
        let topic = new TopicDetails();
        topic.topicId = res.topicId;
        topic.courseId = res.courseId;
        topic.name = res.topicName;
        topic.content = res.topicContent;
        topic.order = res.topicOrder;
        subscriber.next(topic);
      }, error => {
        subscriber.next(error);
      })
    })
  }

  updateTopic(topic: TopicDetails): Observable<TopicDetails> {
    return new Observable(subscriber => {
      this.http.put(environment.localApiUrl + 'course/' + topic.courseId + '/topic/' + topic.topicId, topic).subscribe((res: any) => {
        let topic = new TopicDetails();
        topic.topicId = res.topicId;
        topic.courseId = res.courseId;
        topic.name = res.topicName;
        topic.content = res.topicContent;
        subscriber.next(topic);
      })
    });
  }

  addTopic(topic: TopicDetails): Observable<TopicDetails> {
    return new Observable(subscriber => {
      this.http.post(environment.localApiUrl + 'course/' + topic.courseId + '/topic', topic).subscribe((res: any) => {
        let topic = new TopicDetails();
        topic.topicId = res.topicId;
        topic.courseId = res.courseId;
        topic.name = res.topicName;
        topic.content = res.topicContent;
        subscriber.next(topic);
      })
    });
  }

  deleteTopic(topic: TopicDetails) {
    return new Observable(subscriber => {
      this.http.delete(environment.localApiUrl + 'course/' + topic.courseId + '/topic/' + topic.topicId).subscribe((res: any) => {
        subscriber.next(res);
      })
    });
  }

}
