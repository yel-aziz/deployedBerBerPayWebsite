/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				light: '#F06292',
  				dark: '#AD1457',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			primary: {
  				blue: '#1A5276',
  				terracotta: '#C35A38',
  				sand: '#E4CA9C',
  				mint: '#5B8C7D',
  				gold: '#D4AF37',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			banking: {
  				dark: '#1E293B',
  				light: '#F8FAFC',
  				accent: '#10B981'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			heading: [
  				'var(--font-playfair)',
  				'serif'
  			],
  			arabic: [
  				'var(--font-tajawal)',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'primary-pattern': 'url("/img/primary-pattern.svg")',
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'hero-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))'
  		},
  		boxShadow: {
  			primary: '0 4px 14px 0 rgba(0, 121, 107, 0.39)'
  		},
  		borderRadius: {
  			primary: '0.5rem 1.5rem 0.5rem 1.5rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}