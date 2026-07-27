/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-fixed-variant": "#63356a",
                        "primary-container": "#5c2e63",
                        "inverse-on-surface": "#fbedf8",
                        "surface-bright": "#fff7fb",
                        "on-secondary-container": "#632f00",
                        "on-primary-fixed": "#32063b",
                        "secondary": "#944a00",
                        "primary-fixed-dim": "#edb3f1",
                        "on-tertiary-container": "#d199d6",
                        "on-secondary-fixed-variant": "#713700",
                        "tertiary-fixed-dim": "#eeb3f1",
                        "tertiary-fixed": "#ffd5ff",
                        "on-tertiary": "#ffffff",
                        "on-surface-variant": "#4d444d",
                        "on-secondary": "#ffffff",
                        "error-container": "#ffdad6",
                        "plum-deep": "#2e1832",
                        "outline": "#7f747d",
                        "surface-mist": "#fbf3f8",
                        "secondary-fixed": "#ffdcc6",
                        "earth-orange-dark": "#b95a0a",
                        "on-secondary-fixed": "#301400",
                        "outline-variant": "#d0c2cd",
                        "border-muted": "#e4d5de",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "background": "#fff7fb",
                        "primary": "#43174b",
                        "surface-dim": "#e4d6e1",
                        "on-surface": "#201921",
                        "secondary-container": "#fd8a26",
                        "surface-container": "#f8eaf5",
                        "on-tertiary-fixed": "#32053b",
                        "on-error-container": "#93000a",
                        "on-background": "#201921",
                        "surface-container-low": "#feeffb",
                        "surface": "#fff7fb",
                        "tertiary-container": "#5c2e63",
                        "on-primary-container": "#d199d6",
                        "on-tertiary-fixed-variant": "#63356a",
                        "tertiary": "#43174b",
                        "surface-tint": "#7d4c83",
                        "on-error": "#ffffff",
                        "surface-variant": "#ecdeea",
                        "surface-container-highest": "#ecdeea",
                        "inverse-primary": "#edb3f1",
                        "earth-orange-bright": "#f0801a",
                        "secondary-fixed-dim": "#ffb784",
                        "error": "#ba1a1a",
                        "plum-light": "#7a2e82",
                        "inverse-surface": "#362e36",
                        "surface-container-high": "#f2e4ef",
                        "primary-fixed": "#ffd5ff",
                        "surface-lavender": "#eedce9"
                    },
                    "borderRadius": {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-mobile": "20px",
                        "container-max": "1280px",
                        "base": "8px",
                        "margin-desktop": "40px",
                        "gutter-desktop": "24px",
                        "section-padding": "96px",
                        "gutter-mobile": "16px"
                    },
                    "fontFamily": {
                        "label-md": ["Be Vietnam Pro"],
                        "headline-lg": ["Be Vietnam Pro"],
                        "body-md": ["Be Vietnam Pro"],
                        "label-lg": ["Be Vietnam Pro"],
                        "headline-lg-mobile": ["Be Vietnam Pro"],
                        "body-sm": ["Be Vietnam Pro"],
                        "body-lg": ["Be Vietnam Pro"],
                        "headline-md": ["Be Vietnam Pro"],
                        "display-lg": ["Be Vietnam Pro"]
                    },
                    "fontSize": {
                        "label-md": ["14px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "headline-lg": ["clamp(24px, 4vw, 32px)", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "body-md": ["clamp(16px, 2vw, 18px)", {"lineHeight": "1.6", "fontWeight": "500"}],
                        "label-lg": ["16px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "headline-lg-mobile": ["clamp(22px, 4vw, 28px)", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "body-sm": ["15px", {"lineHeight": "1.5", "fontWeight": "500"}],
                        "body-lg": ["clamp(16px, 2.5vw, 20px)", {"lineHeight": "1.6", "fontWeight": "500"}],
                        "headline-md": ["clamp(20px, 3vw, 24px)", {"lineHeight": "1.4", "fontWeight": "600"}],
                        "display-lg": ["clamp(28px, 4vw, 40px)", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    },
                    "animation": {
                        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                    },
                    "keyframes": {
                        "fadeInUp": {
                            "0%": { opacity: 0, transform: "translateY(30px)" },
                            "100%": { opacity: 1, transform: "translateY(0)" }
                        },
                        "fadeIn": {
                            "0%": { opacity: 0 },
                            "100%": { opacity: 1 }
                        }
                    }
                },
            },
        }