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
        indigo02:"#EDF0FF",
        magenta12: "#30003C",
        mangenta1260: "rgb(48, 0, 60, 0.6)",
        grey27:"#444444",
        blue66:"#7859F6",
        warning500:"#F59E0B",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;
