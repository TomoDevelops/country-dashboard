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
                mid: "#05C3DE",
                light: "#90E0EF",
                lightest: "#CAF0F8",
            },
            keyframes: {
                bounce: {
                    "0%, 100%": {
                        transform: "translateY(-50%)",
                        "animation-timing-function":
                            "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        "animation-timing-function":
                            "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animation-delay")],
};
