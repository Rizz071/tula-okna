import React from "react";
import slideImage from "@/public/images/Vekamotion-Max-Exterior-01.png";
import { ImageSide } from "@/app/lib/types";
import ProductionCardsContainer from "../components/ProductionCards/ProductionCardsContainer";
import HeroImageSlider from "@/app/components/HeaderSlider";
import ArticlesContainer from "@/app/components/Article/ArticlesContainer";
import image_1 from "@/public/video/PortalPSK_2.jpg";
import balc_2 from "@/public/images/Sovmesh2.jpg";
import balc_3 from "@/public/images/balkoni/20160717_151629-2.png";
import Player from "next-video/player";
import Image from "next/image";
import portal_apartments from "@/public/images/portali/portal5.jpg";
import portal_1 from "@/public/images/portali/portal8.jpg";
import portal_2 from "@/public/images/portali/portal_garmoshka.jpg";
import portal_part_1 from "@/public/images/portal_part_1.png";
import porog_otopl_1 from "@/public/images/porog_otopl_1.png";

import WarmBalkonyChooser from "@/app/components/WarmBalkonyChooser";
import {
    Box,
    Container,
    Grid2 as Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import ResponsiveHeader_H1 from "../components/Article/ResponsiveHeader_H1";

export default function Page() {
    return (
        <>
            <HeroImageSlider sliderImage={slideImage} isCardVisible={false} />

            <ProductionCardsContainer
                title={"ТЁПЛЫЕ РАЗДВИЖНЫЕ ДВЕРИ - ПОРТАЛЫ"}
                cardsArray={[
                    {
                        image: portal_apartments,
                        caption: (
                            <>
                                Портал - выход
                                <br />
                                на лоджию
                            </>
                        ),
                        link: "#portal_balc",
                    },
                    {
                        image: portal_1,
                        caption: <>Сдвижной портал в коттедж</>,
                        link: "#portal_cottage",
                    },
                    {
                        image: portal_2,
                        caption: <>Складной портал для веранды</>,
                        link: "#difference",
                    },
                    {
                        image: image_1,
                        caption: <>Требования к отоплению</>,
                        link: "#portal_balc",
                    },
                    {
                        image: portal_part_1,
                        caption: <>Особенности нашей сборки</>,
                        link: "#portal_cottage",
                    },
                    {
                        image: porog_otopl_1,
                        caption: <>Высота порога и отопление</>,
                        link: "#difference",
                    },
                ]}
            />

            <Container maxWidth={"lg"}>
                {/* <Grid container>
                    <Grid size={6}>
                        <Grid container size={12} columnSpacing={4}>
                            <Grid size={6}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        border: "1px solid grey",
                                        mt: 0,
                                        p: 1,
                                    }}
                                >
                                    <Player
                                        src={"/video/PortalPSK_2.mp4"}
                                        // poster={"/video/PortalFS_1.jpg"}
                                    />
                                </Box>
                            </Grid>
                            <Grid size={6}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        border: "1px solid grey",
                                        mt: 0,
                                        p: 1,
                                    }}
                                >
                                    <Player
                                        src={"/video/PortalPSK_3.mp4"}
                                        // poster={"/video/PortalFS_1.jpg"}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={6}>
                        <Typography sx={{ mt: 0 }}>
                            <strong>Раздвижные пластиковые двери</strong> —
                            прекрасное решение для частных домов, коттеджей и
                            квартир с широким выходом на балкон. Такие
                            конструкции позволяют отлично сохранять тепло в
                            помещении, они полностью герметичны в закрытом
                            положении, а также являются надежным препятствием на
                            пути уличного шума.
                        </Typography>
                        <Typography>
                            Сейчас порталы пвх приобретают всё большую
                            популярность. Только раздвижные окна позволяют
                            собрать теплые раздвижные створки шириной до 1,6 м и
                            высотой до 2,7м каждая, причем для того, чтобы их
                            открыть вполне хватит силы женщины или ребенка.
                        </Typography>
                    </Grid>
                </Grid> */}

                <Grid container spacing={8} sx={{ position: "relative" }}>
                    <Grid size={12} sx={{ mt: 12 }}>
                        <ResponsiveHeader_H1 text="Описание основных портальных конструкций" />
                    </Grid>
                    <Grid size={6}>
                        <Stack direction="column">
                            <Grid container size={12} columnSpacing={4}>
                                <Grid size={6}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            border: "1px solid grey",
                                            mt: 0,
                                            p: 1,
                                        }}
                                    >
                                        <Player
                                            src={"/video/PortalPSK_2.mp4"}
                                            // poster={"/video/PortalFS_1.jpg"}
                                        />
                                    </Box>
                                </Grid>
                                <Grid size={6}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            border: "1px solid grey",
                                            mt: 0,
                                            p: 1,
                                        }}
                                    >
                                        <Player
                                            src={"/video/PortalPSK_3.mp4"}
                                            // poster={"/video/PortalFS_1.jpg"}
                                        />
                                    </Box>
                                </Grid>
                                <Grid size={12}>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            textAlign: "center",
                                            fontWeight: 500,
                                            mt: 2,
                                        }}
                                    >
                                        Сдвижные порталы ПСК как выход на лоджию
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box
                                sx={{
                                    width: "100%",
                                    border: "1px solid grey",
                                    mt: 6,
                                    p: 1,
                                }}
                            >
                                <Player
                                    src={"/video/PortalFS_1.mp4"}
                                    poster={"/video/PortalFS_1.jpg"}
                                />
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: "center",
                                    fontWeight: 500,
                                    mt: 2,
                                }}
                            >
                                Работа складного портала ФС
                            </Typography>
                            <Box
                                sx={{
                                    width: "100%",
                                    border: "1px solid grey",
                                    mt: 6,
                                    p: 1,
                                }}
                            >
                                <Player
                                    src={"/video/PortalPSK_1.mp4"}
                                    poster={"/video/PortalPSK_1.jpg"}
                                />
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: "center",
                                    fontWeight: 500,
                                    mt: 2,
                                }}
                            >
                                Работа сдвижного портала ПСК
                            </Typography>
                            <Box
                                sx={{
                                    width: "100%",
                                    border: "1px solid grey",
                                    mt: 6,
                                    p: 1,
                                }}
                            >
                                <Player
                                    src={"/video/psk160.mp4"}
                                    poster={"/video/psk160.jpg"}
                                />
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: "center",
                                    fontWeight: 500,
                                    mt: 2,
                                }}
                            >
                                Демонстрация работы сдвижного портала ПСК
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid
                        container
                        size={6}
                        direction={"row"}
                        sx={{ alignContent: "flex-start" }}
                    >
                        <Grid size={12}>
                            <Typography sx={{ mt: 0 }}>
                                <strong>Раздвижные пластиковые двери</strong> —
                                прекрасное решение для частных домов, коттеджей
                                и квартир с широким выходом на балкон. Такие
                                конструкции позволяют отлично сохранять тепло в
                                помещении, они полностью герметичны в закрытом
                                положении, а также являются надежным
                                препятствием на пути уличного шума.
                            </Typography>
                            <Typography>
                                Сейчас порталы пвх приобретают всё большую
                                популярность. Только раздвижные окна позволяют
                                собрать теплые раздвижные створки шириной до 1,6
                                м и высотой до 2,7м каждая, причем для того,
                                чтобы их открыть вполне хватит силы женщины или
                                ребенка.
                            </Typography>
                        </Grid>

                        <Grid
                            container
                            size={12}
                            columnSpacing={4}
                            rowSpacing={4}
                        >
                            <Grid size={12}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        textAlign: "center",
                                        fontWeight: 500,
                                        mt: 2,
                                    }}
                                >
                                    Наиболее популярные типы порталов
                                </Typography>
                            </Grid>
                            <Grid size={6}>
                                <Paper
                                    elevation={8}
                                    sx={{ p: 2, height: "100%" }}
                                >
                                    <Stack direction={"column"}>
                                        <Typography
                                            sx={{
                                                mt: 2,
                                                fontSize: "medium",
                                                textAlign: "center",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Раздвижной портал
                                            <br />
                                            PSK или PS
                                        </Typography>
                                        <Typography
                                            sx={{
                                                typography: "caption",
                                                mt: 0,
                                                mb: 1,
                                                p: 0,
                                                textAlign: "center",
                                            }}
                                        >
                                            Подходит для жилого помещения
                                        </Typography>
                                        <Image
                                            src={portal_1}
                                            width={0}
                                            height={0}
                                            alt={"Портал сдвижной ПСК или ПС"}
                                            quality={95}
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: "medium",
                                                textAlign: "center",
                                            }}
                                        >
                                            <strong>
                                                <u>Максимальные размеры:</u>
                                            </strong>
                                            <br />
                                            Ширина 6400мм
                                            <br />
                                            Высота 2700мм
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "medium",
                                                textAlign: "center",
                                            }}
                                        >
                                            <strong>
                                                <u>Площадь открытия створок:</u>
                                            </strong>
                                            <br />
                                            50% от всего остекленного
                                            пространства
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "medium",
                                                textAlign: "center",
                                            }}
                                        >
                                            <strong>
                                                <u>Опции:</u>
                                            </strong>
                                            <br />
                                            Двусторонняя ручка
                                            <br />
                                            Замок с личинкой под ключ
                                            <br />
                                            Ламинация профиля под дерево
                                            <br />
                                            Окраска профиля в любой цвет
                                            <br />
                                        </Typography>
                                    </Stack>
                                </Paper>
                            </Grid>
                            <Grid size={6}>
                                <Paper
                                    elevation={8}
                                    sx={{ p: 2, height: "100%" }}
                                >
                                    <Stack direction={"column"}>
                                        <Typography
                                            sx={{
                                                mt: 2,
                                                fontSize: "medium",
                                                textAlign: "center",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Складной портал FS
                                            <br />
                                            &quot;гармошка&quot;
                                        </Typography>
                                        <Typography
                                            sx={{
                                                typography: "caption",
                                                mt: 0,
                                                mb: 1,
                                                p: 0,
                                                textAlign: "center",
                                            }}
                                        >
                                            Не подходит для жилого помещения
                                        </Typography>
                                        <Image
                                            src={portal_2}
                                            width={0}
                                            height={0}
                                            alt={"Портал гармошка"}
                                            quality={95}
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                            }}
                                        />{" "}
                                        <Typography
                                            sx={{
                                                fontSize: "medium",
                                                textAlign: "center",
                                            }}
                                        >
                                            <strong>
                                                <u>Максимальные размеры:</u>
                                            </strong>
                                            <br />
                                            Ширина 6300мм
                                            <br />
                                            Высота 2360мм
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "medium",
                                                textAlign: "center",
                                            }}
                                        >
                                            <strong>
                                                <u>Площадь открытия створок:</u>
                                            </strong>
                                            <br />
                                            100% от всего остекленного
                                            пространства
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "medium",
                                                textAlign: "center",
                                            }}
                                        >
                                            <strong>
                                                <u>Опции:</u>
                                            </strong>
                                            <br />
                                            Двусторонняя ручка
                                            <br />
                                            Замок с личинкой под ключ
                                            <br />
                                            Ламинация профиля под дерево
                                            <br />
                                            Окраска профиля в любой цвет
                                            <br />
                                        </Typography>
                                    </Stack>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <ArticlesContainer
                mainTitle={""}
                articles={[
                    {
                        anchor: "portal_balc",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Выход на лоджию",
                        articleParagraphsJSX: [
                            <>
                                Если расширить выход на балкон или лоджию, то в
                                этот проём можно установить раздвижную дверь.
                                Такая дверь не будет занимать пространство при
                                открывании, а также зрительно увеличит
                                пространство комнаты.
                            </>,
                            <>
                                Необходимо помнить, что для раздвижных дверей
                                существуют ограничения на ширину и высоту
                                проёма.
                            </>,
                            <>
                                Самый главный параметр &mdash; отношение высоты
                                к ширине створки. Если разделить высоту створки
                                на её ширину, то получившееся значение не должно
                                превышать значения 2.5
                            </>,
                            <>
                                Если это значение будет больше, то створка будет
                                работать нестабильно, возможны перекосы и
                                застревания при её движении.
                            </>,
                            <>
                                То есть, для высоты двери 2200мм общая ширина
                                портальной конструкции должна быть минимум
                                1760мм.
                            </>,
                            // <>
                            //     <Player
                            //         style={{
                            //             alignSelf: "flex-end",
                            //             maxWidth: "100%",
                            //             border: "1px solid grey",
                            //             padding: 1,
                            //         }}
                            //         src={"/video/psk160.mp4"}
                            //         // poster={
                            //         //     profilePage.promoVideo
                            //         //         .promoVideoPictureSrc
                            //         // }
                            //     />
                            // </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: (
                            <>
                                <Stack direction={"column"}>
                                    <Stack direction={"row"} spacing={6}>
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                display: "block",
                                                p: "10px",
                                                border: "solid 1px #333",
                                            }}
                                        >
                                            <Player
                                                src={"/video/PortalPSK_2.mp4"}
                                                // poster={"/video/PortalFS_1.jpg"}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                display: "block",
                                                p: "10px",
                                                border: "solid 1px #333",
                                            }}
                                        >
                                            <Player
                                                src={"/video/PortalPSK_2.mp4"}
                                                // poster={"/video/PortalFS_1.jpg"}
                                            />
                                        </Box>
                                    </Stack>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            textAlign: "center",
                                            fontWeight: 500,
                                            mt: 2,
                                        }}
                                    >
                                        sdfsdfs df sdf sdf sd fs
                                    </Typography>
                                </Stack>
                            </>
                        ),
                    },

                    {
                        anchor: "portal_cottage",
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Портал в коттедж",
                        articleParagraphsJSX: [
                            <>
                                Наиболее часто мы устанавливаем порталы именно в
                                дома с круглогодичным продиванием.
                            </>,
                            <>
                                Такие конструкции позволяют визуально
                                &quot;убрать&quot; границу между внутренним
                                помещением и природой за окном.
                            </>,
                            <>Необходимо по</>,
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
                        anchor: "portal_cottage",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Портал в коттедж",
                        articleParagraphsJSX: [
                            <>
                                Наиболее часто мы устанавливаем порталы именно в
                                дома с круглогодичным продиванием.
                            </>,
                            <>
                                Такие конструкции позволяют визуально
                                &quot;убрать&quot; границу между внутренним
                                помещением и природой за окном.
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
