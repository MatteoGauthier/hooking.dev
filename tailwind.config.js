module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      sans: [
        "'Rubik'",
        "Rubik",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
        "Cantarell",
        "Noto Sans",
        "sans-serif",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      display: [
        "'Inter'",
        "Inter",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
        "Cantarell",
        "Noto Sans",
        "sans-serif",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {},
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    // require("@tailwindcss/ui"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "800px",
          },
          "@screen xl": {
            maxWidth: "1600px",
          },
        },
      })
    },
  ],
}
