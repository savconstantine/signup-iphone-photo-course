const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ips-white": "#EEECEC",
        "ips-black": "#0F0F0F",
        "ips-dark-gray": "#171715",
        "ips-light-gray": "#3A3A3A",
        // "ips-gradient": "linear-gradient(135deg, #D41C3D 0%, #861B83 100%)",
        // "ips-gradient-20": "linear-gradient(135deg, #370C14 0%, #280C23 100%)",
        // "ips-gradient-40": "linear-gradient(135deg, #62051C 0%, #440C3A 100%)",
        "ips-green": "#2B5341",
        "ips-red": "#D41C3D",
        "ips-yellow": "#FFD50B",
      },
      backgroundImage: {
        "ips-gradient": "linear-gradient(135deg, #D41C3D 0%, #861B83 100%)",
        "ips-gradient-20": "linear-gradient(135deg, #370C14 0%, #280C23 100%)",
        "ips-gradient-40": "linear-gradient(135deg, #62051C 0%, #440C3A 100%)",
        "ips-btn":
          "linear-gradient(135deg, #370c14 0%, #280c23 100%) padding-box, linear-gradient(135deg, #d41c3d 0%, #861b83 100%) border-box",
        "ips-btn-hover":
          "linear-gradient(135deg, #62051c 0%, #440c3a 100%) padding-box,linear-gradient(135deg, #d41c3d 0%, #861b83 100%) border-box",
      },
    },
    fontFamily: {
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      serif: ["Montserrat", ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};
