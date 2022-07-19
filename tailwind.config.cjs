const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			gridTemplateRows: {
				// Simple 8 row grid
				12: 'repeat(12, minmax(0, 1fr))'
			}
		}
	},

	plugins: []
};

module.exports = config;
