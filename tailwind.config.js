/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif', 'system-ui'],
        workSans: ['Work Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      screens: {
        fold: { min: '279px', max: '321px' },
        s8: { min: '359px', max: '388px' },
        pro: { min: '389px', max: '420px' },
        surface: { min: '530px', max: '559px' },
        surface7: { min: '900px', max: '1000px' },
        ipad: { min: '550px', max: '768px' },
        nest: { raw: '(height: 600px)' },
        800: { raw: '(min-height: 800px)' },
        900: { raw: '(height: 900px)' },
        1366: { raw: '(height: 1366px)' },
        ipadAir: { min: '810px', max: '830px' },
        nestMax: { min: '1200px', max: '1300px' },
        '2.5xl': { min: '1750px', max: '1800px' },
        '3xl': '1800px',
      },
      backgroundImage: {
        'home-hero-mobile': "url('/assets/home-hero-mobile.png')",
        'test-hero-mobile': "url('/assets/test-consulting-mobile-bg.png')",
        'test-hero': "url('/assets/test-consulting-bg-2.png')",
        'contact-mobile': "url('/assets/bg-contact-mobile.png')",
        'contact-ipad': "url('/assets/bg-contact-ipad.png')",
        'contact-desktop': "url('/assets/bg-contact-desktop.png')",
        '404-mobile': "url('/assets/404-bg-mobile.png')",
        '404-ipad': "url('/assets/404-bg-ipad.png')",
        '404-desktop': "url('/assets/404-bg-desktop.png')",
      },
    },
  },
  plugins: [],
}

