import React, { type JSX } from "react";
import {
    Container,
    Box,
    Typography,
    Grid,
    Paper,
    Divider,
    List,
    ListItem,
    Link as MuiLink,
} from "@mui/material";

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
import portal_vector_1 from "@/public/images/slides/portal_vector_1.svg";
import Image, { StaticImageData } from "next/image";
import main_bg from "@/public/images/main-bg.webp";
import kaleva_70 from "@/public/images/profiles/kaleva_70_3.jpg";
import veka_70 from "@/public/images/profiles/veka_70_2.jpg";
import veka_82 from "@/public/images/profiles/veka_82_1.jpg";
import isoterma1 from "@/public/images/slides/profile_compare_house_1.jpg";
import veka_compare_1 from "@/public/images/profiles/veka_compare_2_800px.jpg";
import slide from "@/public/images/slides/house_slide_2.jpg";
import steklopaket from "@/public/images/slides/steklopaket_1.jpg";
import lamination_1 from "@/public/images/slides/lamination_1.jpg";
import glued from "@/public/images/slides/glued.jpg";
import windows_1 from "@/public/images/slides/windows_1.jpg";
import burglar_1 from "@/public/images/slides/burglar_1.jpg";
import SecuritySharpIcon from "@mui/icons-material/SecuritySharp";

export default function Page() {
    return (
        <>
            <Box
                display={"flex"}
                width="100%"
                maxHeight="610px"
                minHeight={{ xs: "250px", sm: "410px", md: "610px" }}
                justifyContent={"center"}
                sx={{ position: "relative" }}
            >
                <Image
                    src={slide}
                    alt="Windows for houses slider"
                    sizes="100vw"
                    style={{ zIndex: "1", objectFit: "cover" }}
                    priority
                    quality={100}
                    fill
                    // unoptimized={true}
                />
                <Box
                    display={{ xs: "none", sm: "flex" }}
                    position="relative"
                    marginBottom={"auto"}
                    left={{ sm: "1%", md: "-12%" }}
                    top={{ sm: "-40px" }}
                    sx={{ zIndex: "50", transform: `translate(-50%, 50%)` }}
                >
                    <Card sx={{ minWidth: 275, maxWidth: 300 }}>
                        <CardContent>
                            <Box
                                display={"flex"}
                                columnGap={1}
                                alignItems={"flex-start"}
                                paddingLeft={0}
                            >
                                <SecuritySharpIcon
                                    fontSize="large"
                                    sx={{ color: "DodgerBlue" }}
                                />
                                <Typography
                                    alignSelf={"flex-end"}
                                    variant="sliderFont"
                                    fontSize={{ xs: "1.2rem", lg: "1.5rem" }}
                                    component="div"
                                    fontWeight={"700"}
                                    color={"DodgerBlue"}
                                >
                                    Настоящая гарантия
                                </Typography>
                            </Box>
                            <List>
                                <ListItem>
                                    <Box
                                        display={"flex"}
                                        columnGap={1}
                                        alignItems={"flex-start"}
                                    >
                                        <Typography
                                            fontWeight={500}
                                            marginTop={0}
                                            lineHeight={"1.5rem"}
                                            fontSize={{
                                                sm: "0.8rem",
                                                md: "0.9rem",
                                                lg: "1rem",
                                            }}
                                        >
                                            Непрерывно выполняем гарантийные
                                            обязательства более{" "}
                                            {new Date().getFullYear() - 1998}{" "}
                                            лет
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box
                                        display={"flex"}
                                        columnGap={1}
                                        alignItems={"flex-start"}
                                    >
                                        <Typography
                                            marginTop={0}
                                            fontWeight={500}
                                            lineHeight={"1.5rem"}
                                            fontSize={{
                                                sm: "0.8rem",
                                                md: "0.9rem",
                                                lg: "1rem",
                                            }}
                                        >
                                            70% клиентов обращаются к нам по
                                            рекомендации
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box
                                        display={"flex"}
                                        columnGap={1}
                                        alignItems={"flex-start"}
                                    >
                                        <Typography
                                            marginTop={0}
                                            fontWeight={500}
                                            lineHeight={"1.5rem"}
                                            fontSize={{
                                                sm: "0.8rem",
                                                md: "0.9rem",
                                                lg: "1rem",
                                            }}
                                        >
                                            Решаем ваши задачи, а не продаём
                                            &quot;дешёвые&quot; окна
                                        </Typography>
                                    </Box>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
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
                            xs: -5,
                            sm: -5,
                            md: -10,
                            lg: -15,
                            xl: -11,
                        },
                        transform: "translate(-50%, 0%)",
                        left: "50%",
                        maxWidth: "lg",
                    }}
                >
                    <Typography
                        fontWeight={"light"}
                        paddingY={3}
                        align="center"
                        sx={{
                            fontSize: {
                                xs: "1rem",
                                sm: "1.2rem",
                                md: "1.5rem",
                                lg: "2rem",
                            },
                        }}
                    >
                        Комплексное остекление коттеджей
                    </Typography>
                    <Divider />
                    <Box padding={6}>
                        <Grid
                            container
                            rowSpacing={7}
                            columnSpacing={4}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={12} sm={4} md={6} lg={4}>
                                <ProductionTypeCard
                                    imgSrc={windows_1}
                                    caption={
                                        "Оконные и дверные блоки VEKA, Rehau, Kaleva. Энергоэффективная комплектация."
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={6} lg={4}>
                                <ProductionTypeCard
                                    imgSrc={portal_vector_1}
                                    caption={
                                        "Раздвижные двери-порталы. Все виды. Большой опыт монтажа."
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} md={6} lg={4}>
                                <ProductionTypeCard
                                    imgSrc={lamination_1}
                                    caption={
                                        "Ламинация Renolit, Hornshusch, Ado. Окраска торца Zobel."
                                    }
                                />
                            </Grid>
                        </Grid>
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
                            <Grid item xs={12} marginY={0}>
                                <Typography variant="h1">
                                    Оконные блоки в дом
                                </Typography>
                            </Grid>
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
                                            напылением, шириной около 40мм
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
                                                    Почему именно 3 стекла?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    При 2 стеклах - будет
                                                    слишком холодно. Отопление
                                                    станет слишком затратным.
                                                    Снижается шумоизоляция.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
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
                                                    variant={"h6"}
                                                    marginTop={2}
                                                    gutterBottom
                                                >
                                                    Почему стеклопакет должен
                                                    быть шириной от 40мм ?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
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
                                                    variant="subtitle1"
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
                                                    variant="subtitle1"
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
                                                    variant="h6"
                                                    marginTop={2}
                                                    gutterBottom
                                                >
                                                    Что такое энергосберегающее
                                                    напыление ?
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    gutterBottom
                                                >
                                                    Это - революционная
                                                    технология в остеклении
                                                    домов. Напыление находится
                                                    внутри стеклопакета, на
                                                    одном из стекол.
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
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
                                                    variant="subtitle1"
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
                                {CardTextInfoJSX("ПВХ, алюминий или дерево?", [
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        <strong>
                                            ПВХ-профиль оптимальный выбор
                                        </strong>
                                    </Box>,
                                    <Box
                                        component="p"
                                        key={Math.round(Math.random() * 10000)}
                                    >
                                        Этот материал значительно теплее
                                        алюминиевого профиля с терморазрывом, и
                                        существенно дешевле как алюминиевых, так
                                        и деревянных окон.
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
                                {CardTextInfoJSX(
                                    "Особенности входных дверей ПВХ",
                                    [
                                        <Box
                                            component="p"
                                            key={Math.round(
                                                Math.random() * 10000
                                            )}
                                        >
                                            Мы используем вклейку стеклопакета
                                            для всех входных дверей без
                                            исключения.
                                        </Box>,
                                        <Box
                                            component="p"
                                            key={Math.round(
                                                Math.random() * 10000
                                            )}
                                        >
                                            Цветной профиль двери нагревается
                                            летом до 80 градусов и его геометрия
                                            &quot;плывёт&quot; на несколько
                                            миллиметров независимо от мощности
                                            внутренней армировки. Как правило,
                                            замок сразу начинает заедать.
                                        </Box>,
                                        <Box
                                            component="p"
                                            key={Math.round(
                                                Math.random() * 10000
                                            )}
                                        >
                                            Такой ежегодный негативный эффект
                                            полностью устраняется только
                                            технологией вклейки стеклопакета в
                                            створку. Вы получаете действительно
                                            надёжную и тёплую дверь.
                                        </Box>,
                                        <Box
                                            component="p"
                                            key={Math.round(
                                                Math.random() * 10000
                                            )}
                                        >
                                            То же самое касается очень больших
                                            оконных створок. В них мы также
                                            применяем вклейку стеклопакета.
                                        </Box>,
                                        <Accordion
                                            elevation={0}
                                            key={Math.round(
                                                Math.random() * 10000
                                            )}
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
                                                        вклейку для входных
                                                        дверей?
                                                    </Typography>
                                                    <Typography
                                                        variant="subtitle1"
                                                        gutterBottom
                                                    >
                                                        Да, можно. Однако, у нас
                                                        есть многолетний опыт,
                                                        который показывает что
                                                        без вклейки мы выезжаем
                                                        на регулировку по
                                                        гарантии уже через 1 год
                                                        эксплуатации двери.
                                                    </Typography>
                                                    <Typography
                                                        variant={"h6"}
                                                        gutterBottom
                                                    >
                                                        Что делать, если
                                                        стеклопакет разобьётся?
                                                        Можно ли его будет
                                                        заменить?
                                                    </Typography>
                                                    <Typography
                                                        variant="subtitle1"
                                                        gutterBottom
                                                    >
                                                        Да, вклееный стеклопает
                                                        допускает его замену.
                                                        Для этого старый
                                                        стеклопакет вырезается
                                                        из створки. Остатки
                                                        старого клея вычищаются.
                                                        Наносится новый клей из
                                                        специального ремонтного
                                                        набора и устанавливается
                                                        новый стеклопакет.
                                                    </Typography>
                                                </Box>
                                            </AccordionDetails>
                                        </Accordion>,
                                    ]
                                )}
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

function CardTextInfo(title: string, descriptionText: string[]) {
    return (
        <Card elevation={0}>
            <CardContent>
                <Typography variant="h2" component="div">
                    {title}
                </Typography>

                {descriptionText.map((paragraph) => {
                    return (
                        <Typography
                            component="div"
                            key={Math.round(Math.random() * 10000)}
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
                <Typography component="div" variant="h2">
                    {title}
                </Typography>

                {descriptionJSX.map((paragraph) => {
                    return (
                        <Typography
                            component="div"
                            key={Math.round(Math.random() * 10000)}
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

// function arrowDivider(direction: string) {
//     return (
//         <Box
//             zIndex={-1}
//             display="flex"
//             justifyContent={"center"}
//             sx={{
//                 transform: `rotate(${
//                     direction === "right" ? "15deg" : "-15deg"
//                 }) scaleX(${direction === "right" ? "-1" : "1"})`,
//                 opacity: "75%",
//             }}
//         >
//             <Image
//                 src={arrow_1}
//                 alt="arrow"
//                 sizes="60vw"
//                 style={{
//                     width: "45%",
//                     height: "auto",
//                 }}
//             />
//         </Box>
//     );
// }

interface Props {
    imgSrc: StaticImageData;
    caption: string;
}

const ProductionTypeCard = ({ imgSrc, caption }: Props) => {
    return (
        <Box
            display={"flex"}
            flexDirection={{ xs: "column" }}
            alignItems={"center"}
        >
            <Image src={imgSrc.src} width={200} height={200} alt={caption} />
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={{ xs: "center", md: "flex-start" }}
                marginLeft={{ xs: 0, md: 3 }}
                gap={1}
            >
                <Typography
                    fontWeight={"400"}
                    sx={{
                        fontSize: { xs: "medium", sm: "medium", md: "large" },
                        textAlign: { xs: "center", md: "center" },
                    }}
                >
                    {caption}
                </Typography>
            </Box>
        </Box>
    );
};
