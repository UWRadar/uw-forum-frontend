import dns from "dns";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import eslint from "@rollup/plugin-eslint";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		postcss: {
			plugins: [autoprefixer]
		}
	},
	plugins: [
		react(),
		{
			...eslint({
				include: ["src/**/*.{ts,tsx}"]
			}),
			enforce: "pre"
		}
	],
	server: {
		port: 3000
	}
});
