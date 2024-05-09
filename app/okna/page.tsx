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
} from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

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
                            rowGap={{ xs: 0, sm: 6, md: 12 }}
                            justifyContent={"space-around"}
                        >
                            <Grid item xs={12} md={6}>
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

                            <Grid item xs={12} md={6} alignContent={"center"}>
                                {CardTextInfo("Пластик, алюминий или дерево?", [
                                    "ПВХ-профиль значительно теплее алюминия и существенно дешевле как алюминиевых окон, так и деревянных.",
                                    "К примеру, самый широкий алюминиевый профиль по теплосбережению примерно соответствует самому простому ПВХ-профилю шириной 60мм.",
                                    "Дерево, в свою очередь, менее долговечно, чем ПВХ.",
                                ])}
                            </Grid>

                            <Grid item xs={12} md={6} order={{ xs: 2, md: 0 }}>
                                <Tooltip title="Пассивный дом (нем. Passivhaus, англ. passive house) — здание, основной особенностью которого является низкое энергопотребление за счёт применения пассивных методов энергосбережения.">
                                    {CardTextInfo("Глубина профиля", [
                                        "Профиль 70мм - стандарт остекления загородных домов, сложившийся в России за десятилетия практики.",
                                        `Профиль 60мм - дешевле на 10-20%, но значительно увеличивает расходы на отопление зимой.`,
                                        'Профиль 82мм - нужен для технологий "пассивного дома". Дополнительные вложения в энергосбережение окупаются обычно в течение нескольких лет.',
                                    ])}
                                </Tooltip>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box alignSelf={"center"}>
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

                            <Grid item xs={12} md={5}>
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

                            <Grid item xs={12} md={6} alignSelf={"center"}>
                                {CardTextInfo("Выбор стеклопакета", [
                                    "Оптимально - 3 стекла с энергосберегающим напылением.",
                                    "2 стекла - слишком холодно.",
                                    "4 стекла - теряется прозрачность, увеличивается весовая нагрузка на механизм.",
                                    "Энергосберегающее напыление стоит относительно дёшево, но бережёт тепло почти как дополнительное стекло. Слишком выгодно, чтобы от него отказываться.",
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

            <Box
                paddingY={"70px"}
                sx={{
                    objectFit: "cover",
                    backgroundImage: `url(${main_bg.src})`,
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container maxWidth={"lg"}>
                    <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        fontWeight={300}
                        marginBottom={4}
                        align="center"
                    >
                        В чём разница между этими производителями?
                    </Typography>
                    <TableContainer component={Paper} elevation={4}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#626a73" }}>
                                    <TableCell
                                        width="1px"
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "table-cell",
                                            },
                                        }}
                                    >
                                        <Typography
                                            fontSize={"18px"}
                                            color="white"
                                            fontWeight={400}
                                        >
                                            Отличия
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ width: { xs: "50%", md: "1px" } }}
                                    >
                                        <Typography
                                            fontSize={"18px"}
                                            color="white"
                                            fontWeight={500}
                                            letterSpacing={3}
                                            textTransform={"uppercase"}
                                        >
                                            KALEVA
                                        </Typography>
                                    </TableCell>

                                    <TableCell
                                        align="center"
                                        sx={{ width: { xs: "50%", md: "1px" } }}
                                    >
                                        <Typography
                                            fontSize={"18px"}
                                            color="white"
                                            fontWeight={500}
                                            letterSpacing={3}
                                            textTransform={"uppercase"}
                                        >
                                            VEKA
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "table-cell",
                                            },
                                        }}
                                        component="th"
                                        scope="row"
                                    ></TableCell>

                                    <TableCell align="left">
                                        {/* <Typography
                                            color="#e65022"
                                            letterSpacing={"-0.2px"}
                                            fontSize={"16px"}
                                            fontWeight={400}
                                        >
                                            Стандартное качество на рынке
                                        </Typography> */}

                                        {/* <Typography
                                        color="grey"
                                        fontSize={"14px"}
                                        fontWeight={"light"}
                                    >
                                        Экологичный профиль по рецептуре CaZn
                                        (без свинца в составе)
                                    </Typography> */}
                                        <Box padding={10}>
                                            <Image
                                                src={kaleva_logo}
                                                alt=""
                                                style={{
                                                    // maxWidth: kaleva_logo.width,
                                                    width: "100%",
                                                    height: "auto",
                                                    marginTop: "28px",
                                                    marginBottom: "9px",
                                                }}
                                            />
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        {/* <Typography
                                            color="#e65022"
                                            letterSpacing={"-0.2px"}
                                            fontSize={"16px"}
                                            fontWeight={400}
                                        >
                                            Премиальное качество на рынке
                                        </Typography> */}

                                        {/* <Typography
                                        color="grey"
                                        fontSize={"14px"}
                                        fontWeight={"light"}
                                    >
                                        Экологичный профиль по рецептуре CaZn
                                        (без свинца в составе)
                                    </Typography> */}
                                        <Box padding={0}>
                                            <Image
                                                src={veka_logo}
                                                alt=""
                                                style={{
                                                    maxWidth: veka_logo.width,
                                                    width: "100%",
                                                    height: "auto",
                                                    marginTop: "28px",
                                                    marginBottom: "9px",
                                                }}
                                            />
                                        </Box>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "table-cell",
                                            },
                                        }}
                                    >
                                        <Typography
                                            color="text.secondary"
                                            fontSize={"small"}
                                        >
                                            Происхождение системы
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            Российская Федерация
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>Германия</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "table-cell",
                                            },
                                        }}
                                    >
                                        <Typography
                                            color="text.secondary"
                                            fontSize={"small"}
                                        >
                                            Совместимость с системой
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>Rehau</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>VEKA</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "table-cell",
                                            },
                                        }}
                                    >
                                        <Typography
                                            color="text.secondary"
                                            fontSize={"small"}
                                        >
                                            Ключевой различие
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{ verticalAlign: "top" }}>
                                        <Typography gutterBottom>
                                            Толщина стенок профиля - 2.7 мм
                                        </Typography>
                                        <Typography gutterBottom>
                                            Профиль Класса "Б" по российскому
                                            стандарту ГОСТ 30673-99
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography gutterBottom>
                                            Толщина стенок профиля - 3,0 мм
                                        </Typography>
                                        <Typography gutterBottom>
                                            Профиль Класса "А" по немецкому
                                            стандарту DIN EN 12608
                                        </Typography>

                                        <Typography gutterBottom>
                                            Единственный профиль с такой
                                            толщиной стенки на оконном рынке РФ
                                        </Typography>

                                        <Typography gutterBottom>
                                            Толщина стенки оказывает
                                            значительное влияние на прочность
                                            спаянных углов створок и рам,
                                            сопротивляется температурным
                                            деформациям профиля.
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "table-cell",
                                            },
                                        }}
                                    >
                                        <Typography
                                            color="text.secondary"
                                            fontSize={"small"}
                                        >
                                            Количество камер
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            4 воздушные камеры в створке
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            5 воздушных камер в створке
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "table-cell",
                                            },
                                        }}
                                    >
                                        <Typography
                                            fontSize={"small"}
                                            color="grey"
                                        >
                                            Гарантия на оконные блоки
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            Стандартная гарантия - 3 года
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            Расширенная гарантия - 5 лет
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "table-cell",
                                            },
                                        }}
                                    >
                                        <Typography
                                            color="text.secondary"
                                            fontSize={"small"}
                                        >
                                            Рекомендации по применению
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{ verticalAlign: "top" }}>
                                        <Typography gutterBottom>
                                            Российская оконная система,
                                            созданная по образцу немецкой РЕХАУ
                                            и полностью с ней совместимая.
                                        </Typography>
                                        <Typography gutterBottom>
                                            Остекление будет экономичным, но при
                                            этом также полностью соответствовать
                                            требованиям для остекления дома
                                            круглогодичного проживания.
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography gutterBottom>
                                            Наиболее качественная оконная
                                            система на рынке РФ. Больше пластика
                                            в профиле, надёжнее соединения рам и
                                            створок.
                                        </Typography>
                                        <Typography gutterBottom>
                                            Переплата в 10-20% по сравнению с
                                            аналогами окупится высочайшим
                                            уровнем комфорта при эксплуатации и
                                            отсутствием проблем с регулировкой.
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "table-cell",
                                            },
                                        }}
                                    >
                                        <Typography
                                            fontSize={"18px"}
                                            color="text.secondary"
                                        >
                                            Цена
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            fontSize={{
                                                xs: "large",
                                                md: "30px",
                                            }}
                                        >
                                            от 6.600 руб
                                        </Typography>
                                        <Button variant="contained">
                                            <Typography
                                                fontWeight={700}
                                                letterSpacing={{
                                                    xs: "normal",
                                                    md: "3px",
                                                }}
                                                fontSize={{
                                                    xs: "small",
                                                    md: "16px",
                                                }}
                                            >
                                                ЗАКАЗАТЬ
                                            </Typography>
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            fontSize={{
                                                xs: "large",
                                                md: "30px",
                                            }}
                                        >
                                            от 7.900 руб
                                        </Typography>
                                        <Button variant="contained">
                                            <Typography
                                                fontWeight={700}
                                                letterSpacing={{
                                                    xs: "normal",
                                                    md: "3px",
                                                }}
                                                fontSize={{
                                                    xs: "small",
                                                    md: "16px",
                                                }}
                                            >
                                                ЗАКАЗАТЬ
                                            </Typography>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
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
