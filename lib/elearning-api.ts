export const API_BASE_URL = process.env.NEXT_PUBLIC_ELEARNING_API_URL ?? "https://e-learning.cheat.casa";

export type ApiLesson = { _id: string; title: string; content: string; course?: string };
export type ApiCourse = {
  _id: string;
  title: string;
  description: string;
  thumbnail?: string;
  enrolledStudents?: string[];
  lessons?: string[] | ApiLesson[];
  quizzes?: unknown[];
  materials?: unknown[];
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, { ...init, headers: { "Content-Type": "application/json", ...init?.headers }, cache: "no-store" });
  if (!response.ok) throw new Error(`E-learning API request failed (${response.status})`);
  return response.json() as Promise<T>;
}

export const getApiCourses = () => request<ApiCourse[]>("/api/courses");
export const getApiCourse = (id: string) => request<ApiCourse>(`/api/courses/${encodeURIComponent(id)}`);
export const getApiLessons = (courseId: string) => request<ApiCourse>(`/api/courses/${encodeURIComponent(courseId)}/lessons`);
export const enrollInApiCourse = (courseId: string) => request<unknown>(`/api/courses/${encodeURIComponent(courseId)}/enroll`, { method: "POST" });

export const courseTopic = (title: string) => {
  const value = title.toLowerCase();
  if (/(react|next|vue|css|javascript|typescript|graphql)/.test(value)) return "Web Development";
  if (/(python|sql|machine learning|data)/.test(value)) return "Data & AI";
  if (/(ui|ux|design)/.test(value)) return "Design";
  if (/(aws|docker|devops|node|mongodb|rust|git|testing)/.test(value)) return "Engineering";
  return "Technology";
};
