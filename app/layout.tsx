import type { Metadata } from "next";
import type { Viewport } from "next";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./lib/theme";
import Navbar from "./components/Navbar/Navbar";
import FooterContainer from "./components/Footer/FooterContainer";
import YandexMetrika from "@/app/components/YandexMetrika/YandexMetrika";
import { GoogleTagManager } from "@next/third-parties/google";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "Пластиковые окна в Туле от производителя!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <GoogleTagManager gtmId="GTM-NV692FRD" />
            <body>
                <YandexMetrika />
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <header>
                            <Navbar />
                        </header>
                        <main>{children}</main>
                        <footer>
                            <FooterContainer />
                        </footer>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
