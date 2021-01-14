import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCourseDetails(courseName: string) {
    return this.http.get('./assets/docs/' + courseName + '/mappings.json');
  }

  getTopicDetails(courseName: string, selectedTopicFileName: string) {
    return this.http.get('./assets/docs/' + courseName + '/' + selectedTopicFileName, { responseType: 'text' });
  }

}
