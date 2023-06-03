/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'md':{'min' : "0px", 'max' : "600px"},
    },
    extend:{
      fontFamily: {
        'info' : ['"Source Serif Pro"', ...defaultTheme.fontFamily.serif]
      },
      backgroundImage:{
        'bg-network': "url('../images/bg.png')",
        'bg-house': "url('../images/houses.png')",
      },
    },
    animation: {
      screen: 'screen 1s ease-in-out',
      title: 'title .5s',
      title1: 'title1 .5s',
      question : 'question 2s ease',
      intro : "intro 2s ease",
      blink:' 1s blink step-end infinite',
      up: '1s up ease infinite',
      up2: '1s up2 ease infinite',
      up3: '1s up3 ease infinite',
    },
    keyframes: {
      up: {
        '0%': {top: '62vh'},
        '50%' : {top: '60vh'},
        '100%' : {top: '62vh'},
      },
      up2: {
        '0%': {top: '82vh'},
        '50%' : {top: '80vh'},
        '100%' : {top: '82vh'},
      },
      up3: {
        '0%': {top: '87vh'},
        '50%' : {top: '85vh'},
        '100%' : {top: '87vh'},
      },
      question: {
        '0%': { transform : "translateY(2cm)", opacity:"0"},
      },
      screen: {
        '0%' : { height : '120vh'},
        '100%' : {height : '0'}
      },
      title: {
        '0%': {  top:"25vh" , opacity : '0'},
        '100%' : {top:"14vh" , opacity : '0.6'},
      },
      title1: {
        '0%': {  top:"25vh" , opacity : '0'},
        '100%' : {top:"14vh" , opacity : '0.6'},
      },
      blink : {
        "from,to" : {color: "transparent"},
        "50%" : {color:"white"}
      },
      intro : {
        '0%': { opacity : '0'},
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
  
}
