'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { orange, purple, red } from '@mui/material/colors';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});



const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        primary: {
            main: "#e74f21"
        }
    }
});

export default theme;