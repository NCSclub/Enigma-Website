/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['var(--font-outfit)'],
        title: ['var(--font-vcNudge)'],
        subtext: ['var(--font-inter)'],
        link: ['var(--font-poppins)']
      },
      backgroundImage: {
        "blueborder":"url('/images/hero/bgtext.png')",
        'title-shadow': "url('/images/Agenda/titleShadow.svg')",
        "header-shadow": "url('/images/vector21.svg')",
        "footer-shadow": "url('/images/vector2.svg')",
      },
    },
  },
  plugins: [],
};
