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
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
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
          600: "#2B2728",
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
      },
      backgroundImage: {
        "orange-light": "linear-gradient(90deg, rgba(251,203,194,1) 0%, rgba(252,217,188,1) 100%)",
        "brown-dark": "linear-gradient(90deg, rgba(35,31,32,1) 0%, rgba(35,31,32,1) 100%)",
        "orange-fade-hz": "linear-gradient(90deg, rgba(237,23,76,1) 0%, rgba(245,130,32,1) 100%)",
        "white-normal": "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
        "brown-orange-dark": "linear-gradient(100deg, rgba(237,23,76,1) 0%, rgba(245,130,32,1) 30%))",
        // 'leafs'
      }
    },
  },
  plugins: [],
}

