import React from "react";
import slideImage from "@/public/images/Vekamotion-Max-Exterior-01.png";
import { ImageSide } from "@/app/lib/types";
import ProductionCardsContainer from "../components/ProductionCards/ProductionCardsContainer";
import HeroImageSlider from "@/app/components/HeaderSlider";
import ArticlesContainer from "@/app/components/Article/ArticlesContainer";
import Player from "next-video/player";
import Image from "next/image";
import portal_apartments from "@/public/images/portali/portal5.jpg";
import portal_1 from "@/public/images/portali/portal8.jpg";
import portal_2 from "@/public/images/portali/portal_garmoshka.jpg";
import portal_part_1 from "@/public/images/portal_part_1.png";
import porog_otopl_1 from "@/public/images/porog_otopl_1.png";
import radiator_1 from "@/public/images/portal_radiator_1.png";
import radiator_2 from "@/public/images/portal_radiator_2.jpg";
import radiator_3 from "@/public/images/portal_radiator_3.jpg";
import portal_section_2 from "@/public/images/Portal_section_2.png";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Раздвижные порталы ПВХ",
    description: "Выбор раздвижных дверей-порталов ПВХ",
};

import {
    Box,
    Grid2 as Grid,
    List,
    ListItem,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

export default function Page() {
    return (
        <>
            <HeroImageSlider sliderImage={slideImage} isCardVisible={false} />

            <ProductionCardsContainer
                title={"ТЁПЛЫЕ РАЗДВИЖНЫЕ ДВЕРИ - ПОРТАЛЫ"}
                cardsArray={[
                    {
                        image: porog_otopl_1,
                        caption: (
                            <>
                                Типы
                                <br />
                                порталов
                            </>
                        ),
                        link: "#portal_common",
                    },
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
                        link: "#portal_veranda",
                    },
                    {
                        image: radiator_1,
                        caption: <>Требования к отоплению</>,
                        link: "#portal_heating",
                    },
                    {
                        image: portal_part_1,
                        caption: <>Особенности нашей сборки</>,
                        link: "#portal_assembly",
                    },
                ]}
            />

            <ArticlesContainer
                mainTitle={""}
                articles={[
                    {
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Раздвижные двери ПВХ",
                        articleParagraphsJSX: [
                            <>
                                <strong>Раздвижные пластиковые двери</strong> —
                                прекрасное решение для частных домов, коттеджей
                                и квартир с широким выходом на балкон.
                            </>,
                            <>
                                Такие конструкции позволяют отлично сохранять
                                тепло в помещении, они полностью герметичны в
                                закрытом положении, а также являются надежным
                                препятствием на пути уличного шума.
                            </>,
                            <>
                                Сейчас порталы пвх приобретают всё большую
                                популярность. Только раздвижные окна позволяют
                                собрать тёплые раздвижные створки шириной до 1,6
                                м и высотой до 2,7м каждая, причем для того,
                                чтобы их открыть вполне хватит силы женщины или
                                ребенка.
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: (
                            <Stack direction={"column"}>
                                <Box
                                    component={"span"}
                                    sx={{
                                        width: "100%",
                                        border: "1px solid grey",
                                        mt: 0,
                                        p: 1,
                                    }}
                                >
                                    <Player
                                        src={"/video/G-U_portals_1.mp4"}
                                        poster={"/video/G-U_portals_1.jpg"}
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
                                    Типы раздвижных дверей G-U. Принципы их
                                    работы.
                                </Typography>
                                <Box
                                    sx={{
                                        width: "100%",
                                        border: "1px solid grey",
                                        mt: 8,
                                        p: 1,
                                    }}
                                >
                                    <Player
                                        src={"/video/G-U_portals_2.mp4"}
                                        poster={"/video/G-U_portals_2.jpg"}
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
                                    Складные двери G-U &quot;гармошка&quot;.
                                    Принцип их работы.
                                </Typography>
                            </Stack>
                        ),
                    },

                    {
                        anchor: "portal_common",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Общее описание порталов",
                        articleParagraphsJSX: [
                            <>
                                <strong>Раздвижные пластиковые двери</strong> —
                                прекрасное решение для частных домов, коттеджей
                                и квартир с широким выходом на балкон.
                            </>,
                            <>
                                Такие конструкции позволяют отлично сохранять
                                тепло в помещении, они полностью герметичны в
                                закрытом положении, а также являются надежным
                                препятствием на пути уличного шума.
                            </>,
                            <>
                                Сейчас порталы пвх приобретают всё большую
                                популярность. Только раздвижные окна позволяют
                                собрать теплые раздвижные створки шириной до
                                1,6м и высотой до 2,7м каждая, причем для того,
                                чтобы их открыть вполне хватит силы женщины или
                                ребенка.
                            </>,
                            <>
                                <strong>
                                    В настоящее время мы устанавливаем порталы с
                                    фурнитурой G-U oZ и ROTO Patio.
                                </strong>{" "}
                                Наибольшей популярностью у нас пользуется
                                фурнитура G-U oZ. За годы работы мы не нашли
                                разницы ни в качестве, ни в функциональности
                                между немецкими порталами G-U oZ, ROTO Patio и
                                Siegenia PSK. При этом G-U на сегодняшний день
                                немного дешевле по себестоимости.
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: (
                            <Stack direction={"column"}>
                                <Grid
                                    container
                                    size={12}
                                    columnSpacing={4}
                                    rowSpacing={4}
                                >
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
                                                    Подходит для жилого
                                                    помещения
                                                </Typography>
                                                <Image
                                                    src={portal_1}
                                                    width={0}
                                                    height={0}
                                                    alt={
                                                        "Портал сдвижной ПСК или ПС"
                                                    }
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
                                                        <u>
                                                            Максимальные
                                                            размеры:
                                                        </u>
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
                                                        <u>
                                                            Площадь открытия
                                                            створок:
                                                        </u>
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
                                                    Не подходит для жилого
                                                    помещения
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
                                                        <u>
                                                            Максимальные
                                                            размеры:
                                                        </u>
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
                                                        <u>
                                                            Площадь открытия
                                                            створок:
                                                        </u>
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
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "center",
                                        fontWeight: 500,
                                        mt: 4,
                                    }}
                                >
                                    Наиболее популярные типы порталов
                                </Typography>
                            </Stack>
                        ),
                    },

                    {
                        anchor: "portal_balc",
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Портал - выход на лоджию",
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
                        ],
                        articlesAccordion: [],
                        articleMedia: (
                            <Stack direction={"column"}>
                                <Stack direction={"row"} spacing={4}>
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
                                            src={"/video/PortalPSK_3.mp4"}
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
                                    Сдвижные двери типа ПСК как выход на лоджию.
                                </Typography>
                            </Stack>
                        ),
                    },

                    {
                        anchor: "portal_cottage",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Портал в коттедж - плюсы",
                        articleParagraphsJSX: [
                            <>
                                Наиболее часто мы устанавливаем порталы в дома
                                для круглогодичного проживания.
                            </>,
                            <>
                                &quot;Стеклянные стены&quot; позволяют визуально
                                убрать границу между внутренним помещением и
                                природой за окном.
                            </>,
                            <>
                                Летом портал можно открыть полностью, а зимой
                                &mdash; держать его закрытым, при этом получая
                                хорошо освещённое помещение с превосходным
                                видом.
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: (
                            <Stack direction={"column"}>
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
                                        src={"/video/Portal_cottage_1.mp4"}
                                        poster={"/video/Portal_cottage_1.jpg"}
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
                                    Штульповый портал типа ПСК в коттедж.
                                    <br />
                                    Две створки освобождают широкий проём без
                                    вертикальной стойки.
                                </Typography>
                            </Stack>
                        ),
                    },

                    {
                        anchor: "portal_cottage",
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Портал в коттедж - ограничения",
                        articleParagraphsJSX: [
                            <>
                                Необходимо помнить, что порталы с двусторонней
                                ручкой и ключём не могут заменить собой обычные
                                входные двери. Они просто не предназначены для
                                очень частого открывания в течение дня.
                            </>,
                            <>
                                Кроме того, большая площадь стекла требует
                                повышенного внимания к отоплению. Этому вопросу
                                мы посвятили целый раздел ниже. Если кратко:
                                тёплого пола может быть не достаточно, нужны
                                именно радиаторы рядом со стеклом!
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: (
                            <Stack direction={"column"}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        display: "block",
                                        p: "10px",
                                        border: "solid 1px #333",
                                    }}
                                >
                                    <video
                                        poster={"/video/Portal_4.jpg"}
                                        muted
                                        controls
                                        loop
                                        disablePictureInPicture
                                        controlsList={"nodownload"}
                                        width="100%"
                                    >
                                        <source
                                            src="/video/Portal_4.mp4"
                                            type="video/mp4"
                                        />
                                        Ваш браузер не поддерживает видео.
                                    </video>
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "center",
                                        fontWeight: 500,
                                        mt: 2,
                                    }}
                                >
                                    Штульповый портал типа ПСК в коттедж.
                                    <br />
                                    Две створки освобождают широкий проём без
                                    вертикальной стойки.
                                </Typography>
                            </Stack>
                        ),
                    },

                    {
                        anchor: "portal_veranda",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "Складной портал для веранд и беседок",
                        articleParagraphsJSX: [
                            <>
                                Портал, установленный в беседке превращает её в
                                тёплое помещение зимой, а летом позволяет
                                держать всё пространство открытым.
                            </>,
                            <>
                                <strong>
                                    Для особо длинных проёмов (до 4,5 метров)
                                    отлично подходят складные порталы типа ФС.
                                </strong>
                            </>,
                            <>
                                Из-за особенностей их конструкции, такие порталы
                                нельзя использовать в жилом помещении, но для
                                тёплых веранд и беседок они подходят отлично.
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: (
                            <Stack direction={"column"}>
                                <Stack direction={"row"} spacing={4}>
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
                                            src={"/video/fs_portal_10.webm"}
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
                                            src={"/video/fs_portal_11.webm"}
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
                                    Сдвижные двери типа ПСК как выход на лоджию.
                                </Typography>
                            </Stack>
                        ),
                    },

                    {
                        anchor: "portal_heating",
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Требования к отоплению",
                        articleParagraphsJSX: [
                            <>
                                <strong>
                                    Согласно СП 60.13330 пункт 6.4.6:
                                </strong>{" "}
                                &quot;Отопительные приборы в жилых зданиях
                                требуется размещать под световыми проёмами или в
                                непосредственной близости от них...&quot;
                            </>,
                            <>
                                Если на стекло со стороны помещения не будет
                                поступать достаточно тепла, то дело закончится
                                конденсатом и плесенью.
                            </>,
                            <>
                                <strong>
                                    Любое окно нуждается в хорошем отоплении, и
                                    большие окна &mdash; особенно!
                                </strong>
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: {
                            imageSrc: radiator_2,
                            imageCaption: (
                                <>
                                    Внутрипольный конвектор для отопления
                                    портальных дверей
                                </>
                            ),
                            border: true,
                        },
                    },

                    {
                        anchor: "portal_cottage",
                        imageSide: ImageSide.RIGHT,
                        articleTitle: "",
                        articleParagraphsJSX: [
                            <>
                                <TableContainer
                                    component={Paper}
                                    elevation={0}
                                    sx={{ mt: 0 }}
                                >
                                    <Table sx={{ tableLayout: "auto" }}>
                                        <TableHead sx={{ bgcolor: "#333" }}>
                                            <TableRow>
                                                <TableCell colSpan={2}>
                                                    <Typography
                                                        sx={{
                                                            m: 1,
                                                            p: 0,
                                                            color: "white",
                                                            fontWeight: 300,
                                                            textTransform:
                                                                "uppercase",
                                                            letterSpacing:
                                                                "3px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        Способы обустройства
                                                        отопления
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    sx={{
                                                        verticalAlign: "top",
                                                    }}
                                                >
                                                    <ThumbUpIcon
                                                        sx={{
                                                            color: "green",
                                                        }}
                                                    />
                                                    <br />
                                                    <strong>
                                                        Рекомен&shy;дуется
                                                    </strong>
                                                </TableCell>
                                                <TableCell>
                                                    <strong>
                                                        Встроенные в пол
                                                        конвекторы
                                                    </strong>
                                                    <br />
                                                    Они не мешают проходу, но
                                                    относительно дороги в
                                                    установке
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    sx={{
                                                        verticalAlign: "top",
                                                    }}
                                                >
                                                    <ThumbUpIcon
                                                        sx={{
                                                            color: "yellowgreen",
                                                        }}
                                                    />
                                                    <br />
                                                    <strong>Допустимо</strong>
                                                </TableCell>
                                                <TableCell>
                                                    <strong>
                                                        Низкие напольные
                                                        радиаторы
                                                    </strong>
                                                    <br />
                                                    Можно можно установить под
                                                    глухую часть портала.
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    sx={{
                                                        verticalAlign: "top",
                                                    }}
                                                >
                                                    <ThumbUpIcon
                                                        sx={{
                                                            color: "yellowgreen",
                                                        }}
                                                    />
                                                    <br />
                                                    <strong>Допустимо</strong>
                                                </TableCell>
                                                <TableCell>
                                                    <strong>
                                                        Вертикальные настенные
                                                        радиаторы
                                                    </strong>
                                                    <br />
                                                    Такие радиаторы не мешают
                                                    проходу, но прогревают
                                                    портал только по бокам. Зато
                                                    их можно установить на стене
                                                    рядом с открывающейся
                                                    створкой.
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    sx={{
                                                        verticalAlign: "top",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            verticalAlign:
                                                                "center",
                                                        }}
                                                    >
                                                        <ThumbDownIcon
                                                            sx={{
                                                                color: "red",
                                                            }}
                                                        />
                                                        <br />
                                                        <strong>
                                                            Не рекомендуется
                                                        </strong>
                                                    </Box>
                                                </TableCell>
                                                <TableCell>
                                                    <strong>Тёплый пол</strong>
                                                    <br />К сожалению, многие
                                                    выбирают именно этот способ
                                                    отопления, но он же является
                                                    самым негодным, т.к. не
                                                    всегда обеспечивает
                                                    достаточного притока тепла к
                                                    стеклу.
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: {
                            imageSrc: radiator_3,
                            imageCaption: (
                                <>
                                    Настенный конвектор удобно располагается со
                                    стороны сдвижной створки
                                </>
                            ),
                            border: true,
                        },
                    },

                    {
                        anchor: "portal_assembly",
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Особенности нашей сборки",
                        articleParagraphsJSX: [
                            <>
                                <List
                                    // dense
                                    sx={{
                                        p: 2,
                                        borderRadius: "10px",
                                        fontSize: "medium",
                                        fontWeight: 300,
                                        bgcolor: "#333",
                                        color: "white",
                                    }}
                                >
                                    <ListItem>
                                        1. Профиль не ниже класса А (ВЕКА
                                        СОФТЛАЙН 70, 82)
                                    </ListItem>
                                    <ListItem>
                                        2. Армирование профиля &mdash; усиленное
                                        (толщиной 1,8 - 2,0мм)
                                    </ListItem>
                                    <ListItem>
                                        3. Фурнитура немецкого или австрийского
                                        производства (G-U, ROTO, Siegenia или
                                        Maco)
                                    </ListItem>
                                    <ListItem>
                                        4. Внешнее и внутреннее стёкла &mdash;
                                        6мм толщиной
                                    </ListItem>
                                    <ListItem>
                                        5. Энергосберегающее покрытие стекла
                                        (обычно два слоя) &mdash; для
                                        компенсации теплопотери через стекло
                                    </ListItem>
                                    <ListItem>
                                        6. Если есть среднее стекло, то &mdash;
                                        не менее 5мм толщиной
                                    </ListItem>
                                    <ListItem>
                                        7. С трёх сторон устанавливаем доборные
                                        профили для удобства выполнения
                                        внутренней отделки в будущем
                                    </ListItem>
                                    <ListItem>
                                        8. Если портал из двух и более контуров
                                        &mdash; статический усилитель между ними
                                    </ListItem>
                                    <ListItem>
                                        9. Все доборные профили обязательно
                                        армируем
                                    </ListItem>
                                </List>
                            </>,
                            <>
                                <strong>
                                    На составляющих портала нельзя экономить!
                                </strong>
                                <br />
                                Тонкий профиль класса Б, слабое армирование,
                                стёкла всего лишь 4мм толщиной &mdash; всё это
                                может привести к созданию ненадёжной
                                конструкции, которую невозможно будет
                                отрегулировать, или к саморазрушению
                                стеклопакета из-за слипания стекол.
                            </>,
                        ],
                        articlesAccordion: [],
                        articleMedia: {
                            imageSrc: portal_section_2,
                            imageCaption: (
                                <>Фрагмент сечения портала ПСК mZ 150-966</>
                            ),
                            // border: true,
                        },
                    },

                    // {
                    //     anchor: "portal_cottage",
                    //     imageSide: ImageSide.RIGHT,
                    //     articleTitle: "Выбор портального порога",
                    //     articleParagraphsJSX: [
                    //         <>
                    //             Для портальных дверей в существует два типа
                    //             порога:
                    //             <br />
                    //             &emsp;- Высокий &quot;порог - рама&quot; (~70мм)
                    //             <br />
                    //             &emsp;- Низкий алюминиевый порожек (~20мм)
                    //         </>,
                    //         <>
                    //             <strong>Высокий порог (рекомендуется!)</strong>
                    //             <br />
                    //             Представляет из себя тот же самый рамный
                    //             профиль, из которого состоит остальная часть
                    //             портальной дверной коробки. Обычно это рама
                    //             высотой ~7см и иногда дополнительный расширитель
                    //             3см для удобства подведения чистового пола.
                    //         </>,
                    //         <>
                    //             Высокий порог - это всегда отличная сохранность
                    //             тепла. Такой порог не промерзает и отлично себя
                    //             показывает зимой. Единственный его минус -
                    //             придётся перешагивать 5-7см.
                    //         </>,
                    //         <>
                    //             <strong>
                    //                 Низкий алюминиевый порожек (без гарантии)
                    //             </strong>
                    //             <br />
                    //             Состоит из алюминиевого порога высотой 2см и
                    //             пластиковой вставки-терморазрыва посередине.
                    //         </>,
                    //         <>
                    //             Такой порог призван обеспечить максимальный
                    //             комфорт при передвижении - ведь его не нужно
                    //             перешагивать.
                    //         </>,
                    //         <>
                    //             Однако, в климате средней полосы России такие
                    //             пороги никогда не будут тёплыми! Промерзание
                    //             зимой практически гарантировано.{" "}
                    //             <strong>
                    //                 Такие пороги мы устанавливаем исключительно
                    //                 с отказом от гарантии на портальную
                    //                 конструкцию, под собственную отвественность
                    //                 клиента!
                    //             </strong>
                    //         </>,
                    //     ],
                    //     articlesAccordion: [],
                    //     articleMedia: {
                    //         imageSrc: portal_porog_compare_1,
                    //         imageCaption: (
                    //             <>
                    //                 Низкий порог &mdash; только для холодных
                    //                 помещений!
                    //             </>
                    //         ),
                    //         // border: true,
                    //     },
                    // },
                ]}
            />
        </>
    );
}
