import Navbar from "./components/Navbar";
import HeroImageSlider from "./components/HeroImageSlider";
import ProductionCards from "./components/ProductionCards";
import { Box } from "@mui/material";
import Image from "next/image";
import slideImage1 from "../public/images/slide1.webp";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {/* <Box display={{ md: "none" }}>
                    <Image
                        src={slideImage1}
                        width={300}
                        height={150}
                        style={{
                            position: "relative",
                            transform: "translate(-50%, 0%)",
                            left: "calc(100vw/2)",
                        }}
                        alt="Windows price evaluation banner"
                    />
                </Box> */}
                <HeroImageSlider />
                <ProductionCards />
            </main>
        </>
    );
}
