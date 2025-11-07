/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        mint: "#10B981",
        bg: "#F9FAFB",
        slate: "#1F2937",
        grayText: "#4B5563"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
}
