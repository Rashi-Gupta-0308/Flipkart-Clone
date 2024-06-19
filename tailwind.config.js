/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "rgba(0, 0, 0, 0.56)",
          "200": "rgba(0, 0, 0, 0.73)",
          "300": "rgba(0, 0, 0, 0.57)",
          "400": "rgba(0, 0, 0, 0.7)",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        skyblue: "rgba(123, 180, 205, 0.17)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        smi: "13px",
        "2xs": "11px",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      xl: "20px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
