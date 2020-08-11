module.exports = {
  purge: {
    enabled: false,
    // rejected: false,
    // content: [
    //   "./src/**/*.html",
    //   "./src/**/*.vue",
    //   "./src/**/*.jsx",
    //   "./src/**/*.js",
    // ],
  },
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
      mono: [
        "'Source Code Pro'",
        "Source Code Pro",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    linearBorderGradients: {
      directions: {
        // defaults to these values
        t: "to top",
        tr: "to top right",
        r: "to right",
        br: "to bottom right",
        b: "to bottom",
        bl: "to bottom left",
        l: "to left",
        tl: "to top left",
      },

      colors: {
        // defaults to {}
        cool: ["#4158D0", "#C850C0", "#FFCC70"],
      },
    },
    extend: {
      colors: {
        "bright-white": "#F8F8F2",
        "bright-cyan": "#5ccfe6",
        "dark-violet": "#22212C",
        "soft-violet": "#B0A2FF",
        "bright-green": "#8AFF80",
        "bright-red": "#E95353",
        "bright-yellow": "#F6DF0B",
      },
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/ui"),
    require("tailwindcss-border-gradients")(),
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
