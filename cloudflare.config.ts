import { bindings, defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "adaga-site",
		compatibilityDate: "2026-10-19",
	},
});
