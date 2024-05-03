import Navbar from "./components/Navbar";
import HeroImageSlider from "./components/HeroImageSlider";
import ProductionCards from "./components/ProductionCards";
import { Box } from "@mui/material";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <HeroImageSlider />
                <ProductionCards />
            </main>
        </>
    );
}

