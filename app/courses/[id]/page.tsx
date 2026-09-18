import { notFound } from "next/navigation";
import { getCourse, courses } from "@/data/courses";
import { CourseDetail } from "@/components/courses/course-detail";
export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const course = getCourse(Number(id)); if (!course) notFound(); return <CourseDetail course={course} related={courses.filter(c => c.category === course.category && c.id !== course.id).slice(0, 3)} />; }
