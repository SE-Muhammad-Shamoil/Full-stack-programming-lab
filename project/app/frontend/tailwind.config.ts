import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      "colors": {
          "surface-container-low": "#f2f4f6",
          "on-primary": "#ffffff",
          "outline": "#76777d",
          "surface-container": "#eceef0",
          "on-tertiary-fixed": "#00201c",
          "inverse-surface": "#2d3133",
          "primary-fixed": "#dae2fd",
          "on-secondary-container": "#fefcff",
          "surface": "#f7f9fb",
          "primary-fixed-dim": "#bec6e0",
          "surface-container-lowest": "#ffffff",
          "on-primary-fixed": "#131b2e",
          "on-tertiary-container": "#009485",
          "on-secondary": "#ffffff",
          "on-primary-fixed-variant": "#3f465c",
          "on-surface-variant": "#45464d",
          "secondary": "#0051d5",
          "surface-dim": "#d8dadc",
          "on-secondary-fixed-variant": "#003ea8",
          "error": "#ba1a1a",
          "tertiary-fixed": "#71f8e4",
          "surface-bright": "#f7f9fb",
          "surface-tint": "#565e74",
          "on-secondary-fixed": "#00174b",
          "on-error-container": "#93000a",
          "tertiary": "#000000",
          "on-error": "#ffffff",
          "error-container": "#ffdad6",
          "outline-variant": "#c6c6cd",
          "surface-container-highest": "#e0e3e5",
          "surface-variant": "#e0e3e5",
          "surface-container-high": "#e6e8ea",
          "on-primary-container": "#7c839b",
          "secondary-fixed": "#dbe1ff",
          "background": "#f7f9fb",
          "inverse-on-surface": "#eff1f3",
          "secondary-fixed-dim": "#b4c5ff",
          "on-background": "#191c1e",
          "tertiary-container": "#00201c",
          "on-tertiary-fixed-variant": "#005048",
          "primary-container": "#131b2e",
          "on-surface": "#191c1e",
          "tertiary-fixed-dim": "#4fdbc8",
          "inverse-primary": "#bec6e0",
          "primary": "#000000",
          "on-tertiary": "#ffffff",
          "secondary-container": "#316bf3"
      },
      "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
      },
      "spacing": {
          "margin-desktop": "64px",
          "container-max": "1280px",
          "gutter": "24px",
          "margin-mobile": "20px",
          "base": "8px"
      },
      "fontFamily": {
          "display": ["Inter"],
          "body-md": ["Inter"],
          "headline-lg-mobile": ["Inter"],
          "headline-lg": ["Inter"],
          "label-md": ["Inter"],
          "label-sm": ["Inter"],
          "body-lg": ["Inter"],
          "headline-md": ["Inter"]
      },
      "fontSize": {
          "display": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
          "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
          "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "600"}],
          "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
          "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
          "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "600"}],
          "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
          "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
      }
    },
  },
  plugins: [],
}
export default config
