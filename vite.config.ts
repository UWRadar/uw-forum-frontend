import dns from "dns";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import eslint from "@rollup/plugin-eslint";
import tailwindcss from "tailwindcss";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return "vendor";
					}
				}
			}
		}
	},
	css: {
		postcss: {
			plugins: [autoprefixer, tailwindcss]
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
