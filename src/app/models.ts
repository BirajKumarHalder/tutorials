export class CourseDetails {
    courseId: number;
    courseName: string;
    courseLogo: any;
    topicCount: number;
    topics: TopicDetails[] = [];
}

export class TopicDetails {
    topicId: number;
    name: string;
    courseId: number;
    order: number;
    content: string;
}
export class Message {
    message: string;
    type: string;
}