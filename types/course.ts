export type Level = "Beginner" | "Intermediate" | "Advanced";
export interface Lesson { title: string; duration: string; preview?: boolean }
export interface Module { title: string; lessons: Lesson[] }
export interface Course {
  id: number; title: string; description: string; category: string; instructor: string; instructorRole: string;
  thumbnail: string; rating: number; students: number; duration: string; level: Level; price: number;
  lessons: number; isPopular?: boolean; published: string; overview: string; learnings: string[]; requirements: string[]; curriculum: Module[];
}
