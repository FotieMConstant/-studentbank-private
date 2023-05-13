/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          accent: "#ED174C",
          strong: "#ED0F0F",
        },
        blue: {
          dark:"#0E176D"
        },
        orange: "#EE7C00",
        gray: {
          700: "#231F20",
          800: "#353535",
          900: "#1D1D1B",
        },
        grayLightMode: {
          100: "#F6F8FA",
          200: "#D0D7DE",
          300: "#8D959F",
          400: "#58606A",
          500: "#24292F",
        },
      },
      backgroundColor: {
        red: {
          accent: "#ED174C",
          strong: "#ED0F0F",
        },
        blue: {
          dark:"#0E176D"
        },
        orange: "#EE7C00",
        gray: {
          700: "#231F20",
          800: "#353535",
          900: "#1D1D1B",
        },
        grayLightMode: {
          100: "#F6F8FA",
          200: "#D0D7DE",
          300: "#8D959F",
          400: "#58606A",
          500: "#24292F",
        },
      },
      borderColor: {
        red: {
          accent: "#ED174C",
          strong: "#ED0F0F",
        },
        blue: {
          dark:"#0E176D"
        },
        orange: "#EE7C00",
        gray: {
          700: "#231F20",
          800: "#353535",
          900: "#1D1D1B",
        },
        grayLightMode: {
          100: "#F6F8FA",
          200: "#D0D7DE",
          300: "#8D959F",
          400: "#58606A",
          500: "#24292F",
        },
      }
    },
  },
  plugins: [],
}

