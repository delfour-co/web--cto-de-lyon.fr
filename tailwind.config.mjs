/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#8B5CF6',
					700: '#7c3aed',
					800: '#6b21a8',
					900: '#581c87',
				},
				secondary: {
					50: '#ecfeff',
					100: '#cffafe',
					200: '#a5f3fc',
					300: '#67e8f9',
					400: '#22d3ee',
					500: '#06b6d4',
					600: '#0891b2',
					700: '#0e7490',
					800: '#155e75',
					900: '#164e63',
				},
				accent: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#F59E0B',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
				'gradient-accent': 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)',
				'gradient-dark': 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.6s ease-out',
				'slide-down': 'slideDown 0.6s ease-out',
				'scale-in': 'scaleIn 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				scaleIn: {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
				},
			},
			backdropBlur: {
				xs: '2px',
			},
		},
	},
	plugins: [],
}
