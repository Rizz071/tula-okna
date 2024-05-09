import React from "react";
import {
    Container,
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Divider,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import PermDeviceInformationSharpIcon from "@mui/icons-material/PermDeviceInformationSharp";
import PermDeviceInformationTwoToneIcon from "@mui/icons-material/PermDeviceInformationTwoTone";
import HelpCenterTwoToneIcon from "@mui/icons-material/HelpCenterTwoTone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";

import Image, { StaticImageData } from "next/image";
import main_bg from "../../public/images/main-bg.webp";
import kaleva_70 from "../../public/images/profiles/kaleva_70_3.jpg";
import veka_70 from "../../public/images/profiles/veka_70_2.jpg";
import veka_82 from "../../public/images/profiles/veka_82_1.jpg";
import isoterma1 from "../../public/images/slides/profile_compare_house_1.jpg";
import veka_compare_1 from "../../public/images/profiles/veka_compare_2_800px.jpg";
import kaleva_logo from "../../public/images/profiles/kaleva_logo.svg";
import veka_logo from "../../public/images/profiles/Veka_logo_PNG1.png";
import slide from "../../public/images/slides/slide_infra_house_1_1920px.jpg";
import steklopaket from "../../public/images/slides/steklopaket_1.jpg";
import ProductionTypeCard from "../components/ProductionTypeCard";

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
                        opacity: "90%",
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
                            sm: "140px",
                            md: "200px",
                            lg: "270px",
                            xl: "350px",
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
                        borderRadius: "1% 20% 1% 20%",
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
                            align="right"
                            variant="sliderFont"
                            bgcolor="white"
                            fontWeight={"light"}
                            sx={{
                                fontSize: {
                                    xs: "10px",
                                    sm: "14px",
                                    md: "18px",
                                    lg: "22px",
                                    xl: "30px",
                                },
                            }}
                        >
                            Делимся нашим опытом
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
                            xs: -35.3,
                            sm: -32,
                            md: -27,
                            lg: -15,
                            xl: -11,
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
                        {CardTextInfoJSX(
                            "Как не ошибиться с выбором окон для дома",
                            [
                                <Box component="p">
                                    Известно, что до 40% тепла зимой теряется
                                    через остекление. Чем теплее окна - тем
                                    меньше придётся платить за отопление.
                                    <Tooltip title="Пассивный дом (нем. Passivhaus, англ. passive house) — здание, основной особенностью которого является низкое энергопотребление за счёт применения пассивных методов энергосбережения.">
                                        <InfoOutlinedIcon color="error" />
                                    </Tooltip>
                                </Box>,
                                <Box component="p">
                                    Окон в доме много - в среднем 10-15 штук.
                                    Фурнитура должна быть качественная, иначе
                                    придётся каждый сезон регулировать створки
                                    вручную или вызывать мастера.
                                </Box>,
                                <Box component="p">
                                    Дерево, в свою очередь, менее долговечно,
                                    чем ПВХ.
                                </Box>,
                            ]
                        )}
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
                                {CardTextInfoJSX("Выбор стеклопакета", [
                                    <Box component="p">
                                        В первую очередь выбираем не оконный
                                        профиль, а стеклопакет.
                                    </Box>,
                                    <Box component="p">
                                        Почему так? Ведь везде предлагают
                                        выбрать оконный профиль!
                                    </Box>,
                                    <Box component="p">
                                        Дело в том, что стеклопакет составляет
                                        около 90% площади каждого окна и именно
                                        он отвечает за сохранность тепла.
                                    </Box>,
                                    <Box component="p">
                                        Известно, что до 40% тепла зимой
                                        теряется через остекление. Чем теплее
                                        стеклопакет - те меньше придётся платить
                                        за отопление зимой.
                                    </Box>,
                                    <Box component="p">
                                        Оптимальный выбор стеклопакета -{" "}
                                        <strong>
                                            3 стекла с энергосберегающим
                                            напылением
                                        </strong>
                                        .
                                    </Box>,
                                    <Tooltip
                                        componentsProps={{
                                            tooltip: {
                                                sx: {
                                                    bgcolor: "common.black",
                                                    "& .MuiTooltip-arrow": {
                                                        color: "common.black",
                                                    },
                                                    maxWidth: {
                                                        xs: "100vw",
                                                        md: "70vw",
                                                        xl: "50vw",
                                                    },
                                                    opacity: "80%",
                                                },
                                            },
                                        }}
                                        title={
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
                                                    2 стекла - слишком холодно.
                                                    Отопление будет затратным.
                                                    Снижается шумоизоляция.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    4 стекла - теряется
                                                    прозрачность, увеличивается
                                                    весовая нагрузка на
                                                    механизм.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Энергосберегающее напыление
                                                    стоит относительно дёшево,
                                                    но бережёт тепло почти как
                                                    дополнительное стекло.
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Слишком выгодная технология,
                                                    чтобы от неё отказываться.
                                                </Typography>
                                            </Box>
                                        }
                                    >
                                        <Box marginTop={4}>
                                            <Typography
                                                fontSize={"1rem"}
                                                variant="button"
                                                color="error"
                                                gutterBottom
                                            >
                                                <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                ПОДРОБНЕЕ
                                            </Typography>
                                        </Box>
                                    </Tooltip>,
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

                            {arrowDivider("right")}

                            <Grid item xs={12} md={6} order={{ xs: 3, md: 3 }}>
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
                                order={{ xs: 4, md: 4 }}
                            >
                                {CardTextInfoJSX(
                                    "Пластик, алюминий или дерево?",
                                    [
                                        <Box component="p">
                                            <strong>
                                                ПВХ-профиль станет оптимальным
                                                выбором
                                            </strong>
                                            .
                                        </Box>,
                                        <Box component="p">
                                            Этот материал значительно теплее
                                            алюминиевого профиля с терморазрывом
                                            и существенно дешевле как
                                            алюминиевых окон, так и деревянных.
                                        </Box>,
                                        <Tooltip
                                            componentsProps={{
                                                tooltip: {
                                                    sx: {
                                                        bgcolor: "common.black",
                                                        "& .MuiTooltip-arrow": {
                                                            color: "common.black",
                                                        },
                                                        maxWidth: {
                                                            xs: "100vw",
                                                            md: "70vw",
                                                            xl: "50vw",
                                                        },
                                                        opacity: "80%",
                                                    },
                                                },
                                            }}
                                            title={
                                                <Box>
                                                    <Typography
                                                        fontWeight={"light"}
                                                        gutterBottom
                                                    >
                                                        <strong>
                                                            <u>
                                                                Почему именно
                                                                ПВХ-профиль?
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
                                                        соответствует самому
                                                        простому ПВХ-профилю
                                                        шириной 60мм.
                                                    </Typography>
                                                    <Typography
                                                        fontWeight={"light"}
                                                        gutterBottom
                                                    >
                                                        Дерево, в свою очередь,
                                                        менее долговечно, чем
                                                        ПВХ. Деревянные окна
                                                        требуют либо установки
                                                        защитных алюминиевых
                                                        накладок с уличной
                                                        стороны, либо обновления
                                                        краски каждые 3-5 лет на
                                                        всех окнах в доме.
                                                    </Typography>
                                                    <Typography
                                                        fontWeight={"light"}
                                                        gutterBottom
                                                    >
                                                        Часто можно слышать
                                                        утвержение, что
                                                        деревянные окна
                                                        "пропускают через себя
                                                        свежий воздух". Это не
                                                        соответствует
                                                        реальности, потому что
                                                        современные деревянные
                                                        окна производятся из
                                                        клееного бруса, который,
                                                        конечно же, ничего
                                                        "через себя" не
                                                        пропускает.
                                                    </Typography>
                                                </Box>
                                            }
                                        >
                                            <Box marginTop={4}>
                                                <Typography
                                                    fontSize={"1rem"}
                                                    variant="button"
                                                    color="error"
                                                    gutterBottom
                                                >
                                                    <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                    ПОДРОБНЕЕ
                                                </Typography>
                                            </Box>
                                        </Tooltip>,
                                    ]
                                )}
                            </Grid>

                            {arrowDivider("left")}

                            <Grid item xs={12} md={6} order={{ xs: 6, md: 5 }}>
                                {CardTextInfoJSX("Глубина профиля", [
                                    <Box component="p">
                                        Глубина оконного профиля зависит от
                                        выбранного стеклопакета.
                                    </Box>,
                                    <Box component="p">
                                        Краевая зона стеклопакета - самая
                                        уязвимая к промерзанию часть окна.
                                    </Box>,
                                    <Box component="p">
                                        Выбираем такую глубину профиля, чтобы он
                                        был теплее, чем стеклопакет.
                                    </Box>,
                                    <Box component="p">
                                        <strong>
                                            По характеристикам нас устроит
                                            профиль 70мм
                                        </strong>{" "}
                                        - стандарт остекления загородных домов,
                                        сложившийся в средней полосе России за
                                        десятилетия практики использования окон
                                        ПВХ в индивидуальном жилищном
                                        строительстве.
                                    </Box>,
                                    <Tooltip
                                        componentsProps={{
                                            tooltip: {
                                                sx: {
                                                    bgcolor: "common.black",
                                                    "& .MuiTooltip-arrow": {
                                                        color: "common.black",
                                                    },
                                                    maxWidth: {
                                                        xs: "100vw",
                                                        md: "70vw",
                                                        xl: "50vw",
                                                    },
                                                    opacity: "80%",
                                                },
                                            },
                                        }}
                                        title={
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
                                                    загородного дома - СПД
                                                    4-10-4-10-И4.
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
                                                    профиля 70 мм (учитывая
                                                    стальное армирование внутри)
                                                    - 0,79
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
                                                    Его сопротивление
                                                    теплопередаче - 0,64
                                                </Typography>
                                                <Typography
                                                    fontWeight={"light"}
                                                    gutterBottom
                                                >
                                                    Это меньше, чем у
                                                    стеклопакета. Таким образом,
                                                    профиля 60 мм значительно
                                                    повышает риск промерзания
                                                    окна в краевой зоне
                                                    стеклопакета. При этом такая
                                                    экономия на профиле будет
                                                    ничтожной и составит всего
                                                    10% от стоимости заказа.
                                                </Typography>
                                            </Box>
                                        }
                                    >
                                        <Box marginTop={4}>
                                            <Typography
                                                fontSize={"1rem"}
                                                variant="button"
                                                color="error"
                                                gutterBottom
                                            >
                                                <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                                ПОДРОБНЕЕ
                                            </Typography>
                                        </Box>
                                    </Tooltip>,
                                ])}
                            </Grid>

                            <Grid item xs={12} md={6} order={{ xs: 5, md: 6 }}>
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
                                Наше предложение, основанное на 20-летнем опыте
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
                                "КАЛЕВА 70мм",
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
                                "Наиболее качественная оконная система на рынке РФ. Больше пластика в профиле, надёжнее соединения рам и створок. Переплата в 10-20% по сравнению с аналогами окупится высочайшим уровнем комфорта при эксплуатации и отсутствием проблем с регулировкой."
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

                {/* <Typography gutterBottom variant="h6" component="div">
                    Комплектация:
                </Typography> */}

                <ul style={{ marginLeft: "30px" }}>
                    {descriptionText.map((paragraph) => {
                        return (
                            <li>
                                <Typography
                                    // variant="body2"
                                    fontSize={"16px"}
                                    color="text.primary"
                                    // variant="h6"
                                    // color="text.secondary"
                                    // textAlign={"justify"}
                                    // fontWeight={"light"}
                                    // fontSize={"18px"}
                                    // lineHeight={"34px"}
                                    gutterBottom
                                >
                                    {paragraph}
                                </Typography>
                            </li>
                        );
                    })}
                </ul>
                <hr style={{ margin: "15px 0" }} />
                <Typography
                    fontSize={"16px"}
                    color="text.primary"
                    // fontStyle={"normal"}
                    // variant="body2"
                    // color="text.secondary"
                    // lineHeight={"34px"}
                    gutterBottom
                >
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
                            variant="h6"
                            // color="text.secondary"
                            textAlign={"justify"}
                            fontWeight={"light"}
                            // fontSize={"18px"}
                            // lineHeight={"34px"}
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
                            variant="h6"
                            // color="text.secondary"
                            textAlign={"justify"}
                            fontWeight={"light"}
                            // fontSize={"18px"}
                            // lineHeight={"34px"}
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
        <Grid
            item
            xs={12}
            marginY={2}
            sx={{ display: { xs: "none", md: "flex" } }}
        >
            <Box
                width="100%"
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
        </Grid>
    );
}
