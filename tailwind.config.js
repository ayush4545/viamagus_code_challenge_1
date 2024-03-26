/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero":"url(/src/assets/Rectangle 1@2x.png)",
        "heroSmall":"url(/src/assets/Rectangle 1.png)",
        "treeLarge":"url(/src/assets/Rectangle 4@2x.png)",
        "treeSmall":"url(/src/assets/Rectangle 4.png)",
      },
      boxShadow:{
        "myShadow":"0px 3px 7px #00000029"
      },
      fontFamily:{
        "josefin":"Josefin Sans",
        "myriad":"Maven Pro"
      }
    },
  },
  plugins: [],
}