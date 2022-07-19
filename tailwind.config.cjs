/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'navy-blue': '#000069',
                'azure-blue': '#007FFF',
                'canary-yellow': '#FEEC02'
            },
            backgroundImage: {
                'construction-1-img': 'url(\'/images/construction-1.jpg\')',
                'construction-2-img': 'url(\'/images/construction-2.jpg\')',
                'construction-3-img': 'url(\'/images/construction-3.jpg\')',
                'construction-4-img': 'url(\'/images/construction-4.jpg\')',
                'construction-5-img': 'url(\'/images/construction-5.jpg\')',
                'construction-6-img': 'url(\'/images/construction-6.jpg\')',
                'construction-7-img': 'url(\'/images/construction-7.jpg\')',
                'construction-8-img': 'url(\'/images/construction-8.jpg\')',
                'construction-9-img': 'url(\'/images/construction-9.jpg\')',
                'construction-10-img': 'url(\'/images/construction-10.jpg\')',
                'construction-11-img': 'url(\'/images/construction-11.jpg\')',
                'construction-12-img': 'url(\'/images/construction-12.jpg\')',
                'construction-13-img': 'url(\'/images/construction-13.jpg\')',
                'construction-14-img': 'url(\'/images/construction-14.jpg\')',
                'construction-15-img': 'url(\'/images/construction-15.jpg\')',
                'construction-16-img': 'url(\'/images/construction-16.jpg\')',
                'construction-17-img': 'url(\'/images/construction-17.jpg\')',
                'construction-18-img': 'url(\'/images/construction-18.jpg\')',
                'blueprint-1-img': 'url(\'/images/blueprint-1-25.png\')',
                'blueprint-2-img': 'url(\'/images/blueprint-2-25.png\')',
                'blueprint-3-img': 'url(\'/images/blueprint-3.png\')',
                'blueprint-4-img': 'url(\'/images/blueprint-4-40.png\')',
                'blueprint-5-img': 'url(\'/images/blueprint-5-25.png\')'
            }
        }
    },
    plugins: [],
}
