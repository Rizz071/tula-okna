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
import balc_1 from "@/public/images/BalcPVC.jpg";
import balc_2 from "@/public/images/Sovmesh2.jpg";
import provedal_3 from "@/public/images/balkoni/provedal3-2_crop.jpg";
import main_bg from "@/public/images/main-bg.webp";
import kaleva_profi_img from "@/public/images/profi_10_1.png";
import kaleva_standart_img from "@/public/images/standart_1.png";
import ApartmentsWindowsChooser from "@/app/components/ApartmentsWindowsChooser";
import WarmBalkonyChooser from "@/app/components/WarmBalkonyChooser";

export default function Page() {
    return (
        <>
            <HeroImageSlider sliderImage={slideImage} isCardVisible={true} />

            <ProductionCardsContainer
                title={"ТЕПЛЫЕ РАМЫ ПВХ ДЛЯ БАЛКОНА ИЛИ ЛОДЖИИ"}
                cardsArray={[
                    {
                        image: balc_1,
                        caption: "Когда оно необходимо?",
                        link: "#for_what",
                    },
                    {
                        image: balc_2,
                        caption: "Как совместить с комнатой?",
                        link: "#stability",
                    },
                    {
                        image: polnoves_provedal,
                        caption: "Какие рамы ПВХ подойдут?",
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
                                Оно нужно только в том случае, если на балконе
                                планируется подерживать тепло зимой. Если этого
                                не требуется, то гораздо практичнее будет
                                установить алюминиевые раздвижные рамы
                                &quot;ПРОВЕДАЛ&quot;.
                            </>,
                            <>
                                Утепленное остекление балкона или лоджии
                                подразумевает прежде всего установку на балкон
                                или лоджию пластиковых оконных рам.
                            </>,
                            <>
                                Так можно сделать балкон более теплым зимой, по
                                сравнению с балконом, остекленным алюминиевым
                                профилем. На лоджии станет теплее улицы примерно
                                на 5-10 градусов. Совместить лоджию с комнатой,
                                смонтировав специальные энергоэффективные
                                оконные блоки, а также источник тепла
                                (радиаторы).
                            </>,
                        ],
                        articlesAccordion: [],
                        articleImage: {
                            imageSrc: balc_1,
                            imageCaption: <>Утепленное остекление балкона</>,
                            border: true,
                        },
                    },

                    {
                        anchor: "for_what",
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Для чего используется?",
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
                                «Проведал»
                                <br />
                                &emsp;&#8226;&emsp;Не планируется отопление
                                балкона или лоджии зимой — лучше подойдут
                                алюминиевые рамы «Проведал»
                                <br />
                                &emsp;&#8226;&emsp;Во всех остальных случаях –
                                предпочтительнее смонтировать теплое остекление
                                (пластиковые рамы)
                            </>,
                        ],
                        articlesAccordion: [],
                        articleImage: {
                            imageSrc: balc_1,
                            imageCaption: <>Утепленное остекление балкона</>,
                            border: true,
                        },
                    },

                    {
                        anchor: "stability",
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Совмещение балкона с комнатой",
                        articleParagraphsJSX: [
                            <>
                                Совмещение балкона или лоджии с комнатой
                                позволяет расширить жилое пространство квартиры,
                                привнести в помещение больше солнечного света.
                            </>,
                            <>
                                Однако, необходимо учесть важный момент - при
                                совмещении жилой площади с лоджией или балконом
                                в обязательном порядке необходимо использовать
                                энергоэффективные окна ПВХ с выносом отопления
                                непосредственно под оконный проем.Также
                                необходимо максимально утеплить стены, пол и
                                потолок балкона или лоджии.
                            </>,
                            <>
                                <strong>
                                    Только таким образом Вы сможете избежать
                                    обильного выпадения конденсата в зимний
                                    период!
                                </strong>
                            </>,
                        ],
                        articlesAccordion: [],
                        articleImage: {
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
                        articleImage: {
                            imageSrc: provedal_compare_1,
                            imageCaption: <></>,
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

// function CardProfileSystem(
//     image: StaticImageData,
//     imgPadding: number,
//     title: string,
//     descriptionText: string[],
//     finalDescription: string
// ) {
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//                 component="img"
//                 image={image.src}
//                 sx={{ height: 400, padding: imgPadding, objectFit: "cover" }}
//                 title={title}
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     {title}
//                 </Typography>
//                 <hr style={{ margin: "15px 0" }} />

//                 <ul style={{ marginLeft: "30px" }}>
//                     {descriptionText.map((paragraph) => {
//                         return (
//                             <li key={Math.round(Math.random() * 10000)}>
//                                 <Typography
//                                     fontSize={"16px"}
//                                     color="text.primary"
//                                     gutterBottom
//                                 >
//                                     {paragraph}
//                                 </Typography>
//                             </li>
//                         );
//                     })}
//                 </ul>
//                 <hr style={{ margin: "15px 0" }} />
//                 <Typography fontSize={"16px"} color="text.primary" gutterBottom>
//                     {finalDescription}
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Подробнее</Button>
//             </CardActions>
//         </Card>
//     );
// }
