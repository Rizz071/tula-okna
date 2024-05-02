import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import HeroImageSlider from "./components/HeroImageSlider";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <HeroImageSlider />
            </main>
        </>
    );
}

