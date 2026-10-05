// Centralised brand colours + fonts
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { orange: { DEFAULT: '#F56A00', dark: '#D45A00' }, cream: '#FFF7EA', paper: '#FCFAF6',
      ink: '#171310', brown: '#2B211B', green: '#1D5B3C', beige: '#EDE2D3', sun: '#F4C542' },
    fontFamily: { display: ['"Archivo Black"', 'Impact', 'sans-serif'], body: ['Manrope', 'Inter', 'system-ui', 'sans-serif'] },
    borderRadius: { card: '28px', soft: '18px' } } },
  plugins: [] }
