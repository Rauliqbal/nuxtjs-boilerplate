/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
   theme: {
      extend: {
         container: {
            center: true,
            padding: '1rem',
            screens: {
               '2xl' : "1280px",
            },
         },
         colors: {
            primary :  '#309399',
         },
         fontFamily: {
            'poppins' :['Poppins','sans-serif']
         }
      },
   },
   plugins: [],
};
