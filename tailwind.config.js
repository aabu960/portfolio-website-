/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "primary": "#ECEEFF", // Soft Cyan, used for main elements like buttons and primary sections.
        "coral-red": "#F9A825", //#1736a7 Vibrant Coral Red for call-to-actions and accents.
        "slate-gray": "#6d6d6d", // Neutral Slate Gray for text and subtle highlights.
        "pale-blue": "#e0f7f8", // Light Aqua as a complementary background for sections.
        "dark-teal": "#3b9295", // Darker Teal for contrasts and hover states.
        "highlight-yellow": "#ffd966", // Warm Yellow for highlights and attention-grabbing elements.
        "light-gray": "#f3f3f3", // Light Gray for secondary backgrounds and subtle dividers.
        "dark-gray": "#444444", // Darker Gray for bold text or contrasting elements.
        "white-400": "rgba(255, 255, 255, 0.80)", // Semi-transparent white for overlays or effects.
      }
      ,
      
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
