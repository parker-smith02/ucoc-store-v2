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
    colors: {
      backGround: "#17102a",
      text: "#b08696",
    },
    fontFamily: {
      body: ["Oswald"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
