import React, { type JSX } from "react";
import {
    Container,
    Box,
    Typography,
    Grid,
    Divider,
    Stack,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import Image, { StaticImageData } from "next/image";
import main_bg from "@/public/images/main-bg.webp";
import kaleva_70 from "@/public/images/profiles/kaleva_70_3.jpg";
import veka_70 from "@/public/images/profiles/veka_70_2.jpg";
import veka_82 from "@/public/images/profiles/veka_82_1.jpg";
import isoterma1 from "@/public/images/slides/profile_compare_house_1.jpg";
import veka_compare_1 from "@/public/images/profiles/veka_compare_2_800px.jpg";
import slideImage from "@/public/images/balkoni/BalcFront1.jpg";
import steklopaket from "@/public/images/slides/steklopaket_1.jpg";
import lamination_1 from "@/public/images/slides/lamination_1.jpg";
import glued from "@/public/images/slides/glued.jpg";
import cold_ostekl from "@/public/images/balkoni/cold_ostekl_tmblr.jpg";
import tepl_ostekl from "@/public/images/balkoni/tepl_ostek_tmblr.jpg";
import otdelka from "@/public/images/balkoni/otdelka_tmblr.jpg";
import vynos_tmblr from "@/public/images/balkoni/vynos_tmblr.jpg";
import roof_tmblr from "@/public/images/balkoni/krisha_tmblr.jpg";
import shkaf_tmblr from "@/public/images/balkoni/shkaf_tmblr.jpg";
import burglar_1 from "@/public/images/slides/burglar_1.jpg";
import SecuritySharpIcon from "@mui/icons-material/SecuritySharp";
import { IProductionCard } from "../../lib/types";
import ProductionCardsContainer from "../../components/ProductionCardsContainer";

import polnoves_provedal from "@/public/images/balkoni/Polnoves_provedal.jpg";
import oblegch_provedal from "@/public/images/balkoni/Oblegch_provedal.jpg";
import HeroImageSlider from "@/app/components/HeroImageSlider";

const cardsArray: IProductionCard[] = [
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
    // {
    //     image: shkaf_tmblr,
    //     caption: "Шкафы-купе",
    //     link: "6 000",
    // },
    // {
    //     image: roof_tmblr,
    //     caption: "Установка крыши",
    //     link: "6 000",
    // },
    // {
    //     image: vynos_tmblr,
    //     caption: "Вынос рамы вперёд",
    //     link: "6 000",
    // },
];

export default function Page() {
    return (
        <>
            <HeroImageSlider sliderImage={slideImage} />

            <ProductionCardsContainer title={""} cardsArray={cardsArray} />

            <Box>
                <Container maxWidth={"lg"}>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        paddingY={6}
                    >
                        <Grid
                            container
                            spacing={{ xs: 0, md: 6 }}
                            rowGap={{ xs: 0, sm: 0 }}
                            justifyContent={"space-around"}
                        >
                            <Grid item xs={12} marginY={0}>
                                <Typography variant="h1">
                                    Остекление балконов в Туле
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                alignSelf={"center"}
                                order={{ xs: 2, md: 1 }}
                            >
                                {articlePart(
                                    "Особенность наших холодных раздвижных балконных рам",
                                    [
                                        <Typography key={Math.random()}>
                                            <strong>
                                                Кратко: на надёжности нельзя
                                                экономить.
                                            </strong>
                                        </Typography>,
                                        <Typography key={Math.random()}>
                                            Алюминиевые рамы не подпадают под
                                            действие ни одного ГОСТа. Из-за
                                            этого рынок наводнён
                                            низкокачественной продукцией.
                                        </Typography>,
                                        <Typography key={Math.random()}>
                                            Главное отличие качественной рамы
                                            &ndash; толщина стенок алюминиевого
                                            профиля.
                                        </Typography>,
                                        <Typography key={Math.random()}>
                                            Настоящий алюминиевый профиль имеет
                                            толщину стенки &ndash; не менее 1мм,
                                            в нём также присутствуют все рёбра
                                            жесткости, предусмотренные авторами
                                            системы.
                                        </Typography>,
                                        <Typography key={Math.random()}>
                                            Цель использования тонкого профиля
                                            одна &ndash; сэкономить деньги на
                                            стоимости рамы, то есть предложить
                                            потребителю более низкую цену.
                                        </Typography>,
                                        <Typography key={Math.random()}>
                                            Последствия установки таких
                                            &quot;хлипких&quot; рам хорошо
                                            известны - лёгкие створки выпадают
                                            от сильного ветра, рамы гнутся от
                                            малейшей нагрузки.
                                        </Typography>,
                                        <Typography key={Math.random()}>
                                            <strong>
                                                Мы производим наши алюминиевые
                                                рамы на мощностях АО СОФОС
                                                только из полновесного профиля.
                                            </strong>
                                        </Typography>,

                                        <Accordion
                                            elevation={0}
                                            key={Math.round(
                                                Math.random() * 10000
                                            )}
                                        >
                                            <AccordionSummary
                                                sx={{ pl: 0 }}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                <Typography
                                                    fontSize={"1rem"}
                                                    variant="button"
                                                    color="error"
                                                >
                                                    <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                    ПОДРОБНЕЕ
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Box
                                                    bgcolor={"lightyellow"}
                                                    padding={2}
                                                >
                                                    <Typography
                                                        variant="h6"
                                                        marginTop={2}
                                                        gutterBottom
                                                    >
                                                        Откуда вообще берётся
                                                        тонкий профиль?
                                                    </Typography>
                                                    <Typography
                                                        variant="subtitle1"
                                                        gutterBottom
                                                    >
                                                        Заводы выпускают
                                                        облегчённый профиль для
                                                        изготовления маленьких
                                                        рам. Например, он хорошо
                                                        подходит для
                                                        изготовления
                                                        шкафов-купе, окон
                                                        раздачи в учреждениях
                                                        питания и т.д.
                                                    </Typography>
                                                    <Typography
                                                        variant="subtitle1"
                                                        gutterBottom
                                                    >
                                                        Однако, пользуясь тем,
                                                        что потребитель не
                                                        различает полновесный
                                                        профиль от
                                                        низкосортного,
                                                        недобросовестные
                                                        монтажнные организации
                                                        применяют его буквально
                                                        везде.
                                                    </Typography>
                                                    <Typography
                                                        variant="subtitle1"
                                                        gutterBottom
                                                    >
                                                        В итоге потребитель
                                                        платит немного меньше
                                                        при заказе такой
                                                        продукции, но через
                                                        некоторое время
                                                        сталкивается с
                                                        негативными
                                                        последствиями.
                                                    </Typography>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>,
                                    ]
                                )}
                            </Grid>

                            <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
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
                                                alt={
                                                    "Полновесный профиль Provedal"
                                                }
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
                                                alt={
                                                    "Облегчённый профиль Provedal"
                                                }
                                            />
                                        </Box>
                                        <Typography
                                            align={"center"}
                                            variant="body2"
                                            fontWeight={500}
                                        >
                                            Облегчённый эконом-профиль
                                            раздвижной рамы.
                                            <br />
                                            Вес - 0,564 кг/пог.м. и менее...
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                // marginY={2}
                                // sx={{ display: { xs: "none", md: "flex" } }}
                                order={{ xs: 3, md: 3 }}
                            >
                                {/* {arrowDivider("right")} */}
                                <Divider />
                            </Grid>

                            <Grid item xs={12} md={6} order={{ xs: 4, md: 4 }}>
                                <Box alignSelf={"center"}>
                                    <Image
                                        src={isoterma1}
                                        sizes={"30vw"}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        alt={"Выбор материала оконного профиля"}
                                    />
                                </Box>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={6}
                                alignContent={"center"}
                                order={{ xs: 5, md: 5 }}
                            >
                                {articlePart("ПВХ, алюминий или дерево?", [
                                    <Typography key={Math.random()}>
                                        <strong>
                                            ПВХ-профиль оптимальный выбор
                                        </strong>
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        Этот материал значительно теплее
                                        алюминиевого профиля с терморазрывом, и
                                        существенно дешевле как алюминиевых, так
                                        и деревянных окон.
                                    </Typography>,

                                    <Accordion
                                        elevation={0}
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <AccordionSummary
                                            sx={{ pl: 0 }}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography
                                                fontSize={"1rem"}
                                                variant="button"
                                                color="error"
                                                gutterBottom
                                            >
                                                <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                ПОДРОБНЕЕ
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box
                                                bgcolor={"lightyellow"}
                                                padding={2}
                                            >
                                                <Typography
                                                    variant={"h6"}
                                                    gutterBottom
                                                >
                                                    Почему не тёплый алюминий и
                                                    не дерево?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    К примеру, самый широкий
                                                    алюминиевый профиль по
                                                    теплосбережению примерно
                                                    соответствует самому узкому
                                                    ПВХ-профилю глубиной 60мм.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Дерево, в свою очередь,
                                                    менее долговечно, чем ПВХ.
                                                    Деревянные окна требуют либо
                                                    установки защитных
                                                    алюминиевых накладок с
                                                    уличной стороны, либо
                                                    обновления окраски каждые
                                                    3-5 лет на всех окнах в
                                                    доме.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Часто можно слышать
                                                    утвержение, что деревянные
                                                    окна &quot;пропускают через
                                                    себя свежий воздух&quot;.
                                                    Это не соответствует
                                                    реальности. Современные
                                                    деревянные
                                                    &quot;евроокна&quot;
                                                    производятся из клееного
                                                    бруса, пропитанного
                                                    специальным
                                                    сильнодействующим химическим
                                                    составом от гниения
                                                    древесины. Такой материал,
                                                    конечно же, ничего
                                                    &quot;через себя&quot; не
                                                    пропускает.
                                                </Typography>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>,
                                ])}
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                // marginY={2}
                                // sx={{ display: { xs: "none", md: "flex" } }}
                                order={{ xs: 6, md: 6 }}
                            >
                                {/* {arrowDivider("left")} */}
                                <Divider />
                            </Grid>

                            <Grid item xs={12} md={6} order={{ xs: 7, md: 6 }}>
                                {articlePart("Глубина профиля", [
                                    <Typography key={Math.random()}>
                                        Профиль выбирается под нужный
                                        стеклопакет.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        Во-первых, стеклопакет должен физически
                                        поместиться в оконный профиль.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        Во-вторых, краевая зона стеклопакета -
                                        самая уязвимая к промерзанию часть окна.
                                        Выбираем такую глубину профиля, чтобы он
                                        был теплее, чем стеклопакет.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        <strong>
                                            По характеристикам нас устроит
                                            профиль 70мм
                                        </strong>{" "}
                                        - стандарт остекления загородных домов в
                                        средней полосе России.
                                    </Typography>,
                                    <Accordion
                                        elevation={0}
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <AccordionSummary
                                            sx={{ pl: 0 }}
                                            aria-controls="panel3-content"
                                            id="panel3-header"
                                        >
                                            <Typography
                                                fontSize={"1rem"}
                                                variant="button"
                                                color="error"
                                                gutterBottom
                                            >
                                                <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                ПОДРОБНЕЕ
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box
                                                bgcolor={"lightyellow"}
                                                padding={2}
                                            >
                                                <Typography
                                                    variant={"h6"}
                                                    gutterBottom
                                                >
                                                    Почему именно 70мм ?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Возьмём данные из ГОСТ
                                                    26602.1-99, ГОСТ 24866-99
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Минимально подходящий
                                                    стеклопакет для остекления
                                                    загородного дома - СПД 36мм
                                                    (4М1-12-4М1-12-И4).
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Его коэффициент
                                                    сопротивления теплопередаче
                                                    - 0,68
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    В свою очередь, коэффициент
                                                    сопротивления теплопередаче
                                                    профиля глубиной 70мм
                                                    (учитывая стальное
                                                    армирование внутри) - 0,79
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Получается, что такое
                                                    сочетание профиля и
                                                    стеклопакета будет работать
                                                    в окне отлично.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    А если взять профиль 60мм?
                                                    Во-первых, наш стеклопакет
                                                    туда попросту не войдёт.
                                                    Макимальная ширина
                                                    стеклопакета для профиля
                                                    60мм составляет 32мм, что
                                                    будет слишком расточительно
                                                    по затратам на отопление для
                                                    коттеджа.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Во-вторых, даже если бы наш
                                                    стеклопакет туда поместился,
                                                    сопротивление теплопередаче
                                                    профиля 60мм всего - 0,64
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Это меньше, чем у
                                                    стеклопакета. Таким образом,
                                                    с узким профилем 60мм
                                                    значительно повышает риск
                                                    промерзания окна в краевой
                                                    зоне стеклопакета. При этом
                                                    такая экономия на глубине
                                                    профиля будет ничтожной и
                                                    составит всего 10% от
                                                    стоимости заказа.
                                                </Typography>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>,
                                ])}
                            </Grid>

                            <Grid item xs={12} md={6} order={{ xs: 6, md: 7 }}>
                                <Box
                                    display={"flex"}
                                    height={"100%"}
                                    flexDirection={"column"}
                                    justifyContent={"center"}
                                >
                                    <Image
                                        src={veka_compare_1}
                                        sizes={"30vw"}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        alt={
                                            "Визуализация теплотехнического расчёта оконного блока"
                                        }
                                    />
                                </Box>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                // marginY={2}
                                // sx={{ display: { xs: "none", md: "flex" } }}
                                order={{ xs: 8, md: 8 }}
                            >
                                {/* {arrowDivider("right")} */}
                                <Divider />
                            </Grid>

                            <Grid item xs={12} md={6} order={{ xs: 10, md: 9 }}>
                                <Box
                                    display={"flex"}
                                    height={"100%"}
                                    flexDirection={"column"}
                                    justifyContent={"center"}
                                >
                                    <Image
                                        src={glued}
                                        sizes={"30vw"}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        alt={
                                            "Описание технологии вклейки стеклопакета"
                                        }
                                    />
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={6} order={{ xs: 9, md: 10 }}>
                                {articlePart("Особенности входных дверей ПВХ", [
                                    <Typography key={Math.random()}>
                                        Мы используем вклейку стеклопакета для
                                        всех входных дверей без исключения.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        Цветной профиль двери нагревается летом
                                        до 80 градусов и его геометрия
                                        &quot;плывёт&quot; на несколько
                                        миллиметров независимо от мощности
                                        внутренней армировки. Как правило, замок
                                        сразу начинает заедать.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        Такой ежегодный негативный эффект
                                        полностью устраняется только технологией
                                        вклейки стеклопакета в створку. Вы
                                        получаете действительно надёжную и
                                        тёплую дверь.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        То же самое касается очень больших
                                        оконных створок. В них мы также
                                        применяем вклейку стеклопакета.
                                    </Typography>,
                                    <Accordion
                                        elevation={0}
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <AccordionSummary
                                            sx={{ pl: 0 }}
                                            aria-controls="panel4-content"
                                            id="panel4-header"
                                        >
                                            <Typography
                                                fontSize={"1rem"}
                                                variant="button"
                                                color="error"
                                                gutterBottom
                                            >
                                                <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                ПОДРОБНЕЕ
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box
                                                bgcolor={"lightyellow"}
                                                padding={2}
                                            >
                                                <Typography
                                                    variant={"h6"}
                                                    gutterBottom
                                                >
                                                    Можно ли не использовать
                                                    вклейку для входных дверей?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Да, можно. Однако, у нас
                                                    есть многолетний опыт,
                                                    который показывает что без
                                                    вклейки мы выезжаем на
                                                    регулировку по гарантии уже
                                                    через 1 год эксплуатации
                                                    двери.
                                                </Typography>
                                                <Typography
                                                    variant={"h6"}
                                                    gutterBottom
                                                >
                                                    Что делать, если стеклопакет
                                                    разобьётся? Можно ли его
                                                    будет заменить?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Да, вклееный стеклопает
                                                    допускает его замену. Для
                                                    этого старый стеклопакет
                                                    вырезается из створки.
                                                    Остатки старого клея
                                                    вычищаются. Наносится новый
                                                    клей из специального
                                                    ремонтного набора и
                                                    устанавливается новый
                                                    стеклопакет.
                                                </Typography>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>,
                                ])}
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                // marginY={2}
                                // sx={{ display: { xs: "none", md: "flex" } }}
                                order={{ xs: 11, md: 11 }}
                            >
                                {/* {arrowDivider("right")} */}
                                <Divider />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={6}
                                order={{ xs: 13, md: 12 }}
                            >
                                <Box
                                    display={"flex"}
                                    height={"100%"}
                                    flexDirection={"column"}
                                    justifyContent={"center"}
                                >
                                    <Image
                                        src={lamination_1}
                                        sizes={"30vw"}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        alt={"Пример ламинации оконного блока"}
                                    />
                                </Box>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={6}
                                order={{ xs: 12, md: 13 }}
                            >
                                {articlePart("Цвет оконного блока", [
                                    <Typography key={Math.random()}>
                                        Чтобы получить нужный цвет - на оконный
                                        профиль в заводских условиях наносится
                                        специальная ламинационная плёнка.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        При качественном нанесении на профиль
                                        такая плёнка держится очень надёжно, и
                                        условный срок службы окна в 40 лет не
                                        снижается.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        При некачественном нанесении плёнки, на
                                        ней образуются пузыри с воздухом.
                                        Обращайте внимание на гарантийный срок
                                        ваших окон! Он не может быть менее 3
                                        лет, потому что такие дефекты
                                        проявляются зачастую не в первый год
                                        эксплуатации.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        <strong>
                                            Известные на рынке плёнки
                                            производятся фирмами Renolit, LG и
                                            ADO.
                                        </strong>{" "}
                                        Все они достаточно качественные. Важно
                                        не нарушить технологию их нанесения на
                                        профиль.
                                    </Typography>,
                                    <Accordion
                                        elevation={0}
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <AccordionSummary
                                            sx={{ pl: 0 }}
                                            aria-controls="panel4-content"
                                            id="panel4-header"
                                        >
                                            <Typography
                                                fontSize={"1rem"}
                                                variant="button"
                                                color="error"
                                                gutterBottom
                                            >
                                                <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                ПОДРОБНЕЕ
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box
                                                bgcolor={"lightyellow"}
                                                padding={2}
                                            >
                                                <Typography
                                                    variant={"h6"}
                                                    gutterBottom
                                                >
                                                    Есть ли другие варианты
                                                    производства цветных окон ?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Да, существует технология
                                                    окраски оконного профиля
                                                    специальной краской.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Такую краску производит
                                                    всего несколько
                                                    производителей, например
                                                    немецкий Zobel.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Однако, стойкость окрашенной
                                                    поверности значительно ниже,
                                                    чем стойкость ламинационной
                                                    плёнки. Краска очень легко
                                                    царапается.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Несмотря на это, мы активном
                                                    применяем эту технологию для
                                                    окраски торцевой части
                                                    профиля, если это требуется
                                                    техническим заданием.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Окрашивать же лицевые части
                                                    профиля нет смысла, так как
                                                    стоимость такой окраски не
                                                    дешевле нанесения
                                                    ламинационной плёнки, но при
                                                    этом стойкость краски
                                                    значительно ниже.
                                                </Typography>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>,
                                ])}
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                // marginY={2}
                                // sx={{ display: { xs: "none", md: "flex" } }}
                                order={{ xs: 14 }}
                            >
                                {/* {arrowDivider("left")} */}
                                <Divider />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={6}
                                order={{ xs: 15, md: 16 }}
                            >
                                <Box
                                    display={"flex"}
                                    height={"100%"}
                                    flexDirection={"column"}
                                    justifyContent={"center"}
                                >
                                    <Image
                                        src={burglar_1}
                                        sizes={"30vw"}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        alt={"Взлом оконного блока"}
                                    />
                                </Box>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={6}
                                order={{ xs: 16, md: 15 }}
                            >
                                {articlePart("Защита от взлома окон", [
                                    <Typography key={Math.random()}>
                                        Насколько быстро взломщик может вскрыть
                                        окно? По статистике - за 7 секунд. При
                                        этом абсолютно бесшумно.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        Можно ли защитить окна от взлома? Можно,
                                        но подход должен быть разумным.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        Задача любого взломщика - действовать
                                        очень тихо.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        <strong>
                                            Устанавливаем на каждое окно первого
                                            этажа одну противовзломную точку и
                                            защиту от высверливания ручки.
                                        </strong>
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        Стоимость - незначительная, при этом
                                        бесшумный взлом строительным
                                        инструментом будет уже невозможен.
                                    </Typography>,
                                    <Typography key={Math.random()}>
                                        При попытке отжать створку вверх,
                                        защитные ответные планки будут
                                        выворачиваться вместе с оконным профилем
                                        и стальным армированием с очень громким
                                        треском. Большая часть взломщиков просто
                                        скроется с места преступления.
                                    </Typography>,
                                    <Accordion
                                        elevation={0}
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <AccordionSummary
                                            sx={{ pl: 0 }}
                                            aria-controls="panel5-content"
                                            id="panel5-header"
                                        >
                                            <Typography
                                                fontSize={"1rem"}
                                                variant="button"
                                                color="error"
                                                gutterBottom
                                            >
                                                <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                ПОДРОБНЕЕ
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box
                                                bgcolor={"lightyellow"}
                                                padding={2}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    gutterBottom
                                                >
                                                    Нужно ли вкладывать средства
                                                    в более дорогую
                                                    противовзломность ?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    При установке
                                                    противовзломной фурнитуры
                                                    самого высокого класса,
                                                    установке противовзломной
                                                    оконной ручки, установке
                                                    защитной плёнки на стекло
                                                    время взлома составит
                                                    несколько минут. При этом
                                                    стоимость такого окна
                                                    значительно повысится.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Несколько минут на взлом -
                                                    это много или мало?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Если дом и участок
                                                    оборудованы комплексной
                                                    охранной системой, то
                                                    несколько минут хватит,
                                                    чтобы группа быстрого
                                                    реагирования приехала на
                                                    вызов.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    В этом случае вложения в
                                                    дорогую противовзломность
                                                    оправданы.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Если же такой комплексной
                                                    защиты не планируется, то
                                                    достаточно будет защититься
                                                    от <u>бесшумного взлома</u>.
                                                    Это можно назвать
                                                    &quot;максимальной пользой
                                                    при минимальных
                                                    вложениях&quot;.
                                                </Typography>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>,
                                ])}
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Box
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

function articlePart(title: string, descriptionJSX: JSX.Element[]) {
    return (
        <Box>
            <Typography variant="h2">{title}</Typography>
            {descriptionJSX.map((paragraph) => paragraph)}
        </Box>
    );
}
