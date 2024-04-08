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
          "text-shadow": "url('/images/sponsors/shadow.svg')",
      },
    },
  },
  plugins: [],
};
