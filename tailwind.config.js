/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      fontSize: {
        sm: [
          "0.875rem",
          {
            lineHeight: "1.05875rem",
            fontWeight: "600",
          },
        ],
      },
      spacing: {
        card: "12.5rem",
      },
      aspectRatio: {
        poster: "100 / 133",
      },
    },
  },
  plugins: [],
};
