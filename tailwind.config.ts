import type { Config } from "tailwindcss";
import { shadcnPreset } from "./src/lib/shad-cn-preset";

const config = {
  presets: [shadcnPreset],
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
} satisfies Config;

export default config;
