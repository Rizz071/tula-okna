"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Box, Typography } from "@mui/material";
import slideImage1 from "../../public/images/slide1.webp";
import slideImage2 from "../../public/images/slide2.webp";
import slideImage3 from "../../public/images/slide3.webp";
import slideImage4 from "../../public/images/slide4.webp";
import { StaticImageData } from "next/image";

interface SettingsT {
    autoPlay: boolean;
    animation: "fade" | "slide";
    indicators: boolean;
    duration: number;
    navButtonsAlwaysVisible: boolean;
    navButtonsAlwaysInvisible: boolean;
    fullHeightHover: boolean;
    cycleNavigation: boolean;
    swipe: boolean;
    [key: string]: any;
}

const DefaultSettingsT: SettingsT = {
    autoPlay: false,
    animation: "fade",
    indicators: false,
    duration: 500,
    navButtonsAlwaysVisible: true,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
};

function HeroImageSlider() {
    var items = [
        {
            name: slideImage1,
            description: "Price evaluation slide",
            content: function () {
                return (
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 50,
                            left: {
                                md: "calc(100vw/2 - 40px)",
                                lg: "calc(100vw/2 - 60px)",
                            },
                            top: "35px",
                        }}
                    >
                        <Typography
                            variant="sliderFont"
                            sx={{ fontSize: { md: "2rem", lg: "2.5rem" } }}
                        >
                            Расчёт стоимости
                        </Typography>
                        <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{
                                fontSize: { md: "1.2rem", lg: "1.5rem" },
                            }}
                        >
                            Узнайте точную стоимость вашего окна!
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                mt: 2,
                                border: "2px solid",
                                fontSize: "1rem",
                            }}
                        >
                            Рассчитать!
                        </Button>
                    </Box>
                );
            },
        },
        {
            name: slideImage2,
            description: "Windows and Doors slide",
            content: function () {
                return (
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 50,
                            top: { md: "20px", lg: "35px" },
                            left: {
                                md: "calc(100vw/2 - 50px)",
                                lg: "calc(100vw/2 - 100px)",
                            },
                        }}
                    >
                        <Typography
                            variant="sliderFont"
                            sx={{
                                my: 1,
                                fontSize: { md: "1.5rem", lg: "2rem" },
                            }}
                        >
                            Окна ПВХ и АЛ от производителя
                        </Typography>
                        <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{
                                mt: 1,
                                fontSize: { md: "1.1rem", lg: "1.4rem" },
                            }}
                        >
                            Синергия собственного производства и поставок <br />
                            от двух крупнейших заводов Российской Федерации
                        </Typography>
                        {/* <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{ fontSize: { md: "1.2rem", lg: "1.5rem" } }}
                        >
                            Огромный ассортимент оконно-дверной продукции
                        </Typography> */}
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                mt: 2,
                                border: "2px solid",
                                fontSize: "1rem",
                            }}
                        >
                            Рассчитать
                        </Button>
                    </Box>
                );
            },
        },
        {
            name: slideImage3,
            description: "Cold windows Provedal slide",
            content: function () {
                return (
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 50,
                            top: { md: "65px", lg: "110px" },
                            left: {
                                md: "calc(100vw/2 - 25px)",
                                lg: "calc(100vw/2 - 35px)",
                            },
                        }}
                    >
                        <Typography
                            variant="sliderFont"
                            sx={{ fontSize: { md: "1.5rem", lg: "2rem" } }}
                        >
                            Холодное остекление
                        </Typography>
                        <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{ fontSize: { md: "1.1rem", lg: "1.4rem" } }}
                        >
                            Для балконов, веранд, беседок
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                mt: 2,
                                border: "2px solid",
                                fontSize: "1rem",
                            }}
                        >
                            Подробнее
                        </Button>
                    </Box>
                );
            },
        },
        {
            name: slideImage4,
            description: "Portals slide",
            content: function () {
                return (
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 50,
                            top: { md: "65px", lg: "110px" },
                            left: {
                                md: "calc(100vw/2 - 25px)",
                                lg: "calc(100vw/2 - 35px)",
                            },
                        }}
                    >
                        <Typography
                            variant="sliderFont"
                            sx={{ fontSize: { md: "1.5rem", lg: "2rem" } }}
                        >
                            Стоечно-ригельное остекление
                        </Typography>
                        <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{ fontSize: { md: "1.1rem", lg: "1.4rem" } }}
                        >
                            Входные двери, фасады, зимние сады
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                mt: 2,
                                border: "2px solid",
                                fontSize: "1rem",
                            }}
                        >
                            Подробнее
                        </Button>
                    </Box>
                );
            },
        },
    ];

    return (
        <Carousel
            {...DefaultSettingsT}
            sx={{ display: { xs: "none", md: "flex" } }}
        >
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

export interface ItemType {
    name: StaticImageData;
    description: string;
    content: () => React.JSX.Element;
}

interface Props {
    item: ItemType;
}

function Item({ item }: Props) {
    return (
        <Box>
            <Box
                component="img"
                src={item.name.src}
                alt={item.description}
                sx={{
                    zIndex: 0,
                    position: "relative",
                    transform: "translate(-50%, 0%)",
                    left: "50%",
                    width: {
                        md: item.name.width * 0.6,
                        lg: item.name.width * 0.9,
                    },
                }}
            />
            {item.content()}
        </Box>
    );
}
export default HeroImageSlider;
