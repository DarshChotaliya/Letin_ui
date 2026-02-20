/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0f172a',       // Deep navy (footer, hero bg)
                    light: '#f8f9fe',      // Soft violet-white (page bg)
                    surface: '#ffffff',    // Pure white (cards)
                    card: '#ffffff',
                    accent: '#6366f1',     // Indigo primary
                    glow: '#818cf8',       // Lighter indigo glow
                    secondary: '#8b5cf6', // Violet accent
                    muted: '#e0e7ff',     // Indigo 100 (subtle bg)
                }
            },
            fontFamily: {
                jakarta: '"Plus Jakarta Sans", sans-serif',
                instrument: '"Instrument Sans", sans-serif',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
                    '50%': { opacity: 0.7, filter: 'brightness(1.5)' },
                }
            }
        },
    },
    plugins: [],
}
