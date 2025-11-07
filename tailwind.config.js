/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#82aaff',
        secondary: '#c099ff',
        accent: '#7fdbca',
        dark: '#0f111a',
        'dark-light': '#1b1e2b',
        'dark-card': '#222436',
        'moonlight-blue': '#3e68d7',
        'moonlight-purple': '#c099ff',
        'moonlight-cyan': '#86e1fc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'moonlight-gradient': 'linear-gradient(135deg, #0f111a 0%, #1b1e2b 50%, #222436 100%)',
        'stars': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='150' cy='100' r='1' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='250' cy='150' r='1' fill='%23ffffff' opacity='0.4'/%3E%3Ccircle cx='350' cy='200' r='1' fill='%23ffffff' opacity='0.6'/%3E%3Ccircle cx='100' cy='250' r='1' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='200' cy='300' r='1' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='300' cy='350' r='1' fill='%23ffffff' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
