/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#212121",
        "gray-6": "#f2f2f2",
        tan: "#c1aa7b",
        "gray-5": "#d4d8e4",
        darkslategray: {
          "100": "#444",
          "200": "#263049",
          "300": "rgba(73, 73, 73, 0.48)",
        },
        "gray-51": "#e0e0e0",
        silver: "#c0c4d2",
        burlywood: {
          "100": "#dbbb78",
          "200": "#b09357",
          "300": "rgba(176, 147, 87, 0.15)",
        },
        aliceblue: "#eef2f7",
        gainsboro: "#e0dde7",
        darkgray: "#a5a3ab",
        slategray: {
          "100": "#617683",
          "200": "#68607c",
        },
        oldlace: "#fff6e2",
      },
      spacing: {},
      fontFamily: {
        cairo: "Cairo",
      },
      borderRadius: {
        "8xs-1": "4.1px",
        "7xs": "6px",
        "4xs-8": "8.8px",
        "4xs-4": "8.4px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "12px",
      "2xs": "11px",
      "5xl": "24px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      lg: "18px",
      "sm-9": "13.9px",
      "13xl": "32px",
      smi: "13px",
      inherit: "inherit",
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  corePlugins: {
    preflight: false,
  },
};
