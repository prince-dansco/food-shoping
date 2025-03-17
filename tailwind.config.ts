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
      screens: {
        // sm: '250px',    // 250px to 499px
        // md1: '500px',   // 500px to 699px
        // md2: '700px',   // 700px to 899px
        // lg1: '900px',   // 900px to 1123px
        // xl: '1124px',   // 1124px and above (optional)
      },
    },
  },
  plugins: [],
} satisfies Config;
