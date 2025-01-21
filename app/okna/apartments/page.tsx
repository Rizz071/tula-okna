"use client";

import React from "react";
import slideImage from "@/public/images/slides/apartment_slide_1_cropped.jpg";
import HeroImageSlider from "@/app/components/HeaderSlider";
import Front_small_2 from "@/public/images/Front_small_2.webp";
import Front_small_3 from "@/public/images/Front_small_3.webp";
import House from "@/public/images/House.webp";
import Doors from "@/public/images/Doors.webp";
import apartements1 from "@/public/images/apartements3_104px.jpg";
import dacha1 from "@/public/images/dacha1_104px.jpeg";
import ProductionCardsContainer from "@/app/components/ProductionCards/ProductionCardsContainer";
import ApartmentsWindowsChooser from "@/app/components/ApartmentsWindowsChooser";
import ArticlesContainer from "@/app/components/Article/ArticlesContainer";
import { ImageSide } from "@/app/lib/types";
import { Stack, Box, Typography } from "@mui/material";
import Image from "next/image";

import maximum_light from "@/public/images/slides/steklopaket_1.jpg";

export default function Page() {
    return (
        <>
            <HeroImageSlider sliderImage={slideImage} isCardVisible={false} />
            <ProductionCardsContainer
                title={"Окна в городскую квартиру"}
                cardsArray={[
                    {
                        image: apartements1,
                        caption: "Максимум света",
                        link: "/okna/apartments",
                    },
                    {
                        image: Front_small_2,
                        caption: "Защита от запотевания",
                        link: "/balkony",
                    },
                    {
                        image: House,
                        caption: "Захита от шума",
                        link: "/okna/cottage",
                    },
                    {
                        image: dacha1,
                        caption: "Регулируемое проветривание",
                        link: "6 000",
                    },
                    {
                        image: Doors,
                        caption: "Москитная сетка от пыли",
                        link: "15 000",
                    },
                    {
                        image: Front_small_3,
                        caption: "Детская безопасность",
                        link: "59 000",
                    },
                ]}
            />

            <ArticlesContainer
                mainTitle={"Составляющие отличного окна в кваритире"}
                articles={[
                    {
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Максимум света",
                        articleParagraphsJSX: [
                            <>
                                В средней полосе России довольно много пасмурных
                                дней в году, и сохранение светового потока
                                жизненно необходимо для хорошего самочувствия.
                            </>,
                            <>
                                Простые энергосберегающие покрытия (не
                                мультифункциональные) практически не уменьшают
                                световой поток, поступающий через окно.
                            </>,
                            <>
                                Кроме того, такие профильные системы как{" "}
                                <strong>REHAU Blitz</strong> и{" "}
                                <strong>REHAU Grazio</strong> специально имеют
                                заниженную высоту узла створка/рама, что
                                приводит к увеличению светового потока.
                            </>,
                        ],
                        articlesAccordion: [
                            {
                                accordionTitle:
                                    "Откуда вообще берётся тонкий профиль?",
                                accordionParagraphs: [
                                    "Заводы выпускают облегчённый профиль для изготовления маленьких рам. Например, он хорошо подходит для изготовления шкафов-купе, окон раздачи в учреждениях питания и т.д.",
                                    "Однако, пользуясь тем, что потребитель не различает полновесный профиль от низкосортного, недобросовестные монтажнные организации применяют его буквально везде.",
                                    "В итоге потребитель платит немного меньше при заказе такой продукции, но через некоторое время сталкивается с негативными последствиями.",
                                ],
                            },
                        ],
                        articleImageJSX: (
                            <Stack direction={"column"} rowGap={6}>
                                <Box alignSelf={"center"}>
                                    <Box padding={0}>
                                        <Image
                                            src={maximum_light}
                                            sizes={"30vw"}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                            alt={"Light in apartments"}
                                        />
                                    </Box>
                                    <Typography
                                        align={"center"}
                                        variant="body2"
                                        fontWeight={500}
                                    >
                                        Полновесный профиль раздвижной рамы.
                                        <br />
                                        Вес - 0,79 кг/пог.м.
                                    </Typography>
                                </Box>
                            </Stack>
                        ),
                    },

                    {
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Максимум света",
                        articleParagraphsJSX: [
                            <>
                                В средней полосе России довольно много пасмурных
                                дней в году и сохранение светового потока
                                (инсоляции комнаты) жизненно необходимо.
                            </>,
                            <>
                                Энергосберегающие покрытия практически не
                                уменьшают световой поток, поступающий через
                                окно.
                            </>,
                            <>
                                Потери света при установке мультифуционального
                                покрытия значительно выше чем у
                                энергосберегающего, поэтому в общем случая его
                                применение в квартире нецелесообразно.
                            </>,
                        ],
                        articlesAccordion: [
                            {
                                accordionTitle:
                                    "Откуда вообще берётся тонкий профиль?",
                                accordionParagraphs: [
                                    "Заводы выпускают облегчённый профиль для изготовления маленьких рам. Например, он хорошо подходит для изготовления шкафов-купе, окон раздачи в учреждениях питания и т.д.",
                                    "Однако, пользуясь тем, что потребитель не различает полновесный профиль от низкосортного, недобросовестные монтажнные организации применяют его буквально везде.",
                                    "В итоге потребитель платит немного меньше при заказе такой продукции, но через некоторое время сталкивается с негативными последствиями.",
                                ],
                            },
                        ],
                        articleImageJSX: (
                            <Stack direction={"column"} rowGap={6}>
                                <Box alignSelf={"center"}>
                                    <Box padding={0}>
                                        <Image
                                            src={maximum_light}
                                            sizes={"30vw"}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                            alt={"Light in apartments"}
                                        />
                                    </Box>
                                    <Typography
                                        align={"center"}
                                        variant="body2"
                                        fontWeight={500}
                                    >
                                        Полновесный профиль раздвижной рамы.
                                        <br />
                                        Вес - 0,79 кг/пог.м.
                                    </Typography>
                                </Box>
                            </Stack>
                        ),
                    },
                ]}
            />

            <ApartmentsWindowsChooser />
        </>
    );
}
