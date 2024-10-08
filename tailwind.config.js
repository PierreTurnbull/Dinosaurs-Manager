/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        },
        boxShadow: {
            DEFAULT: "8px 8px 0px 0 rgba(0, 0, 0, 0.1)",
        },
    },
    plugins: [],
}

