/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // App.js or equivalent in the root directory
    "./src/**/*.{js,jsx,ts,tsx}", // All files in the `src` folder
    "./components/**/*.{js,jsx,ts,tsx}", // Include files in a new `components` folder
    "./screens/**/*.{js,jsx,ts,tsx}", // Include files in a `screens` folder
    "./utils/**/*.{js,jsx,ts,tsx}", // Include utility files (if any)
  ],

  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["Poppins_400Regular"],
        poppinsBold: ["Poppins_700Bold"],
      },
      colors: {
        gray_1: "#7B6F72",
        gray_2: "#ADA4A5",
        border_color: "#F7F8F8",
        input_bg: "#F7F8F8",
        backGround_color: "#FFF",
        black_variant: "#1D1617",
        gray_3: "#DDDADA",
      },
    },
  },
  plugins: [],
};
