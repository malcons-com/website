/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'navy-blue': '#000069',
                'azure-blue': '#007FFF',
                'canary-yellow': '#FEEC02'
            }
        }
    },
    plugins: [],
}
