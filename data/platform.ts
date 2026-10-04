import { Course } from "@/types/course";

export type LearningPath = {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  learners: string;
  color: string;
  courseIds: number[];
};

export const learningPaths: LearningPath[] = [
  { slug: "frontend-developer", title: "Frontend Developer", description: "Go from JavaScript foundations to polished, production-ready web interfaces.", level: "Beginner", duration: "32 hours", learners: "14,200 learners", color: "from-blue-600 to-cyan-500", courseIds: [1, 9, 11] },
  { slug: "data-analyst", title: "Data Analyst", description: "Learn to turn unstructured information into decisions people can act on.", level: "Beginner", duration: "30 hours", learners: "11,860 learners", color: "from-violet-600 to-fuchsia-500", courseIds: [2, 7, 10] },
  { slug: "product-designer", title: "Product Designer", description: "Build a practical research-to-interface workflow and a portfolio project.", level: "Beginner", duration: "26 hours", learners: "8,640 learners", color: "from-amber-500 to-rose-500", courseIds: [3, 8, 12] },
  { slug: "ai-practitioner", title: "AI Practitioner", description: "Develop sound machine-learning intuition and ship useful, responsible experiments.", level: "Intermediate", duration: "35 hours", learners: "9,120 learners", color: "from-emerald-600 to-teal-500", courseIds: [6, 2, 7] },
];

export const instructors = [
  { name: "Neom ThaNun", role: "Instructor", specialty: "LearnHub course instructor", learners: "—", courses: "—", image: "/instructors/neom-thanun.jpg" },
  { name: "Ah Thoeun", role: "Instructor", specialty: "LearnHub course instructor", learners: "—", courses: "—", image: "/instructors/ah-thoeun.jpg" },
  { name: "Chea BunYu", role: "Instructor", specialty: "LearnHub course instructor", learners: "—", courses: "—", image: "/instructors/chea-bunyu.jpg" },
  { name: "Kimleang VengHak", role: "Instructor", specialty: "LearnHub course instructor", learners: "—", courses: "—", image: "/instructors/kimleang-venghak.jpg" },
];

export const testimonials = [
  { quote: "The learning path gave me enough structure to stop jumping between tutorials. I shipped my portfolio in six weeks.", name: "Nadia R.", role: "Junior frontend developer", initials: "NR" },
  { quote: "Every lesson had a reason to exist. The projects helped me speak confidently about my work in interviews.", name: "Marcus T.", role: "Data analyst", initials: "MT" },
  { quote: "I loved that the platform feels calm. It made a big career shift feel manageable, one small win at a time.", name: "Elena P.", role: "Product designer", initials: "EP" },
];

export const getPathCourses = (path: LearningPath, courses: Course[]) => path.courseIds.map((id) => courses.find((course) => course.id === id)).filter((course): course is Course => Boolean(course));
