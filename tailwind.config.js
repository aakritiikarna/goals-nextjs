export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pitch: '#143D2B',
        turf: '#2F6B45',
        touchline: '#F6F4EE',
        ink: '#14171A',
        floodlight: '#E8A33D',
        whistle: '#C1452E',
      },
      fontFamily: {
        display: ['Anton', 'Archivo Black', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
