module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            600: '#2563eb',
            700: '#1d4ed8',
          },
          secondary: {
            500: '#64748b',
            600: '#475569',
          },
        },
        screens: {
          'xs': '480px',
          '3xl': '1792px',
        },
      },
    },
    plugins: [],
  }