/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E63946',
          light: '#FF7B7B',
          dark: '#C1121F'
        },
        secondary: {
          DEFAULT: '#457B9D',
          light: '#6D9DC5',
          dark: '#1D3557'
        },
        accent: '#FFD166',
        surface: {
          50: '#f8fafc',   // Lightest
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',  // Added
          500: '#64748b',  // Added
          600: '#475569',  // Added
          700: '#334155',  // Added
          800: '#1e293b',  // Added
          900: '#0f172a'   // Darkest
        },
        emergency: {
          dark: '#1a1a1a',    // Charcoal
          darker: '#2c1517',   // Dark maroon-charcoal
          red: '#3b1619',      // Deep red
          bright: '#c41c24'    // Alert red
        },
      },
      fontFamily: {
        sans: ['Rubik', 'ui-sans-serif', 'system-ui'],
        heading: ['Rubik', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'neu-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
        'neu-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.05)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      },
      backgroundImage: {
        'earthquake': "url('/images/earthquake-bg.jpg')",
        'fire': "url('/images/fire-bg.jpg')",
        'flood': "url('/images/flood-bg.jpg')",
        'zombie': "url('/images/zombie-bg.jpg')",
        'alien': "url('/images/alien-bg.jpg')",
        'emergency-gradient': 'linear-gradient(135deg, var(--tw-color-emergency-dark), var(--tw-color-emergency-darker), var(--tw-color-emergency-red))'
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' }
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        lurch: {
          '0%': { transform: 'rotate(0deg) translateX(0)' },
          '25%': { transform: 'rotate(2deg) translateX(5px)' },
          '50%': { transform: 'rotate(0deg) translateX(0)' },
          '75%': { transform: 'rotate(-2deg) translateX(-5px)' },
          '100%': { transform: 'rotate(0deg) translateX(0)' }
        },
        pulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' }
        },
        fall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'float-bounce': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.05)' }
        },
        drift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(15px, 10px) rotate(5deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' }
        },
        'pulse-ring': {
          '0%, 100%': { transform: 'scale(0.8)', opacity: 0 },
          '50%': { transform: 'scale(1.2)', opacity: 0.6 }
        },
        rise: {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 }
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        // Earthquake animations
        'shake': 'shake 0.5s ease-in-out infinite',
        'shake-slow': 'shake 3s ease-in-out infinite',
        'debris-fall': 'fall 3s linear forwards',
        
        // Fire animations
        'flicker': 'flicker 1.5s ease-in-out infinite',
        'flicker-fast': 'flicker 0.5s ease-in-out infinite',
        'ember-rise': 'rise 4s linear forwards',
        
        // Flood animations
        'float': 'float 3s ease-in-out infinite',
        'float-fast': 'float 1.5s ease-in-out infinite',
        'droplet-fall': 'fall 2s linear forwards',
        
        // Zombie animations
        'lurch': 'lurch 2s ease-in-out infinite',
        'hand-rise': 'rise 8s linear forwards',
        'sway': 'sway 2s ease-in-out infinite',
        
        // Alien animations
        'pulse': 'pulse 2s ease-in-out infinite',
        'pulse-fast': 'pulse 1s ease-in-out infinite',
        'orb-float': 'float 5s ease-in-out infinite',
        'spin': 'spin 8s linear infinite',
        'spin-reverse': 'spin 8s linear infinite reverse',
        
        // General animations
        'fade-in-out': 'fadeInOut 2s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-med': 'float 4s ease-in-out infinite',
        'sway-slow': 'sway 6s ease-in-out infinite',
        
        // Home page theme animations
        'float-bounce': 'float-bounce 6s ease-in-out infinite',
        'float-bounce-slow': 'float-bounce 8s ease-in-out infinite',
        'drift': 'drift 12s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 4s ease-out infinite',
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}