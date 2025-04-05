import React from "react";
import { Container, Box, Typography, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { StaticImageData } from "next/image";
import kaleva_70 from "@/public/images/profiles/kaleva_70_3.jpg";
import veka_70 from "@/public/images/profiles/veka_70_2.jpg";
import veka_82 from "@/public/images/profiles/veka_82_1.jpg";
import slideImage from "@/public/images/balkoni/BalcFront1.jpg";
import cold_ostekl from "@/public/images/balkoni/cold_ostekl_tmblr.jpg";
import tepl_ostekl from "@/public/images/balkoni/tepl_ostek_tmblr.jpg";
import otdelka from "@/public/images/story3.jpg";
import { ImageSide } from "@/app/lib/types";
import ProductionCardsContainer from "../../components/ProductionCards/ProductionCardsContainer";
import polnoves_provedal from "@/public/images/balkoni/Polnoves_provedal.jpg";
import provedal_compare_1 from "@/public/images/balkoni/provedal_compare_1.png";
import oblegch_provedal from "@/public/images/balkoni/Oblegch_provedal.jpg";
import HeroImageSlider from "@/app/components/HeaderSlider";
import ArticlesContainer from "@/app/components/Article/ArticlesContainer";
import provedal_tmblr_1 from "@/public/images/balkoni/Provedal_banner.jpg";
import provedal_1 from "@/public/images/balkoni/provedal_1.png";
import provedal_2 from "@/public/images/balkoni/provedal_2.png";
import provedal_3 from "@/public/images/balkoni/provedal3-2_crop.jpg";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Холодное остекление балкона ПРОВЕДАЛ",
    description: "Холодное остекление балкона системой ПРОВЕДАЛ",
};

export default function Page() {
    return (
        <>
            <HeroImageSlider sliderImage={slideImage} isCardVisible={true} />

            <ProductionCardsContainer
                title={"АЛЮМИНИЕВЫЕ РАЗДВИЖНЫЕ РАМЫ"}
                cardsArray={[
                    {
                        image: provedal_tmblr_1,
                        caption: <>Для чего используются?</>,
                        link: "#for_what",
                    },
                    {
                        image: provedal_3,
                        caption: <>Насколько они надёжны?</>,
                        link: "#stability",
                    },
                    {
                        image: polnoves_provedal,
                        caption: <>Особенность наших рам</>,
                        link: "#difference",
                    },
                ]}
            />

            <ArticlesContainer
                mainTitle={"Холодное остекление балконов и лоджий в Туле"}
                articles={[
                    {
                        anchor: "for_what",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Для чего используется?",
                        articleParagraphsJSX: [
                            <>
                                Раздвижные рамы системы &quot;ПРОВЕДАЛ&quot;
                                &mdash;{" "}
                                <strong>
                                    наиболее экономичный на сегодняшний день
                                    вариант остекления балкона или лоджии
                                </strong>
                                , а для старого балкона с ветхой несущей плитой
                                &mdash; и единственно возможное решение, потому
                                что пластиковые рамы будут слишком тяжелы.
                            </>,
                            <>
                                Если стоит задача просто закрыть лоджию от
                                осадков, звуков, пыли &mdash; целесообразно
                                использовать именно раздвижную систему
                                &quot;ПРОВЕДАЛ&quot;.
                            </>,
                            <>
                                Холодное ограждение балконов понижает уровень
                                теплопотерь и шума - шумоизоляция увеличивается.
                            </>,
                            <>
                                По нашему опыту, монтаж раздвижек из профиля
                                Provedal обеспечивает прекрасную защиту от пыли
                                и осадков - на балконе постоянно будет сухо и
                                чисто.
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: {
                            imageSrc: provedal_1,
                            imageCaption: (
                                <>
                                    Холодное остекление балкона с &quot;выносом
                                    рамы вперёд&quot;
                                </>
                            ),
                            border: true,
                        },
                    },

                    {
                        anchor: "stability",
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Надёжность алюминиевых рам",
                        articleParagraphsJSX: [
                            <>
                                Профиль выпонен из специального сплава АД31 на
                                основе алюминия, который стоек к осадкам и
                                перепадам температур.
                            </>,
                            <>
                                Рамы выпускаются белого и коричневого цвета, а
                                также окрашиваются порошковым способом в любой
                                цвет по палитре RAL.
                            </>,
                            <>
                                <strong>
                                    Раздвижные рамы системы &quot;ПРОВЕДАЛ&quot;
                                    - это лучшее сочетание стоимости и качества
                                    для остекления балконов.
                                </strong>{" "}
                                Их свойства соответствуют всем требованиям
                                пожаробезопасности и экологичности.
                            </>,
                            <>
                                Они не окисляются, не скручиваются, не
                                трескаются, устойчивы к деформации, коррозии,
                                вредным действиям окружающей среды, имеют низкий
                                удельный вес.{" "}
                                <strong>
                                    Долговечность таких конструкций составляет
                                    более 80 лет.
                                </strong>
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: {
                            imageSrc: provedal_2,
                            imageCaption: (
                                <>
                                    Холодное остекление балкона &quot;с плиты на
                                    плиту&quot;
                                </>
                            ),
                            border: true,
                        },
                    },

                    {
                        anchor: "difference",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Особенность наших рам ПРОВЕДАЛ",
                        articleParagraphsJSX: [
                            <>
                                Алюминиевые рамы не подпадают под действие ни
                                одного ГОСТ. Из-за этого наш рынок наводнён
                                низкокачественной продукцией.
                            </>,
                            <>
                                <strong>
                                    Главное отличие надёжной рамы &mdash;
                                    толщина стенок алюминиевого профиля.
                                </strong>
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
                        articleMedia: {
                            imageSrc: provedal_compare_1,
                            imageCaption: <></>,
                        },
                    },
                ]}
            />
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
