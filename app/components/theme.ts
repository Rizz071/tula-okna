'use client';
import { Roboto, Roboto_Condensed, Inter, Inter_Tight, Noto_Sans, Noto_Serif, Montserrat, Rubik } from 'next/font/google';

import { createTheme } from '@mui/material/styles';

const inter = Inter({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

const inter_tight = Inter_Tight({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

const noto_sans = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

const rubik = Rubik({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

const noto_serif = Noto_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

const roboto_condensed = Roboto_Condensed({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin", "cyrillic"],
    display: "swap",
});

declare module '@mui/material/styles' {
    interface TypographyVariants {
        sliderFont: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        sliderFont?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        sliderFont: true;
    }
}

const theme = createTheme({
    typography: {
        sliderFont: {
            fontFamily: roboto_condensed.style.fontFamily,
            fontWeight: 300,
            // fontFamily: roboto_condensed.style.fontFamily,
            //// fontFamily: noto_serif.style.fontFamily,
            display: "block",
            // lineHeight: "1.5rem"
        },
        body1: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "larger",
            fontWeight: 300,
            lineHeight: "30px",
            textAlign: "justify",
            marginTop: "1.5rem"
        },
        h1: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "3rem",
            fontWeight: 300,
            textAlign: "center",
        },
        h2: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "2rem",
            textAlign: "left",
            fontWeight: 300
        },
    },
    palette: {
        primary: {
            main: "#e74f21"
        }
    },

    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    // Map the new variant to render a <body1> by default
                    sliderFont: 'body1',
                },
            },
        },
    },

});

export default theme;