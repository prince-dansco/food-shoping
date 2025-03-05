import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
        playfair: ['Playfair', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
