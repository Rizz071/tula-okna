import React from "react";
import { Container, Box, Typography, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Image, { StaticImageData } from "next/image";
import kaleva_70 from "@/public/images/profiles/kaleva_70_3.jpg";
import veka_70 from "@/public/images/profiles/veka_70_2.jpg";
import veka_82 from "@/public/images/profiles/veka_82_1.jpg";
import slideImage from "@/public/images/balkoni/BalcFront1.jpg";
import cold_ostekl from "@/public/images/balkoni/cold_ostekl_tmblr.jpg";
import tepl_ostekl from "@/public/images/balkoni/tepl_ostek_tmblr.jpg";
import otdelka from "@/public/images/balkoni/otdelka_tmblr.jpg";
import { ImageSide } from "../../lib/types";
import ProductionCardsContainer from "../../components/ProductionCards/ProductionCardsContainer";
import polnoves_provedal from "@/public/images/balkoni/Polnoves_provedal.jpg";
import oblegch_provedal from "@/public/images/balkoni/Oblegch_provedal.jpg";
import HeroImageSlider from "@/app/components/HeroImageSlider";
import ArticlesContainer from "@/app/components/Article/ArticlesContainer";

export default function Page() {
    return (
        <>
            <HeroImageSlider sliderImage={slideImage} />

            <ProductionCardsContainer
                title={""}
                cardsArray={[
                    {
                        image: cold_ostekl,
                        caption: "Особенности наших рам",
                        link: "/okna/apartments",
                    },
                    {
                        image: tepl_ostekl,
                        caption: "Стоимость остекления",
                        link: "/balkony",
                    },
                    {
                        image: otdelka,
                        caption: "Примеры работ",
                        link: "/okna/cottage",
                    },
                ]}
            />

            <ArticlesContainer
                mainTitle={"Остекление балконов в Туле"}
                articles={[
                    {
                        imageSide: ImageSide.RIGHT,
                        articleTitle:
                            "Особенность наших холодных раздвижных балконных рам",
                        articleParagraphsJSX: [
                            <>
                                <strong>
                                    Кратко: на надёжности нельзя экономить.
                                </strong>
                            </>,
                            <>
                                Алюминиевые рамы не подпадают под действие ни
                                одного ГОСТа. Из-за этого рынок наводнён
                                низкокачественной продукцией.
                            </>,
                            <>
                                Главное отличие качественной рамы &ndash;
                                толщина стенок алюминиевого профиля.
                            </>,
                            <>
                                Настоящий алюминиевый профиль имеет толщину
                                стенки &ndash; не менее 1мм, в нём также
                                присутствуют все рёбра жесткости,
                                предусмотренные авторами системы.
                            </>,
                            <>
                                Цель использования тонкого профиля одна &ndash;
                                сэкономить деньги на стоимости рамы, то есть
                                предложить потребителю более низкую цену.
                            </>,
                            <>
                                Последствия установки таких &quot;хлипких&quot;
                                рам хорошо известны - лёгкие створки выпадают от
                                сильного ветра, рамы гнутся от малейшей
                                нагрузки.
                            </>,
                            <>
                                <strong>
                                    Мы производим наши алюминиевые рамы на
                                    мощностях АО СОФОС только из полновесного
                                    профиля.
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
                            <Stack direction={"column"} rowGap={6}>
                                <Box alignSelf={"center"}>
                                    <Box padding={0}>
                                        <Image
                                            src={polnoves_provedal}
                                            sizes={"30vw"}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                            alt={"Полновесный профиль Provedal"}
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
                                <Box alignSelf={"center"}>
                                    <Box padding={4}>
                                        <Image
                                            src={oblegch_provedal}
                                            sizes={"30vw"}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                            alt={"Облегчённый профиль Provedal"}
                                        />
                                    </Box>
                                    <Typography
                                        align={"center"}
                                        variant="body2"
                                        fontWeight={500}
                                    >
                                        Облегчённый эконом-профиль раздвижной
                                        рамы.
                                        <br />
                                        Вес - 0,564 кг/пог.м. и менее...
                                    </Typography>
                                </Box>
                            </Stack>
                        ),
                    },
                ]}
            />

            <Box>
                <Container maxWidth={"lg"}>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        paddingY={6}
                    >
                        <Box
                            display={"flex"}
                            flexWrap={"wrap"}
                            justifyContent={"space-around"}
                            width={"100%"}
                            rowGap={6}
                        >
                            {CardProfileSystem(
                                kaleva_70,
                                5,
                                "КАЛЕВА Стандарт 70мм",
                                [
                                    "Происхождение - Россия",
                                    "Толщина стенки - не менее 2.5мм",
                                    "3 стекла с энергосберегающим покрытием",
                                    "Фурнитура Gretsch-Unitas или ROTO на выбор",
                                    "Стандартная гарантия - 3 года",
                                ],
                                "Российская оконная система, созданная по образцу известной немецкой марки. Остекление будет экономичным, но при этом также полностью соответствовать требованиям для остекления дома круглогодичного проживания."
                            )}
                            {CardProfileSystem(
                                veka_70,
                                0,
                                "VEKA SOFTLINE 70mm",
                                [
                                    "Происхождение - Германия",
                                    "Толщина стенки - не менее 3мм",
                                    "3 стекла с мультифункциональным покрытием",
                                    "Фурнитура Gretsch-Unitas или ROTO на выбор",
                                    "Расширенная гарантия - 5 лет",
                                ],
                                "Наиболее качественная оконная система на рынке РФ (наряду с Rehau Brillant). Больше пластика в профиле, надёжнее соединения рам и створок. Переплата в 10-20% по сравнению с аналогами окупится высочайшим уровнем комфорта при эксплуатации и отсутствием проблем с регулировкой на долгие годы вперёд."
                            )}
                            {CardProfileSystem(
                                veka_82,
                                0,
                                "VEKA SOFTLINE 82mm",
                                [
                                    "Происхождение - Германия",
                                    "Толщина стенки - не менее 3мм",
                                    "3 стекла с мультифункциональным покрытием",
                                    "Фурнитура Gretsch-Unitas или ROTO на выбор",
                                    "Расширенная гарантия - 5 лет",
                                ],
                                "Система созданна для применения в пассивном доме. Невероятное сочетание теплосбережения и надёжности."
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

function CardProfileSystem(
    image: StaticImageData,
    imgPadding: number,
    title: string,
    descriptionText: string[],
    finalDescription: string
) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                image={image.src}
                sx={{ height: 400, padding: imgPadding, objectFit: "cover" }}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <hr style={{ margin: "15px 0" }} />

                <ul style={{ marginLeft: "30px" }}>
                    {descriptionText.map((paragraph) => {
                        return (
                            <li key={Math.round(Math.random() * 10000)}>
                                <Typography
                                    fontSize={"16px"}
                                    color="text.primary"
                                    gutterBottom
                                >
                                    {paragraph}
                                </Typography>
                            </li>
                        );
                    })}
                </ul>
                <hr style={{ margin: "15px 0" }} />
                <Typography fontSize={"16px"} color="text.primary" gutterBottom>
                    {finalDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Подробнее</Button>
            </CardActions>
        </Card>
    );
}
