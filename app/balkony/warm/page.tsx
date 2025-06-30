import React from "react";
import slideImage from "@/public/images/balkoni/BalcFront1.jpg";
import { ImageSide } from "@/app/lib/types";
import ProductionCardsContainer from "../../components/ProductionCards/ProductionCardsContainer";
import HeroImageSlider from "@/app/components/HeaderSlider";
import ArticlesContainer from "@/app/components/Article/ArticlesContainer";
import balc_1 from "@/public/images/BalcPVC.jpg";
import balc_2 from "@/public/images/Sovmesh2.jpg";
import balc_3 from "@/public/images/balkoni/20160717_151629-2.png";

import WarmBalkonyChooser from "@/app/components/WarmBalkonyChooser";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Тёплое остекление балкона",
    description: "Тёплое остекление балкона или лоджии окнами ПВХ",
    alternates: {
        canonical: "https://тульские-окна.рф/balkony/warm/",
    },
};

export default function Page() {
    return (
        <>
            <HeroImageSlider
                sliderImage={slideImage}
                sliderImageAlt="Главный слайд: тёплое остекление балкона"
                isCardVisible={true}
            />

            <ProductionCardsContainer
                title={"ТЕПЛЫЕ РАМЫ ПВХ ДЛЯ БАЛКОНА ИЛИ ЛОДЖИИ"}
                cardsArray={[
                    {
                        image: balc_1,
                        caption: <>Когда нужны тёплые окна?</>,
                        link: "#for_what",
                    },
                    {
                        image: balc_3,
                        caption: <>Ограничения для установки</>,
                        link: "#minus",
                    },
                    {
                        image: balc_2,
                        caption: <>Совмещение с комнатой</>,
                        link: "#difference",
                    },
                ]}
            />

            <ArticlesContainer
                mainTitle={"Теплое остекление балкона"}
                articles={[
                    {
                        anchor: "for_what",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Для чего используется?",
                        articleParagraphsJSX: [
                            <>
                                Утепленное остекление балкона или лоджии
                                подразумевает прежде всего установку на балкон
                                или лоджию пластиковых оконных рам.
                            </>,
                            <>
                                <strong>
                                    Оно нужно только в том случае, если на
                                    балконе планируется поддерживать тепло
                                    зимой.
                                </strong>{" "}
                                Если это не требуется, то гораздо практичнее
                                будет установить алюминиевые раздвижные рамы.
                            </>,

                            <>
                                Если же отопление на лоджии не планируется, то
                                там станет теплее улицы примерно на 5-10
                                градусов за счёт того тепла, которое будет
                                поступать от жилой комнаты.
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: {
                            imageSrc: balc_1,
                            imageCaption: <>Утепленное остекление балкона</>,
                            border: true,
                        },
                    },

                    {
                        anchor: "for_what",
                        imageSide: ImageSide.LEFT,
                        articleTitle:
                            "Технические ограничения для тёплого остекления лоджии",
                        articleParagraphsJSX: [
                            <>
                                К минусам подобного остекления можно отнести
                                большой вес оконных блоков ПВХ.{" "}
                                <strong>
                                    На ветхие или аварийные балконы невозможна
                                    установка пластиковых окон ввиду опасности
                                    обрушения несущей плиты.
                                </strong>
                            </>,
                            <>
                                В общем случае рекомендации следующие:
                                <br />
                                &emsp;&#8226;&emsp;Ветхий, аварийный балкон —
                                подойдут только раздвижные легкие рамы
                                &quot;ПРОВЕДАЛ&quot;
                                <br />
                                &emsp;&#8226;&emsp;Не планируется отопление
                                балкона или лоджии зимой — лучше подойдут
                                алюминиевые рамы &quot;ПРОВЕДАЛ&quot;
                                <br />
                                &emsp;&#8226;&emsp;Во всех остальных случаях –
                                предпочтительнее смонтировать теплое остекление
                                (пластиковые рамы)
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: {
                            imageSrc: balc_3,
                            imageCaption: (
                                <>
                                    Пример тёплого остекления и отделки прямой
                                    лоджии
                                </>
                            ),
                            border: true,
                        },
                    },

                    {
                        anchor: "minus",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Совмещение балкона с комнатой",
                        articleParagraphsJSX: [
                            <>
                                Совмещение балкона или лоджии с комнатой
                                позволяет расширить жилое пространство квартиры,
                                привнести в помещение больше солнечного света.
                            </>,
                            <>
                                Однако, необходимо учесть важный момент: при
                                совмещении жилой площади с лоджией или балконом{" "}
                                <strong>
                                    в обязательном порядке необходимо
                                    использовать энергоэффективные окна ПВХ с
                                    выносом отопления непосредственно под
                                    оконный проем.
                                </strong>{" "}
                            </>,
                            <>
                                Также необходимо максимально утеплить стены, пол
                                и потолок балкона или лоджии.
                            </>,
                            <>
                                <strong>
                                    Только при этих условиях вы сможете избежать
                                    обильного выпадения конденсата на стекле в
                                    зимний период!
                                </strong>
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: {
                            imageSrc: balc_2,
                            imageCaption: (
                                <>
                                    Совмещение балкона с комнатой (вариант
                                    отделки)
                                </>
                            ),
                            border: true,
                        },
                    },
                ]}
            />

            <WarmBalkonyChooser />

            {/* <Box
                // paddingY={"70px"}
                sx={{
                    objectFit: "contain",
                    backgroundImage: `url(${main_bg.src})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container maxWidth={"lg"}>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        paddingY={6}
                    >
                        <Box marginBottom={6}>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="div"
                                fontWeight={300}
                                marginBottom={4}
                            >
                                Наше предложение, основанное на{" "}
                                {new Date().getFullYear() - 1998}-летнем опыте
                            </Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            flexWrap={"wrap"}
                            justifyContent={"space-around"}
                            width={"100%"}
                            rowGap={6}
                        >
                            {CardProfileSystem(
                                kaleva_profi_img,
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
                                kaleva_standart_img,
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
                        </Box>
                    </Box>
                </Container>
            </Box> */}
        </>
    );
}
