"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Box, Typography } from "@mui/material";
import slideImage1 from "../../public/images/slide1.webp";
import slideImage2 from "../../public/images/slide2.webp";
import slideImage3 from "../../public/images/slide3.webp";
import slideImage4 from "../../public/images/slide4.webp";

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
            description: "Probably the most random thing you have ever seen!",
            left: "47vw",
            top: "2vw",
            content: function () {
                return (
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 50,
                            top: this.top,
                            left: this.left,
                        }}
                    >
                        <Typography
                            variant="sliderFont"
                            sx={{ fontSize: "2vw" }}
                        >
                            Расчёт стоимости
                        </Typography>
                        <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{ fontSize: "1.2vw" }}
                        >
                            Узнайте точную стоимость вашего окна
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                position: "absolute",
                                border: "2px solid",
                                width: "10vw",
                                fontSize: "1vw",
                                top: "120%",
                                left: "0%",
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
            description: "Hello World!",
            left: "47vw",
            top: "2vw",
            content: function () {
                return (
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 50,
                            top: this.top,
                            left: this.left,
                        }}
                    >
                        <Typography
                            variant="sliderFont"
                            style={{ fontStretch: "extra-condensed" }}
                            sx={{ fontSize: "2vw" }}
                        >
                            Окна ПВХ и АЛ от производителя
                        </Typography>
                        <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{ fontSize: "1.2vw" }}
                        >
                            Синергия собственного производства и поставок от
                            крупнейшего завода РФ
                        </Typography>
                        <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{ fontSize: "1.2vw" }}
                        >
                            Огромный ассортимент оконно-дверной продукции
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                position: "absolute",
                                border: "2px solid",
                                width: "10vw",
                                fontSize: "1vw",
                                top: "120%",
                                left: "0%",
                            }}
                        >
                            Рассчитать!
                        </Button>
                    </Box>
                );
            },
        },
        {
            name: slideImage3,
            description: "Probably the most random thing you have ever seen!",
            left: "48vw",
            top: "6vw",
            content: function () {
                return (
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 50,
                            top: this.top,
                            left: this.left,
                        }}
                    >
                        <Typography
                            variant="sliderFont"
                            sx={{ fontSize: "2vw" }}
                        >
                            Холодное остекление
                        </Typography>
                        <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{ fontSize: "1.2vw" }}
                        >
                            Для балконов, веранд, беседок
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                position: "absolute",
                                border: "2px solid",
                                width: "10vw",
                                fontSize: "1vw",
                                top: "120%",
                                left: "0%",
                            }}
                        >
                            Подробнее!
                        </Button>
                    </Box>
                );
            },
        },
        {
            name: slideImage4,
            description: "Probably the most random thing you have ever seen!",
            left: "48vw",
            top: "6vw",
            content: function () {
                return (
                    <Box
                        sx={{
                            position: "absolute",
                            zIndex: 50,
                            top: this.top,
                            left: this.left,
                        }}
                    >
                        <Typography
                            variant="sliderFont"
                            sx={{ fontSize: "2vw" }}
                        >
                            Стоечно-ригельное остекление
                        </Typography>
                        <Typography
                            variant="sliderFont"
                            fontWeight={"light"}
                            sx={{ fontSize: "1.2vw" }}
                        >
                            Входные двери, фасады, зимние сады
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                position: "absolute",
                                border: "2px solid",
                                width: "10vw",
                                fontSize: "1vw",
                                top: "120%",
                                left: "0%",
                            }}
                        >
                            Подробнее
                        </Button>
                    </Box>
                );
            },
        },
    ];

    console.log(items);

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

function Item({ item }) {
    return (
        <Box>
            <Box
                component="img"
                src={item.name.src}
                alt={item.description}
                width={"100%"}
                height={"auto"}
                sx={{ zIndex: 0, position: "relative" }}
            />
            {item.content()}
        </Box>
    );
}
export default HeroImageSlider;
