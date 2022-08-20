module.exports = {
  purge: {
    enabled: true,
    content: ["./frontend/src/**/*.js", "./frontend/src/**/*.jsx"],
    options: {
      whitelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backGround: "#140e27",
        text: "#b08696",
        lightGray: "#cbd5e1",
        darkText: "#0f172a",
        black: "#000000",
        darkGray: "#1a1a1a",
      },
      fontFamily: {
        body: ["Oswald"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
