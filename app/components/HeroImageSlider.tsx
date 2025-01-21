import React from "react";
import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import SecuritySharpIcon from "@mui/icons-material/SecuritySharp";
import Image, { StaticImageData } from "next/image";

interface Props {
    sliderImage: StaticImageData;
}

function HeroImageSlider({ sliderImage }: Props) {
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

            <Box
                sx={{
                    display: { xs: "none", sm: "flex" },
                    position: "relative",
                    mb: "auto",
                    left: { sm: "1%", md: "-5%" },
                    top: { sm: "-160px", md: "-85px" },
                    transform: `translate(-50%, 50%)`,
                }}
            >
                <Card sx={{ maxWidth: 280 }}>
                    <CardContent>
                        <Stack direction={"column"}>
                            <Stack direction={"row"}>
                                <SecuritySharpIcon
                                    sx={{
                                        fontSize: "2.5rem",
                                        color: "secondary.main",
                                        mr: 1,
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
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
                                <>70% клиентов обращаются к нам снова</>,
                                <>
                                    Предлагаем надёжное решение задачи, а не
                                    &quot;дешёвую&quot; цену
                                </>,
                            ].map((item, index) => {
                                return (
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            mr: 1,
                                            fontWeight: 500,
                                            fontSize: "medium",
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
        </Box>
    );
}

export default HeroImageSlider;
