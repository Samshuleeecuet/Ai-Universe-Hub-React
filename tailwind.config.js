/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
      "primary": "#E0A82E",
              
      "secondary": "#F9D72F",
              
      "accent": "#181830",
              
      "neutral": "#181830",
              
      "base-100": "#FFFFFF",
              
      "info": "#3ABFF8",
              
      "success": "#36D399",
              
      "warning": "#FBBD23",
              
      "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

