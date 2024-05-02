import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

export default function Home() {
    return (
        <Container maxWidth="lg">
            <header>
                <Navbar />
            </header>
            <main></main>
        </Container>
    );
}

