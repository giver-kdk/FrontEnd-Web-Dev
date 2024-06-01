/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
	  extend: {
		// Defining custom color theme 
		colors: {
			"my-primary-color" : "#6DC5D1"
		  },
	  },
	},
	plugins: [],
  }
