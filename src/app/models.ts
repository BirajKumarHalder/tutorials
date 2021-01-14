export interface CourseDetails {
    courseId: string;
    courseName: string;
    courseTitle: string;
    courseLogo: string;
    topics?: (TopicsEntity)[] | null
}
export interface TopicsEntity {
    id: number;
    name: string;
    file: string;
}