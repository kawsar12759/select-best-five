/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            height: {
                'card': '400px',
                'player': '200px',
            },
        },
    },
    plugins: [],
}