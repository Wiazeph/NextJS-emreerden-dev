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
        md: '2.25rem',
        mdl: '2.5rem',
        lg: '2.75rem',
        lgx: '3rem',
        xl: '3.25rem',
        xl2: '3.5rem',
        '2xl': '3.75rem',
      },

      screens: {
        sm: '640px',
        md: '768px',
        mdl: '896px',
      },
    },

    extend: {
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        66: '16.5rem',
        68: '17rem',
        70: '17.5rem',
        76: '19rem',
        88: '22rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
      },

      screens: {
        mdl: '896px',
        lgx: '1152px',
        xl2: '1408px',
      },

      fontFamily: {
        Caveat: ['var(--font-caveat)'],
      },
    },
    // Custom Values
  },
  plugins: [],
}
export default config
