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
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        mdl: '2.5rem',
        lg: '3rem',
        lgx: '3.5rem',
        xl: '4rem',
        xl2: '4.5rem',
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
