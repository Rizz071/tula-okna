// "use client";

import React from "react";
import slideImage from "@/public/images/slides/apartments_whs_2.jpg";

import HeaderSlider from "@/app/components/HeaderSlider";
import ApartmentsWindowsChooser from "@/app/components/ApartmentsWindowsChooser";
import ArticlesContainer from "@/app/components/Article/ArticlesContainer";
import { ImageSide } from "@/app/lib/types";
import { Stack, Box, Typography, Paper, Container } from "@mui/material";
import Image from "next/image";

import maximum_light from "@/public/images/slides/steklopaket_1.jpg";
import ProductionCardsContainer from "@/app/components/ProductionCards/ProductionCardsContainer";
import furniture_1 from "@/public/images/furniture_1.png";
import otkos_tmblr_1 from "@/public/images/otkos_tmblr.png";
import otkos_1 from "@/public/images/otkos_sandwich_1.png";
import lenta_butil_1 from "@/public/images/lenta_butil_1.png";
import PSUL_lenta_butil_1 from "@/public/images/PSUL_lenta_butil_1.png";
import vetrov_nagr_1 from "@/public/images/vetrov_nagr_1.png";
import energosber_1 from "@/public/images/energosber_1.png";

import apartements1 from "@/public/images/footer-okno_tmblr.jpg";
import dacha1 from "@/public/images/dacha1_104px.jpeg";
import Front_small_2 from "@/public/images/Front_small_2.webp";

export default function Page() {
    return (
        <>
            <HeaderSlider sliderImage={slideImage} isCardVisible={false} />

            <ProductionCardsContainer
                title={"Комплектация наших окон для городской квартиры"}
                cardsArray={[
                    {
                        image: maximum_light,
                        caption: "Двойная защита от запотевания",
                        link: "#zapot",
                    },
                    {
                        image: lenta_butil_1,
                        caption: "Монтаж по ГОСТ для любого окна",
                        link: "#lenta",
                    },
                    {
                        image: otkos_tmblr_1,
                        caption: "Тёплые откосы из сэндвич-панели",
                        link: "#otkos",
                    },

                    {
                        image: furniture_1,
                        caption: "Только немецкая фурнитура G-U и ROTO",
                        link: "#furniture",
                    },
                    {
                        image: vetrov_nagr_1,
                        caption: "Подбор профиля в зависимости от этажа",
                        link: "/balkony",
                    },
                    {
                        image: dacha1,
                        caption: "Микропроветривание всегда включено",
                        link: "6 000",
                    },
                ]}
            />
            {/* <Container maxWidth={"lg"}>
                <Paper
                    elevation={8}
                    color="white"
                    sx={{
                        position: "relative",
                        zIndex: "100",
                        p: 6,
                        textAlign: "center",
                        mt: {
                            xs: -5,
                            sm: -5,
                            md: -5,
                            lg: -5,
                            xl: -5,
                        },
                        transform: "translate(-50%, 0%)",
                        left: "50%",
                        maxWidth: "lg",
                    }}
                >
                    <ResponsiveHeader_H1 text={"Окна в квартиру"} />

                    <Typography gutterBottom sx={{ textAlign: "center" }}>
                        Подберите подходящие окна с помощью конфигуратора.
                    </Typography>
                </Paper>
            </Container> */}

            <ApartmentsWindowsChooser />

            <ArticlesContainer
                mainTitle={"Комплектация наших окон для квартир"}
                articles={[
                    {
                        anchor: "zapot",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Двойная защита от запотевания",
                        articleParagraphsJSX: [
                            <>
                                &quot;Запотевание&quot; стекла - крайне вредный
                                эффект. Вода стекает по стеклу на подоконник и
                                приводит к образованию плесени на откосах.
                            </>,
                            <>
                                Чем теплее внутренняя поверхность стекла - тем
                                меньше вероятность возникновения конденсата.
                                Нагреть стекло можно либо увеличив приток
                                тёплого воздуха от радиатора, либо установив
                                более &quot;тёплый&quot; стеклопакет.
                            </>,
                            <>
                                Наш опыт показывает, что &quot;тёплый&quot;
                                стеклопакет - отлично справляется с конденсатом,
                                даже если отопление недостаточное.
                            </>,
                            <>
                                <strong>
                                    Благодаря двойному энергосберегающему
                                    покрытию значительно увеличивается стойкость
                                    окна к запотеванию.
                                </strong>
                            </>,
                            <>
                                Кроме того,{" "}
                                <strong>энергосберегающие покрытия</strong> (не
                                мультифункциональные){" "}
                                <strong>
                                    практически не уменьшают световой поток
                                </strong>
                                , поступающий через окно. Это особенно важно в
                                средней полосе России, где очень много пасмурных
                                дней в году.
                            </>,
                        ],
                        articlesAccordion: [
                            {
                                accordionTitle: "ПРО ТОЧКУ РОСЫ ПОДРОБНО",
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
                                            src={energosber_1}
                                            sizes={"50vw"}
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
                                        В окна для квартир мы всегда
                                        устанавливаем два энергосберегающих
                                        покрытия - на наружное и внутреннее
                                        стекло.
                                    </Typography>
                                </Box>
                            </Stack>
                        ),
                    },

                    {
                        anchor: "furniture",
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Только немецкая фурнитура G-U и ROTO",
                        articleParagraphsJSX: [
                            <>
                                Фурнитура - это механизм, который работает в
                                окне ежедневно. Срок службы фурнитуры зависит от
                                степени запылённости улицы и от ежегодной смазки
                                деталей пользователем. Для надёжной фурнитуры он
                                составляет от 10 лет и больше.
                            </>,
                            <>
                                К сожалению, не вся фурнитура служит более 10
                                лет. Экономия на механизме может быть совершенно
                                незначительной, а его ремонт через пару лет
                                может обойтись дорого и не всегда приведёт к
                                полному восстановлению функциональности.
                                Сложностей там очень много, т.к. много деталей
                                механизма привязано к конкретному оконному
                                профилю и универсальных запчастей нет.
                            </>,
                            <>
                                <strong>
                                    Для наших окон мы используем только немецкую
                                    фурнитуру марок G-U и Roto. Эти механизмы
                                    выпускаются на рынке довольно долго,
                                    качество деталей не &quot;скачет&quot; от
                                    плохого к хорошему. Оно всегда отличное.
                                </strong>
                            </>,
                            <></>,
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
                                            src={furniture_1}
                                            sizes={"50vw"}
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
                                        Комплект поворотно-откидной фурнитуры
                                        G-U Euro-Jet
                                    </Typography>
                                </Box>
                            </Stack>
                        ),
                    },

                    {
                        anchor: "otkos",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Только тёплые откосы",
                        articleParagraphsJSX: [
                            <>
                                Есть много способов обустроить внутренний откос.
                                По нашему опыту из них самый надёжный - сэндвич
                                панель.
                            </>,
                            <>
                                Сэндвич-панель имеет аккуратный внешний вид,
                                легко моется, является утеплителем и имеет
                                свойство пароизоляции, что сильно улучшает
                                качество этого узла.
                            </>,
                            <>
                                <strong>
                                    Откос из сэндвич-панели не проводит холод и
                                    всегда тёплый!
                                </strong>{" "}
                                В то время как штукатурный откос без внутреннего
                                утепления очень часто промерзает. Также
                                промерзает и пластиковая пустотелая панель,
                                которую часто устанавливают ради мнимой
                                экономии.
                            </>,
                            <>
                                <strong>
                                    Не все сэндвич-панели подходят для откоса.
                                </strong>{" "}
                                Во-первых, сэндвич-панель должна иметь толщину
                                не менее 9мм, чтобы надёжно держаться в
                                стартовом профиле. Во-вторых, наружный
                                пластиковый слой сэндвич-панели должен быть не
                                менее 0,5мм толщиной, чтобы сквозь него не
                                просвечивались внутренние стыки вспененного
                                полистирола.
                            </>,
                            <>
                                К сожалению, рынок наводнён панелями
                                эконом-класса. Их толщина 8мм и менее,
                                пластиковая облицовка 0,4мм и менее. Такие
                                сэндвич-панели очень плохо подходят для
                            </>,
                            <>
                                <strong>
                                    Мы используем сэндвичи надлежащей толщины, с
                                    качественной пластиковой облицовкой.
                                </strong>
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
                            <Stack direction={"column"}>
                                <Box alignSelf={"center"}>
                                    <Box padding={0}>
                                        <Image
                                            src={otkos_1}
                                            sizes={"50vw"}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                            alt={"Light in apartments"}
                                        />
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            textAlign: "center",
                                            fontWeight: 500,
                                            mt: 4,
                                        }}
                                    >
                                        Оптимальное обустройство тёплого откоса
                                        в квартирах с использованием
                                        сэндвич-панели
                                    </Typography>
                                </Box>
                            </Stack>
                        ),
                    },

                    {
                        anchor: "lenta",
                        imageSide: ImageSide.LEFT,
                        articleTitle:
                            "Монтаж окна по ГОСТ - входит в стоимость",
                        articleParagraphsJSX: [
                            <>
                                <strong>
                                    Окна должны всегда устанавливаться в
                                    соответствии с ГОСТ.
                                </strong>{" "}
                                Это подразумевает защиту монтажной пены с улицы
                                и со стороны помещения.
                            </>,
                            <>
                                Со стороны улицы мы устанавливаем ПСУЛ
                                (предварительно сжатую уплотнительную ленту).
                                Она позволяет лишней влаге выходить из монтажной
                                пены, одновременно защищая пену от солнечных
                                лучей, которые разрушают её.
                            </>,
                            <>
                                Со стороны помещения мы устанавливаем
                                полнобутиловую пароизоляционную ленту. Она не
                                даёт влаге из помещения попасть в слой с
                                монтажной пеной. Если этого не сделать, то в
                                пене могут начаться дегенеративные процессы.
                            </>,
                            <>
                                <strong>
                                    Очень важно использовать для пароизоляции
                                    именно полнобутиловую мембрану.
                                </strong>{" "}
                                Наш опыт показывает, что стандартные ленты часто
                                отслаиваются от стены уже в первые несколько
                                суток после монтажа. Иногда прямо во время
                                монтажа!
                            </>,
                            <>
                                <strong>
                                    В стоимость наших окон для квартир входит
                                    как ПСУЛ с уличной стороны, так и
                                    пароизоляция изнутри помещения. Таким
                                    образом мы всегда выполняем монтаж по ГОСТ.
                                </strong>
                            </>,
                            <></>,
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
                                            src={PSUL_lenta_butil_1}
                                            sizes={"50vw"}
                                            style={{
                                                width: "80%",
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
                                        Предварительно сжатая уплотнительная
                                        лента и полнобутиловая мембрана. Монтаж
                                        по ГОСТ.
                                    </Typography>
                                </Box>
                            </Stack>
                        ),
                    },
                ]}
            />
        </>
    );
}
