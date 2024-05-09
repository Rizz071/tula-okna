'use client';
import { Roboto, Roboto_Condensed, Inter, Inter_Tight, Noto_Sans, Noto_Serif } from 'next/font/google';

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
            // fontFamily: noto_serif.style.fontFamily,
            display: "block",
            // lineHeight: "1.5rem"
        },
        fontFamily: inter.style.fontFamily,
        // fontFamily: roboto.style.fontFamily,

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