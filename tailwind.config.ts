import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        azure50: "#006DFF",
        grey95:"#F0F2F4",
        indigo500:"#6366F1",
        indigo01:"#5F34EA",
        magenta12: "#30003C",
      },
    },
  },
  plugins: [],
} satisfies Config;
