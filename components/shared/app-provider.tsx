"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Course } from "@/types/course";

type AppState = { enrolledIds: number[]; enroll: (course: Course) => void; toast: (message: string) => void };
const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [enrolledIds, setEnrolledIds] = useState<number[]>([]);
  const [message, setMessage] = useState("");
  useEffect(() => { const saved = localStorage.getItem("learnhub-enrolled"); if (saved) setEnrolledIds(JSON.parse(saved) as number[]); }, []);
  const toast = (next: string) => { setMessage(next); window.setTimeout(() => setMessage(""), 3200); };
  const enroll = (course: Course) => {
    if (enrolledIds.includes(course.id)) return toast(`${course.title} is already in My Learning.`);
    const next = [...enrolledIds, course.id]; setEnrolledIds(next); localStorage.setItem("learnhub-enrolled", JSON.stringify(next)); toast(`You're enrolled in ${course.title}. Happy learning!`);
  };
  return <AppContext.Provider value={{ enrolledIds, enroll, toast }}>{children}{message && <div role="status" className="fixed bottom-5 right-5 z-50 flex max-w-sm items-start gap-3 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-2xl dark:bg-white dark:text-slate-900"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" /><span>{message}</span><button aria-label="Dismiss" onClick={() => setMessage("")}><X className="h-4 w-4" /></button></div>}</AppContext.Provider>;
}
export const useApp = () => { const context = useContext(AppContext); if (!context) throw new Error("useApp must be used inside AppProvider"); return context; };
