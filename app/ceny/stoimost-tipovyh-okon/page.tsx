import React from "react";
import { Container } from "@mui/material";
import Link from "next/link";
import HeaderSlider from "@/app/components/HeaderSlider";
import slide from "@/public/images/slides/HS_portal_1.jpg";
import InfoCard from "@/app/components/InfoCard";
import PriceCompareApartments from "@/app/components/PriceComponents/PriceCompareApartments";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Окна в Туле - цены от производителя",
    description:
        "Цены на окна в Туле без посреднических наценок прямо от производителя. От эконом до премиум класса.",
};

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
