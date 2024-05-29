/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
   fontFamily: {
      'raleway': '"Raleway"'
    },
    extend: {},
  },
  plugins: [require("tw-elements/plugin.cjs")
  ],
}

