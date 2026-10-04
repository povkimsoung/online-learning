import { notFound } from "next/navigation";
import { ApiCourseDetail } from "@/components/courses/api-course-detail";
import { ApiLesson, getApiCourse, getApiLessons } from "@/lib/elearning-api";

export const dynamic = "force-dynamic";

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const [course, lessonResponse] = await Promise.all([getApiCourse(id), getApiLessons(id)]);
    const lessons = (lessonResponse.lessons ?? []).filter((lesson): lesson is ApiLesson => typeof lesson !== "string");
    return <ApiCourseDetail course={course} lessons={lessons} />;
  } catch { notFound(); }
}
