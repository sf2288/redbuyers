/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: '#FFF',
            colors: {
                blue: '#0061DF',
                'sky-blue-700': '#6494E0',
                primary: '#13131A',
                secondary: '#999999',
            },
        },
    },
    plugins: [],
}
