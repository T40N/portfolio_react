/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateDownMenuButton: {
          "0%": {
            transform: "translateY(0rem) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(0.5rem) rotate(45deg)",
          },
        },

        rotateDownResetMenuButton: {
          "0%": {
            transform: "translateY(0.5rem) rotate(45deg)",
          },
          "100%": {
            transform: "translateY(0rem) rotate(0deg)",
          },
        },

        rotateUpMenuButton: {
          "0%": {
            transform: "translateY(0rem) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-0.5rem) rotate(-45deg)",
          },
        },

        rotateUpResetMenuButton: {
          "0%": {
            transform: "translateY(-0.5rem) rotate(-45deg)",
          },
          "100%": {
            transform: "translateY(0rem) rotate(0deg)",
          },
        },

        hideMiddleBarMenuButton: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },

        showMiddleBarMenuButton: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        rotateDownMenuButton: "rotateDownMenuButton 0.2s ease forwards",
        rotateUpMenuButton: "rotateUpMenuButton 0.2s ease forwards",
        hideMiddleBarMenuButton: "hideMiddleBarMenuButton 0.2s ease forwards",
        showMiddleBarMenuButton: "showMiddleBarMenuButton 0.2s ease forwards",
        rotateDownResetMenuButton:
          "rotateDownResetMenuButton 0.2s ease forwards",
        rotateUpResetMenuButton: "rotateUpResetMenuButton 0.2s ease forwards",
      },
    },
  },
  plugins: [],
};
