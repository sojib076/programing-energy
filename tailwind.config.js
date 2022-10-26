/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#97f98e",
        
"secondary": "#ed5553",
        
"accent": "#ffbaff",
        
"neutral": "#2A2135",
        
"base-100": "#E9E7F4",
        
"info": "#4EB5D4",
        
"success": "#32CD7D",
        
"warning": "#F2A831",
        
"error": "#FB5141",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
