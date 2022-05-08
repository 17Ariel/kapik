module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"],
        segoe: ["Segoe Script"],
      },
      height: {
        90: ["90vh"],
      },
      width: {},
      backgroundImage: {
        coverimg: "url('/public/img/backgound.jpg')",
        bgimg: "url('/public/img/cover.png')",
        capuccino: "url('/public/img/capuccino.jpg')",
        espresso: "url('/public/img/espresso.jpeg')",
        mocha: "url('/public/img/mocha.jpg')",
        barako: "url('/public/img/barako.jpeg')",
      },
      colors: {
        primary: ["#97572A"],
        dark: ["#333"],
      },
    },
  },
  plugins: [],
};
