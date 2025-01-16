"use client";
import React from "react";
// import Carousel from "react-material-ui-carousel";
import {
    Button,
    Box,
    Typography,
    Card,
    CardActions,
    CardContent,
    List,
    ListItem,
    Divider,
    Stack,
} from "@mui/material";
// import slideImage1 from "../../public/images/slide1.webp";
// import slideImage2 from "../../public/images/slide2.webp";
// import slideImage3 from "../../public/images/slide3.webp";
// import slideImage4 from "../../public/images/slide4.webp";
import slideImage from "../../public/images/slides/slide_blue_man_1_6k.jpg";

import SecuritySharpIcon from "@mui/icons-material/SecuritySharp";

import Image, { StaticImageData } from "next/image";

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
    height: number;
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
    height: 410,
};

function HeroImageSlider() {
    return (
        <Box
            display={"flex"}
            width="100%"
            maxHeight="610px"
            minHeight={{ xs: "250px", sm: "410px", md: "610px" }}
            justifyContent={"center"}
            position={"relative"}
        >
            <Image
                src={slideImage}
                alt="Slider hero image"
                sizes={"100vw"}
                quality={100}
                fill
                style={{ objectFit: "cover" }}
                unoptimized={true}
                priority
            />

            <Box
                display={{ xs: "none", sm: "flex" }}
                position="relative"
                marginBottom={"auto"}
                left={{ sm: "1%", md: "-5%" }}
                top={{ sm: "-120px", md: "-40px" }}
                sx={{ transform: `translate(-50%, 50%)` }}
            >
                <Card sx={{ maxWidth: 280 }}>
                    <CardContent>
                        <Box
                            display={"flex"}
                            columnGap={1}
                            alignItems={"flex-start"}
                            paddingLeft={0}
                        >
                            <SecuritySharpIcon
                                fontSize="large"
                                sx={{ color: "secondary.main" }}
                            />
                            <Typography
                                alignSelf={"center"}
                                variant="h6"
                                fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
                                color={"secondary.main"}
                            >
                                Наша гарантия
                            </Typography>
                        </Box>
                        <Stack direction={"column"}>
                            <Typography
                                sx={{
                                    ml: 2,
                                    mr: 1,
                                    fontWeight: 500,
                                    fontSize: "medium",
                                }}
                            >
                                Непрерывно выполняем гарантийные обязательства
                                более {new Date().getFullYear() - 1998} лет
                            </Typography>
                            <Typography
                                sx={{
                                    ml: 2,
                                    mr: 1,
                                    fontWeight: 500,
                                    fontSize: "medium",
                                }}
                            >
                                70% клиентов обращаются к нам снова
                            </Typography>
                            <Typography
                                sx={{
                                    ml: 2,
                                    mr: 1,
                                    fontWeight: 500,
                                    fontSize: "medium",
                                }}
                            >
                                Решаем ваши задачи, а не продаём
                                &quot;дешёвые&quot; окна
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Box>
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
        <Box minHeight={"410px"}>
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
                        xs: item.name.width * 0.4,
                        sm: item.name.width * 0.5,
                        md: item.name.width * 0.6,
                        lg: item.name.width * 0.9,
                        xl: item.name.width * 1,
                    },
                }}
            />
            {item.content()}
        </Box>
    );
}
export default HeroImageSlider;
