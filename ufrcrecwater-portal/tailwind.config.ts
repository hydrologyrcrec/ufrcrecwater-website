import type { Config } from "tailwindcss";

/**
 * Central Tailwind configuration.
 * Content paths must include all locations where class names appear.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",      // App Router pages & layouts
    "./src/components/**/*.{js,ts,jsx,tsx}",  // Shared UI components
    "./src/lib/**/*.{js,ts,jsx,tsx}",          // Utility components (rare but safe)
  ],
  theme: {
    extend: {
      // Extend here instead of overriding defaults
    },
  },
  plugins: [],
};

export default config;