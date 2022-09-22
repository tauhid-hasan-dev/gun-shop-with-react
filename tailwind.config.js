/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#a4d9e8",
                  
          "secondary": "#8f9612",
                  
          "accent": "#ea6738",
                  
          "neutral": "#201627",
                  
          "base-100": "#F5F0F5",
                  
          "info": "#66B0F4",
                  
          "success": "#2BD46F",
                  
          "warning": "#976D0C",
                  
          "error": "#EB193C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
