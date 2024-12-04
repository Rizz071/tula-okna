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
    // var items = [
    //     {
    //         name: slideImage,
    //         description: "Price evaluation slide",
    //         content: function () {
    //             return (
    //                 <Box
    //                     sx={{
    //                         position: "absolute",
    //                         zIndex: 50,
    //                         left: {
    //                             xs: "calc(100vw/2 - 20px)",
    //                             sm: "calc(100vw/2 - 30px)",
    //                             lg: "calc(100vw/2 - 60px)",
    //                             xl: "calc(100vw/2 - 60px)",
    //                         },
    //                         top: {
    //                             xs: "15px",
    //                             sm: "22px",
    //                             md: "30px",
    //                             lg: "35px",
    //                         },
    //                     }}
    //                 >
    //                     <Typography
    //                         variant="sliderFont"
    //                         sx={{
    //                             fontSize: {
    //                                 xs: "1.2rem",
    //                                 sm: "1.5rem",
    //                                 md: "2rem",
    //                                 lg: "2.5rem",
    //                             },
    //                         }}
    //                     >
    //                         Расчёт стоимости
    //                     </Typography>
    //                     <Typography
    //                         variant="sliderFont"
    //                         fontWeight={"light"}
    //                         sx={{
    //                             fontSize: {
    //                                 xs: "0.8rem",
    //                                 sm: "1.1rem",
    //                                 md: "1.2rem",
    //                                 lg: "1.5rem",
    //                             },
    //                         }}
    //                     >
    //                         Узнайте точную стоимость вашего окна!
    //                     </Typography>
    //                     <Button
    //                         variant="outlined"
    //                         color="primary"
    //                         sx={{
    //                             mt: { xs: 1, md: 2 },
    //                             border: "2px solid",
    //                             fontSize: {
    //                                 xs: "0.6rem",
    //                                 sm: "0.8rem",
    //                                 lg: "1rem",
    //                             },
    //                         }}
    //                     >
    //                         Рассчитать!
    //                     </Button>
    //                 </Box>
    //             );
    //         },
    //     },
    //     {
    //         name: slideImage2,
    //         description: "Windows and Doors slide",
    //         content: function () {
    //             return (
    //                 <Box
    //                     sx={{
    //                         position: "absolute",
    //                         zIndex: 50,
    //                         left: {
    //                             xs: "calc(100vw/2 - 50px)",
    //                             sm: "calc(100vw/2 - 50px)",
    //                             md: "calc(100vw/2 - 50px)",
    //                             lg: "calc(100vw/2 - 100px)",
    //                         },
    //                         top: { xs: "5px", md: "20px", lg: "15px" },
    //                     }}
    //                 >
    //                     <Typography
    //                         variant="sliderFont"
    //                         sx={{
    //                             my: 1,
    //                             fontSize: {
    //                                 xs: "1.2rem",
    //                                 sm: "1.4rem",
    //                                 md: "1.5rem",
    //                                 lg: "2.5rem",
    //                             },
    //                         }}
    //                     >
    //                         Окна ПВХ и АЛ от производителя
    //                     </Typography>
    //                     <Typography
    //                         variant="sliderFont"
    //                         fontWeight={"light"}
    //                         sx={{
    //                             mt: 1,
    //                             fontSize: {
    //                                 xs: "0.8rem",
    //                                 sm: "1rem",
    //                                 md: "1.2rem",
    //                                 lg: "1.5rem",
    //                             },
    //                         }}
    //                     >
    //                         Синергия собственного производства и поставок <br />
    //                         от двух крупнейших заводов Российской Федерации
    //                     </Typography>
    //                     <Button
    //                         variant="outlined"
    //                         color="primary"
    //                         sx={{
    //                             mt: { xs: 1, md: 2 },

    //                             border: "2px solid",
    //                             fontSize: {
    //                                 xs: "0.6rem",
    //                                 sm: "0.8rem",
    //                                 lg: "1rem",
    //                             },
    //                         }}
    //                     >
    //                         Рассчитать
    //                     </Button>
    //                 </Box>
    //             );
    //         },
    //     },
    //     {
    //         name: slideImage3,
    //         description: "Cold windows Provedal slide",
    //         content: function () {
    //             return (
    //                 <Box
    //                     sx={{
    //                         position: "absolute",
    //                         zIndex: 50,

    //                         left: {
    //                             xs: "calc(100vw/2 - 16px)",
    //                             sm: "calc(100vw/2 - 20px)",
    //                             md: "calc(100vw/2 - 25px)",
    //                             lg: "calc(100vw/2 - 35px)",
    //                         },
    //                         top: {
    //                             xs: "45px",
    //                             sm: "55px",
    //                             md: "65px",
    //                             lg: "110px",
    //                         },
    //                     }}
    //                 >
    //                     <Typography
    //                         variant="sliderFont"
    //                         sx={{
    //                             fontSize: {
    //                                 sm: "1.2rem",
    //                                 md: "1.5rem",
    //                                 lg: "2rem",
    //                             },
    //                         }}
    //                     >
    //                         Холодное остекление
    //                     </Typography>
    //                     <Typography
    //                         variant="sliderFont"
    //                         fontWeight={"light"}
    //                         sx={{
    //                             fontSize: {
    //                                 xs: "0.7rem",
    //                                 sm: "0.9rem",
    //                                 md: "1.1rem",
    //                                 lg: "1.5rem",
    //                             },
    //                         }}
    //                     >
    //                         Для балконов, веранд, беседок
    //                     </Typography>
    //                     <Button
    //                         variant="outlined"
    //                         color="primary"
    //                         sx={{
    //                             mt: { xs: 1, md: 2 },
    //                             border: "2px solid",
    //                             fontSize: {
    //                                 xs: "0.6rem",
    //                                 sm: "0.8rem",
    //                                 lg: "1rem",
    //                             },
    //                         }}
    //                     >
    //                         Подробнее
    //                     </Button>
    //                 </Box>
    //             );
    //         },
    //     },
    //     {
    //         name: slideImage4,
    //         description: "Portals slide",
    //         content: function () {
    //             return (
    //                 <Box
    //                     sx={{
    //                         position: "absolute",
    //                         zIndex: 50,
    //                         left: {
    //                             xs: "calc(100vw/2 - 17px)",
    //                             sm: "calc(100vw/2 - 20px)",
    //                             md: "calc(100vw/2 - 25px)",
    //                             lg: "calc(100vw/2 - 35px)",
    //                         },
    //                         top: {
    //                             xs: "45px",
    //                             sm: "57px",
    //                             md: "70px",
    //                             lg: "130px",
    //                         },
    //                     }}
    //                 >
    //                     <Typography
    //                         variant="sliderFont"
    //                         sx={{
    //                             fontSize: {
    //                                 sm: "1.2rem",
    //                                 md: "1.5rem",
    //                                 lg: "2rem",
    //                             },
    //                         }}
    //                     >
    //                         Стоечно-ригельное остекление
    //                     </Typography>
    //                     <Typography
    //                         variant="sliderFont"
    //                         fontWeight={"light"}
    //                         sx={{
    //                             fontSize: {
    //                                 xs: "0.7rem",
    //                                 sm: "0.9rem",
    //                                 md: "1.1rem",
    //                                 lg: "1.5rem",
    //                             },
    //                         }}
    //                     >
    //                         Входные двери, фасады, зимние сады
    //                     </Typography>
    //                     <Button
    //                         variant="outlined"
    //                         color="primary"
    //                         sx={{
    //                             mt: { xs: 1, md: 2 },
    //                             border: "2px solid",
    //                             fontSize: {
    //                                 xs: "0.6rem",
    //                                 sm: "0.8rem",
    //                                 lg: "1rem",
    //                             },
    //                         }}
    //                     >
    //                         Подробнее
    //                     </Button>
    //                 </Box>
    //             );
    //         },
    //     },
    // ];

    return (
        <Box
            display={"flex"}
            width="100%"
            maxHeight="610px"
            minHeight={{ xs: "250px", sm: "410px", md: "610px" }}
            justifyContent={"center"}
            sx={{ position: "relative" }}
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
                top={{ sm: "-40px" }}
                sx={{ transform: `translate(-50%, 50%)` }}
            >
                <Card sx={{ minWidth: 275, maxWidth: 300 }}>
                    <CardContent>
                        <Box
                            display={"flex"}
                            columnGap={1}
                            alignItems={"flex-start"}
                            paddingLeft={0}
                        >
                            <SecuritySharpIcon
                                fontSize="large"
                                sx={{ color: "DodgerBlue" }}
                            />
                            <Typography
                                alignSelf={"flex-end"}
                                variant="sliderFont"
                                fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
                                component="div"
                                fontWeight={"700"}
                                color={"DodgerBlue"}
                            >
                                Настоящая гарантия
                            </Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <Box
                                    display={"flex"}
                                    columnGap={1}
                                    alignItems={"flex-start"}
                                >
                                    <Typography
                                        fontWeight={500}
                                        marginTop={0}
                                        lineHeight={"1.5rem"}
                                        fontSize={{
                                            sm: "0.8rem",
                                            md: "0.9rem",
                                            lg: "1rem",
                                        }}
                                    >
                                        Непрерывно выполняем гарантийные
                                        обязательства более{" "}
                                        {new Date().getFullYear() - 1998} лет
                                    </Typography>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Box
                                    display={"flex"}
                                    columnGap={1}
                                    alignItems={"flex-start"}
                                >
                                    <Typography
                                        marginTop={0}
                                        fontWeight={500}
                                        lineHeight={"1.5rem"}
                                        fontSize={{
                                            sm: "0.8rem",
                                            md: "0.9rem",
                                            lg: "1rem",
                                        }}
                                    >
                                        70% клиентов обращаются к нам по
                                        рекомендации
                                    </Typography>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Box
                                    display={"flex"}
                                    columnGap={1}
                                    alignItems={"flex-start"}
                                >
                                    <Typography
                                        marginTop={0}
                                        fontWeight={500}
                                        lineHeight={"1.5rem"}
                                        fontSize={{
                                            sm: "0.8rem",
                                            md: "0.9rem",
                                            lg: "1rem",
                                        }}
                                    >
                                        Решаем ваши задачи, а не продаём
                                        &quot;дешёвые&quot; окна
                                    </Typography>
                                </Box>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Box>
        </Box>

        // <Carousel {...DefaultSettingsT} sx={{ display: { xs: "flex" } }}>
        //     {items.map((item, i) => (
        //         <Item key={i} item={item} />
        //     ))}
        // </Carousel>
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
