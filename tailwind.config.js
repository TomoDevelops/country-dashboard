/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#1D1D1F",
                white: "#F5F5F7",
                darkest: "#03045E",
                dark: "#0077B6",
                mid: "#00B4D8",
                light: "#90E0EF",
                lightest: "#CAF0F8",
            },
        },
    },
    plugins: [],
};
