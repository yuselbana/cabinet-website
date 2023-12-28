import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@rewind-ui/core/dist/theme/styles/Calendar.styles.js',
    './node_modules/@rewind-ui/core/dist/theme/styles/Accordion.styles.js',
    './node_modules/@rewind-ui/core/dist/theme/styles/FormControl.styles.js',
 
  ],
  theme: {
    extend: {
      colors: {
        mainblue:'#2170A9',
        dodgerblue:'#1E90FF',
        offwhite:'#F4F4F4'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    })
  ],
}
export default config
