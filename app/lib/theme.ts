'use client';
import { Roboto, Roboto_Condensed, Inter, Inter_Tight, Noto_Sans, Noto_Serif, Montserrat, Rubik } from 'next/font/google';
import { red, blue } from '@mui/material/colors';

import { createTheme, responsiveFontSizes, Breakpoints } from '@mui/material/styles';

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

let theme = createTheme({
    typography: {
        body1: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "larger",
            fontWeight: 300,
            textAlign: "justify",
            marginTop: "1.5rem",
        },
        h1: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "2.5rem",
            fontWeight: 400,
            textAlign: "center",
        },
        h2: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "2rem",
            textAlign: "left",
            fontWeight: 400
        },
        h3: {
            fontFamily: roboto.style.fontFamily,
            fontSize: "1.75rem",
            textAlign: "left",
            fontWeight: 400,

        },
    },
    palette: {
        primary: {
            // light: '#f6685e',
            main: red[500], //#f44336
            // dark: '#aa2e25',
        },
        secondary: {
            // light: '#5eebf6',
            // not bad            main: "#1F939C",

            main: blue[700],
            // dark: '#25a1aa',
            contrastText: '#fff',
        }

    },


    // components: {
    //     MuiTypography: {
    //         defaultProps: {
    //             variantMapping: {
    //                 // Map the new variant to render a <body1> by default
    //                 sliderFont: 'body1',
    //             },
    //         },
    //     },
    // },

});

// theme = responsiveFontSizes(theme);


export default theme;