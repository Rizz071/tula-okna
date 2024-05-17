import React from "react";
import { Container, Box, Typography, Grid, Paper } from "@mui/material";

import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

import Image, { StaticImageData } from "next/image";
import main_bg from "../../public/images/main-bg.webp";
import kaleva_70 from "../../public/images/profiles/kaleva_70_3.jpg";
import veka_70 from "../../public/images/profiles/veka_70_2.jpg";
import veka_82 from "../../public/images/profiles/veka_82_1.jpg";
import isoterma1 from "../../public/images/slides/profile_compare_house_1.jpg";
import veka_compare_1 from "../../public/images/profiles/veka_compare_2_800px.jpg";
import slide from "../../public/images/slides/slide_infra_house_1_1920px.jpg";
import steklopaket from "../../public/images/slides/steklopaket_1.jpg";
import lamination_1 from "../../public/images/slides/lamination_1.jpg";
import burglar_1 from "../../public/images/slides/burglar_1.jpg";

import arrow_1 from "../../public/images/slides/arrow_1.svg";

export default function Page() {
    return (
        <>
            <Box sx={{ position: "relative" }}>
                <Image
                    src={slide}
                    alt="Banner infrared checking"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto", zIndex: "1" }}
                    priority
                />
                <Box
                    sx={{
                        opacity: "80%",
                        position: "absolute",
                        bgcolor: "white",
                        zIndex: "50",
                        padding: { xs: "10px", sm: "20px", md: "30px" },
                        width: {
                            xs: "140px",
                            sm: "240px",
                            md: "300px",
                            lg: "370px",
                            xl: "450px",
                        },
                        height: {
                            xs: "90px",
                            sm: "100px",
                            md: "100px",
                            lg: "170px",
                            xl: "270px",
                        },
                        left: {
                            xs: "30px",
                            sm: "50px",
                            md: "100px",
                            lg: "150px",
                            xl: "200px",
                        },
                        top: {
                            xs: "15px",
                            sm: "40px",
                            md: "50px",
                            lg: "75px",
                        },
                        borderRadius: "5% / 10%",
                    }}
                >
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        height={"100%"}
                        justifyContent={"space-evenly"}
                    >
                        <Typography
                            gutterBottom
                            variant="sliderFont"
                            fontWeight={"light"}
                            align="justify"
                            sx={{
                                fontSize: {
                                    xs: "14px",
                                    sm: "22px",
                                    md: "30px",
                                    lg: "40px",
                                    xl: "50px",
                                },
                            }}
                        >
                            Остекление загородного дома
                        </Typography>
                        <Typography
                            align="left"
                            variant="sliderFont"
                            bgcolor="white"
                            fontWeight={"light"}
                            gutterBottom
                            sx={{
                                fontSize: {
                                    xs: "10px",
                                    sm: "14px",
                                    md: "18px",
                                    lg: "20px",
                                    xl: "22px",
                                },
                            }}
                        >
                            Наш опыт экономии тепла
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Container>
                <Paper
                    elevation={4}
                    square={false}
                    color="white"
                    sx={{
                        position: "relative",
                        zIndex: "100",
                        textAlign: "center",
                        mt: {
                            xs: -2,
                            sm: -2,
                            md: -3,
                            lg: -4,
                            xl: -4,
                        },
                        transform: "translate(-50%, 0%)",
                        left: "50%",
                        maxWidth: "lg",
                    }}
                >
                    {/* <Typography
                        fontWeight={"light"}
                        paddingY={1}
                        sx={{
                            fontSize: {
                                xs: "1rem",
                                sm: "1.2rem",
                                md: "1.5rem",
                                lg: "2rem",
                            },
                        }}
                    >
                        Выбор продукции
                    </Typography>
                    <Divider /> */}
                    <Box padding={6}>
                        {CardTextInfoJSX("5 шагов для выбора окон в дом", [
                            <Box
                                component="p"
                                key={Math.round(Math.random() * 10000)}
                                textAlign="center"
                            >
                                Чтобы выбрать правильные окна нужно знать всего
                                несколько ключевых параметров.
                            </Box>,
                            // <Box
                            //     component="p"
                            //     key={Math.round(Math.random() * 10000)}
                            // >
                            //     Мы устанавливаем окна в частные дома уже много
                            //     лет и готовы поделиться своим опытом.
                            // </Box>,
                            // <Box
                            //     component="p"
                            //     key={Math.round(Math.random() * 10000)}
                            // >
                            //     Надеемся, что вы оцените нашу компетентность и
                            //     запросите у нас коммерческое предложение для
                            //     вашего дома.
                            // </Box>,
                        ])}
                    </Box>
                </Paper>
            </Container>

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
                            <Grid
                                item
                                xs={12}
                                md={6}
                                alignSelf={"center"}
                                order={{ xs: 2, md: 1 }}
                            >
                                {CardTextInfoJSX("Самое важное - стеклопакет", [
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        В первую очередь выбираем не оконный
                                        профиль, а стеклопакет.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Стеклопакет составляет около 90% площади
                                        каждого окна и именно он отвечает за
                                        сохранность тепла.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        40% тепла зимой теряется через
                                        остекление. Чем теплее стеклопакет - тем
                                        меньше придётся платить за отопление.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Оптимальный выбор -{" "}
                                        <strong>
                                            3 стекла с энергосберегающим
                                            напылением, шириной от 36мм до 42мм
                                        </strong>{" "}
                                        (больше - лучше).
                                    </Box>,
                                    <Accordion
                                        elevation={0}
                                        key={Math.round(Math.random() * 10000)}
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
                                                gutterBottom
                                            >
                                                <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                ПОДРОБНЕЕ
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Box>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    <strong>
                                                        <u>
                                                            Почему именно 3
                                                            стекла?
                                                        </u>
                                                    </strong>
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    При 2 стеклах - будет
                                                    слишком холодно. Отопление
                                                    станет слишком затратным.
                                                    Снижается шумоизоляция.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    При 4 стеклах - теряется
                                                    прозрачность, увеличивается
                                                    весовая нагрузка на
                                                    механизм. Возможно
                                                    применение для повышения
                                                    шумоизоляции, но это не
                                                    случай загородного дома.
                                                </Typography>

                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    <strong>
                                                        <u>
                                                            Почему стеклопакет
                                                            должен быть шириной
                                                            36 - 42 мм ?
                                                        </u>
                                                    </strong>
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Чем шире изолирующий слой
                                                    воздуха в стеклопакете, тем
                                                    он теплее. Например,
                                                    стеклопакет стандартный
                                                    двухкамерный стеклопакет
                                                    шириной 32мм имеет
                                                    коэффициент сопротивления
                                                    теплопередаче 0,47. В нём
                                                    воздушные камеры имеют
                                                    ширину 10мм.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    В то же время у стеклопакета
                                                    шириной 40мм воздушные
                                                    камеры составляют 14мм. Его
                                                    коэффициент сопротивления
                                                    теплопередаче - 0,6, и это
                                                    теплее на 22%
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Почему же не увеличивать
                                                    расстояние между стёклами
                                                    бесконечно? Дело в том, что
                                                    при этом увеличивается риск
                                                    &quot;термошока&quot;. Это
                                                    такое явление, при котором
                                                    весной стеклопакет может
                                                    самопроизвольно разрушиться
                                                    из-за неравномерного нагрева
                                                    стекла солнечными лучами.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    <strong>
                                                        <u>
                                                            Что такое
                                                            энергосберегающее
                                                            напыление ?
                                                        </u>
                                                    </strong>
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Это - революционная
                                                    технология в остеклении
                                                    домов. Напыление находится
                                                    внутри стеклопакета, на
                                                    одном из стекол.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Оно эффективно отражает
                                                    тепло обратно внутрь
                                                    помещения, а
                                                    &quot;мультифункциональное&quot;
                                                    напыление ещё и блокирует
                                                    избыточный солнечный жар,
                                                    поступающий летом с улицы.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    При замечательных
                                                    преимуществах, эта
                                                    технология не имеет минусов
                                                    и стоимость её крайне мала.
                                                    Мы применяем такое напыление
                                                    для остекления каждого дома
                                                    уже много лет.
                                                </Typography>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>,
                                ])}
                            </Grid>

                            <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
                                <Box alignSelf={"center"}>
                                    <Image
                                        src={steklopaket}
                                        sizes={"30vw"}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        alt={
                                            "Выбор стеклопакета для остекления коттеджа"
                                        }
                                    />
                                </Box>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                marginY={2}
                                sx={{ display: { xs: "none", md: "flex" } }}
                                order={{ xs: 3, md: 3 }}
                            >
                                {arrowDivider("right")}
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
                                {CardTextInfoJSX("ПВХ, алюминий или дерево?", [
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <strong>
                                            ПВХ-профиль станет оптимальным
                                            выбором
                                        </strong>
                                        .
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Этот материал значительно теплее
                                        алюминиевого профиля с терморазрывом и
                                        существенно дешевле как алюминиевых
                                        окон, так и деревянных.
                                    </Box>,

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
                                            <Box>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    <strong>
                                                        <u>
                                                            Почему не тёплый
                                                            алюминий и не
                                                            дерево?
                                                        </u>
                                                    </strong>
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    К примеру, самый широкий
                                                    алюминиевый профиль по
                                                    теплосбережению примерно
                                                    соответствует самому узкому
                                                    ПВХ-профилю глубиной 60мм.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
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
                                                    fontWeight={"light"}
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
                                marginY={2}
                                sx={{ display: { xs: "none", md: "flex" } }}
                                order={{ xs: 6, md: 6 }}
                            >
                                {arrowDivider("left")}
                            </Grid>

                            <Grid item xs={12} md={6} order={{ xs: 7, md: 6 }}>
                                {CardTextInfoJSX("Глубина профиля", [
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Профиль выбирается под нужный
                                        стеклопакет.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Во-первых, стеклопакет должен физически
                                        поместиться в оконный профиль.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Во-вторых, краевая зона стеклопакета -
                                        самая уязвимая к промерзанию часть окна.
                                        Выбираем такую глубину профиля, чтобы он
                                        был теплее, чем стеклопакет.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <strong>
                                            По характеристикам нас устроит
                                            профиль 70мм
                                        </strong>{" "}
                                        - стандарт остекления загородных домов в
                                        средней полосе России.
                                    </Box>,
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
                                            <Box>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    <strong>
                                                        <u>
                                                            Почему именно 70мм ?
                                                        </u>
                                                    </strong>
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Возьмём данные из ГОСТ
                                                    26602.1-99, ГОСТ 24866-99
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Минимально подходящий
                                                    стеклопакет для остекления
                                                    загородного дома - СПД 36мм
                                                    (4М1-12-4М1-12-И4).
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Его коэффициент
                                                    сопротивления теплопередаче
                                                    - 0,68
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    В свою очередь, коэффициент
                                                    сопротивления теплопередаче
                                                    профиля глубиной 70мм
                                                    (учитывая стальное
                                                    армирование внутри) - 0,79
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Получается, что такое
                                                    сочетание профиля и
                                                    стеклопакета будет работать
                                                    в окне отлично.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
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
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Во-вторых, даже если бы наш
                                                    стеклопакет туда поместился,
                                                    сопротивление теплопередаче
                                                    профиля 60мм всего - 0,64
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
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
                                marginY={2}
                                sx={{ display: { xs: "none", md: "flex" } }}
                                order={{ xs: 8, md: 8 }}
                            >
                                {arrowDivider("right")}
                            </Grid>

                            <Grid item xs={12} md={6} order={{ xs: 10, md: 9 }}>
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

                            <Grid item xs={12} md={6} order={{ xs: 9, md: 10 }}>
                                {CardTextInfoJSX("Цвет оконного блока", [
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Чтобы получить нужный цвет - на оконный
                                        профиль в заводских условиях наносится
                                        специальная ламинационная плёнка.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        При качественном нанесении на профиль
                                        такая плёнка держится очень надёжно, и
                                        условный срок службы окна в 40 лет не
                                        снижается.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        При некачественном нанесении плёнки, на
                                        ней образуются пузыри с воздухом.
                                        Обращайте внимание на гарантийный срок
                                        ваших окон! Он не может быть менее 3
                                        лет, потому что такие дефекты
                                        проявляются зачастую не в первый год
                                        эксплуатации.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <strong>
                                            Известные на рынке плёнки
                                            производятся фирмами Renolit, LG и
                                            ADO.
                                        </strong>{" "}
                                        Все они достаточно качественные. Важно
                                        не нарушить технологию их нанесения на
                                        профиль.
                                    </Box>,
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
                                            <Box>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    <strong>
                                                        <u>
                                                            Есть ли другие
                                                            варианты
                                                            производства цветных
                                                            окон ?
                                                        </u>
                                                    </strong>
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Да, существует технология
                                                    окраски оконного профиля
                                                    специальной краской.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Такую краску производит
                                                    всего несколько
                                                    производителей, например
                                                    немецкий Zobel.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Однако, стойкость окрашенной
                                                    поверности значительно ниже,
                                                    чем стойкость ламинационной
                                                    плёнки. Краска очень легко
                                                    царапается.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Несмотря на это, мы активном
                                                    применяем эту технологию для
                                                    окраски торцевой части
                                                    профиля, если это требуется
                                                    техническим заданием.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
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
                                marginY={2}
                                sx={{ display: { xs: "none", md: "flex" } }}
                                order={{ xs: 11 }}
                            >
                                {arrowDivider("left")}
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={6}
                                order={{ xs: 12, md: 13 }}
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
                                order={{ xs: 13, md: 12 }}
                            >
                                {CardTextInfoJSX("Защита от взлома окон", [
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Насколько быстро взломщик может вскрыть
                                        окно? По статистике - за 7 секунд. При
                                        этом абсолютно бесшумно.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Можно ли защитить окна от взлома? Можно,
                                        но подход должен быть разумным.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Задача любого взломщика - действовать
                                        очень тихо.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <strong>
                                            Устанавливаем на каждое окно первого
                                            этажа одну противовзломную точку и
                                            защиту от высверливания ручки.
                                        </strong>
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Стоимость - незначительная, при этом
                                        бесшумный взлом строительным
                                        инструментом будет уже невозможен.
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        При попытке отжать створку вверх,
                                        защитные ответные планки будут
                                        выворачиваться вместе с оконным профилем
                                        и стальным армированием с очень громким
                                        треском. Большая часть взломщиков просто
                                        скроется с места преступления.
                                    </Box>,
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
                                            <Box>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    <strong>
                                                        <u>
                                                            Нужно ли вкладывать
                                                            в дорогую
                                                            противовзломность ?
                                                        </u>
                                                    </strong>
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
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
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Несколько минут на взлом -
                                                    это много или мало?
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
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
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    В этом случае вложения в
                                                    дорогую противовзломность
                                                    оправданы.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
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

function CardTextInfo(title: string, descriptionText: string[]) {
    return (
        <Card elevation={0}>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    fontWeight={300}
                    marginBottom={4}
                >
                    {title}
                </Typography>

                {descriptionText.map((paragraph) => {
                    return (
                        <Typography
                            key={Math.round(Math.random() * 10000)}
                            variant="h6"
                            textAlign={"justify"}
                            fontWeight={"light"}
                            gutterBottom
                        >
                            {paragraph}
                        </Typography>
                    );
                })}
            </CardContent>
        </Card>
    );
}

function CardTextInfoJSX(title: string, descriptionJSX: JSX.Element[]) {
    return (
        <Card elevation={0}>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    fontWeight={300}
                    marginBottom={4}
                >
                    {title}
                </Typography>

                {descriptionJSX.map((paragraph) => {
                    return (
                        <Typography
                            key={Math.round(Math.random() * 10000)}
                            variant="h6"
                            textAlign={"justify"}
                            fontWeight={"light"}
                            gutterBottom
                        >
                            {paragraph}
                        </Typography>
                    );
                })}
            </CardContent>
        </Card>
    );
}

function arrowDivider(direction: string) {
    return (
        <Box
            zIndex={-1}
            display="flex"
            justifyContent={"center"}
            sx={{
                transform: `rotate(${
                    direction === "right" ? "15deg" : "-15deg"
                }) scaleX(${direction === "right" ? "-1" : "1"})`,
                opacity: "75%",
            }}
        >
            <Image
                src={arrow_1}
                alt="arrow"
                sizes="60vw"
                style={{
                    width: "45%",
                    height: "auto",
                }}
            />
        </Box>
    );
}
