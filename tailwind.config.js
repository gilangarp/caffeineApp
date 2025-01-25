export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      colors: {
        text: "#4F5665",
        primary: "#FF8906",
      },
      fontSize: {
        heading_mobile: ["32px", "28px"],
        heading_desktop: ["45px", "38px"],
      },
      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(168.18deg, #777C82 -114.74%, #0B0909 91.35%)",
      },
    },
  },
  plugins: [],
};
