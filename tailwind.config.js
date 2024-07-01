/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "950px",
      lg: "1500px",
    },
    extend: {
      colors: {
        // light primary color setup
        primary: "#130f40",
        text_primary: "#c7ecee",
        input_primary: "#bdc3c7",
        full_screen_shadow: "#130f4091",
        hover_primary: "",
        // light secondary color setup
        secondary: "#c7ecee",
        text_secondary: "#2c3e50",
        hover_secondary: "",

        // dark primary color setup
        dark_primary: "#130f40",
        dark_text_primary: "#bdc3c7",
        dark_input_primary: "",
        dark_full_screen_shadow: "",
        // dark secondary color setup
        dark_secondary: "#30336b",
        dark_text_secondary: "#bdc3c7",
        dark_hover_secondary: "",
      },
    },
  },
  plugins: [],
};
