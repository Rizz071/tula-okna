import React from "react";
import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import SecuritySharpIcon from "@mui/icons-material/SecuritySharp";
import Image, { StaticImageData } from "next/image";

interface Props {
    sliderImage: StaticImageData;
    isCardVisible: boolean;
}

function HeaderSlider({ sliderImage, isCardVisible }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                maxHeight: "610px",
                minHeight: { xs: "250px", sm: "410px", md: "610px" },
                justifyContent: "center",
                position: "relative",
            }}
        >
            <Image
                src={sliderImage}
                alt="Slider hero image"
                sizes={"100vw"}
                quality={85}
                style={{ objectFit: "cover" }}
                fill
                priority
            />

            {isCardVisible && (
                <Box
                    sx={{
                        display: { xs: "flex", sm: "flex" },
                        position: "relative",
                        mb: "auto",
                        left: { xs: "30%", sm: "-5%", md: "-5%" },
                        top: { xs: "-75px", sm: "-115px", md: "-160px" },
                        // transform: {
                        //     xs: `translate(-50%, 8%)`,
                        //     sm: `translate(-50%, 65%)`,
                        //     md: `translate(-50%, 35%)`,
                        // },
                        transform: `translate(-50%, 50%)`,
                    }}
                >
                    <Card
                        sx={{
                            maxWidth: { xs: 240, sm: 260, md: 300 },
                            opacity: { xs: "90%", sm: "96%" },
                        }}
                        square
                    >
                        <CardContent sx={{ p: { xs: 2, sm: 2 } }}>
                            <Stack direction={"column"}>
                                <Stack direction={"row"}>
                                    <SecuritySharpIcon
                                        sx={{
                                            fontSize: {
                                                xs: "1.2rem",
                                                sm: "1.5rem",
                                                md: "2.5rem",
                                            },
                                            color: "secondary.main",
                                            mr: 1,
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            mt: 0,
                                            typography: "h5",
                                            fontSize: {
                                                xs: "0.9rem",
                                                sm: "1rem",
                                                md: "1.5rem",
                                            },
                                            alignSelf: "center",
                                            color: "secondary.main",
                                        }}
                                    >
                                        Наша гарантия
                                    </Typography>
                                </Stack>

                                {[
                                    <>
                                        Непрерывно выполняем гарантийные
                                        обязательства более{" "}
                                        {new Date().getFullYear() - 1998} лет
                                    </>,
                                    <>70% клиентов обращаются к нам повторно</>,
                                    <>
                                        Публикуем настоящие цены, не занижаем их
                                        искусственно
                                    </>,
                                    <>
                                        Предлагаем технически надёжное решение
                                        задачи, а не &quot;дешёвые&quot; окна
                                    </>,
                                ].map((item, index) => {
                                    return (
                                        <Typography
                                            sx={{
                                                ml: 2,
                                                mr: 1,
                                                mt: { xs: 1, sm: 2, md: 3 },
                                                fontWeight: {
                                                    xs: 400,
                                                    sm: 500,
                                                },
                                                fontSize: {
                                                    xs: "x-small",
                                                    sm: "smaller",
                                                    md: "medium",
                                                },
                                                lineHeight: {
                                                    xs: "0.7rem",
                                                    sm: "1.1rem",
                                                    md: "1.5rem",
                                                },
                                            }}
                                            key={index}
                                        >
                                            {item}
                                        </Typography>
                                    );
                                })}
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
            )}
        </Box>
    );
}

export default HeaderSlider;
