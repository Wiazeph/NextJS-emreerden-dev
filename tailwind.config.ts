import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Custom Values
    container: {
      center: true,

      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        md: '2.5rem',
        mdl: '3rem',
        lg: '3.5rem',
        lgx: '4rem',
        xl: '4.5rem',
        xl2: '5rem',
        '2xl': '5.5rem',
      },

      screens: {
        sm: '640px',
        md: '768px',
        mdl: '896px',
        lg: '1024px',
        lgx: '1152px',
        xl: '1280px',
        xl2: '1408px',
        '2xl': '1536px',
      },
    },

    extend: {
      spacing: {
        88: '22rem',
      },

      screens: {
        mdl: '896px',
        lgx: '1152px',
        xl2: '1408px',
      },
    },
    // Custom Values
  },
  plugins: [],
}
export default config
