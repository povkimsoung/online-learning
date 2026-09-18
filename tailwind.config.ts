import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { brand: { 50: "#eef6ff", 100: "#d9ebff", 500: "#2874e6", 600: "#1b5fca", 700: "#164ba5", 950: "#0a2148" } }, boxShadow: { card: "0 10px 30px -15px rgba(15, 23, 42, .16)" } } },
  plugins: []
};
export default config;
