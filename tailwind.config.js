/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'bb': '#0f172a',
            'bubble-gum': '#ff77e9',
            'bermuda': '#e879f9',
            'warmred': '#fef3c7'      
        },
        extend: {
            fontFamily: {
             gag: ["Gajraj One", "cursive"],
            },
          },
    },
    plugins: [],
}