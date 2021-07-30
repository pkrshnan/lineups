const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
		    fontFamily: {
		        sans: ['IBM Plex Sans'], 
		    }
		},
	},
	plugins: [],
};

module.exports = config;
