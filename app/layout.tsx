import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AppProvider } from "@/components/shared/app-provider";
import { PlatformCta } from "@/components/shared/platform-cta";

export const metadata: Metadata = { title: "LearnHub | Learn without limits", description: "A modern online learning platform." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><AppProvider><Navbar /><main>{children}</main><PlatformCta /><Footer /></AppProvider></body></html>;
}
