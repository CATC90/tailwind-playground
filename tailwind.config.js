module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      roboto: ['"Roboto"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      "min-width": {
        "table-min-width": "774px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
