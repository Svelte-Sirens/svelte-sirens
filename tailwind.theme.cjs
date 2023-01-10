module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translatey(20px)' },
          '50%': { transform: 'translatey(-20px)' },
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      borderWidth: {
        1: '1px'
      },
      fontFamily: {
        sans: ['Red Hat Text', 'sans-serif'],
        heading: ['Cinzel Decorative', 'sans-serif']
      },
    }
  }
}
