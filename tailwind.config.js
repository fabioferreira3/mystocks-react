module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: "#2B2E37",
      gray: "#32363F",
      lightGray: "#464951",
      blueGray: "#94A2C9",
      red: "#FC3E5E",
      green: "#39EF7F",
      blue: "#3B82F6",
      white: "#ffffff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
