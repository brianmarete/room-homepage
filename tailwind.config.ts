import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "aboutImage-dark": "url('/images/image-about-dark.jpg')",
        "aboutImage-light": "url('/images/image-about-light.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
