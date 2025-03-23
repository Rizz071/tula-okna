import React from "react";
import {
    Box,
    Container,
    Grid2 as Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Link from "next/link";
import HeaderSlider from "@/app/components/HeaderSlider";
import slide from "@/public/images/slides/HS_portal_1.jpg";
import InfoCard from "@/app/components/InfoCard";
import PriceCompareApartments from "@/app/components/PriceComponents/PriceCompareApartments";

export default function Page() {
    return (
        <>
            <HeaderSlider sliderImage={slide} isCardVisible={true} />

            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    mt: { xs: -3, md: -12 },
                }}
            >
                <PriceCompareApartments />
            </Container>
        </>
    );
}
