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

import Image, { StaticImageData } from "next/image";
import main_bg from "../../public/images/main-bg.webp";
import kaleva_70 from "../../public/images/profiles/kaleva_70_3.jpg";
import veka_70 from "../../public/images/profiles/veka_70_2.jpg";
import veka_82 from "../../public/images/profiles/veka_82_1.jpg";
import pic1 from "../../public/images/knipping2.webp";

export default function Page() {
    return (
        <>
            <Box>
                <Container maxWidth={"lg"}>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        paddingY={6}
                    >
                        <Box marginBottom={6}>
                            <Typography variant="h1" fontSize="28px">
                                Рекомендации по остеклению загородного дома
                            </Typography>
                        </Box>

                        <Grid
                            container
                            columnGap={{ xs: 0, md: 6 }}
                            rowGap={6}
                            justifyContent={"space-around"}
                        >
                            <Grid item xs={12} md={3}>
                                {CardTextInfo("ПВХ или алюминий?", [
                                    "ПВХ - значительно теплее алюминия и значительно дешевле.",
                                    "К примеру, самый широкий алюминиевый профиль по теплосбережению примерно равен самому простому ПВХ шириной 60мм.",
                                ])}
                            </Grid>
                            <Grid item xs={12} md={3}>
                                {CardTextInfo("Толщина профиля?", [
                                    "70мм - золотой стандарт.",
                                    "60мм - дешевле на 10-20%, но затем сильно увеличатся расходы на отопление зимой",
                                    "80мм - подойдёт тогда, когда средства вкладываются в энергоэффективность дома. Вложения окупаются в течение нескольких лет.",
                                ])}
                            </Grid>
                            <Grid item xs={12} md={3}>
                                {CardTextInfo("Какой стеклопакет?", [
                                    "Стеклопакет - только 3 стекла, энергосберегающее напыление.",
                                    "2 стекла - слишком холодно.",
                                    "4 стекла - теряется прозрачность, большая весовая нагрузка на механизм.",
                                    "Энергосберегающее напыление стоит чрезвычайно дёшево, но бережёт тепло почти как дополнительное стекло.",
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
                            <Typography variant="h1" fontSize="28px">
                                Рекомендации по остеклению загородного дома
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
                                "Многокамерная система с превосходными изолирующими характеристиками"
                            )}
                            {CardProfileSystem(
                                veka_70,
                                0,
                                "VEKA SOFTLINE 70mm",
                                "Многокамерная система с превосходными изолирующими характеристиками"
                            )}
                            {CardProfileSystem(
                                veka_82,
                                0,
                                "VEKA SOFTLINE 82mm",
                                "Многокамерная система с превосходными изолирующими характеристиками"
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box
                // paddingY={"70px"}
                sx={{
                    objectFit: "cover",
                    backgroundImage: `url(${main_bg.src})`,
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container maxWidth={"lg"}>
                    <Typography
                        variant="h2"
                        fontSize={"36px"}
                        fontWeight={"light"}
                        marginY={"15px"}
                        align="center"
                    >
                        В чём разница между этими системами?
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
                                        <Typography
                                            color="#e65022"
                                            letterSpacing={"-0.2px"}
                                            fontSize={"16px"}
                                            fontWeight={400}
                                        >
                                            Стандартное качество на рынке
                                        </Typography>

                                        {/* <Typography
                                        color="grey"
                                        fontSize={"14px"}
                                        fontWeight={"light"}
                                    >
                                        Экологичный профиль по рецептуре CaZn
                                        (без свинца в составе)
                                    </Typography> */}
                                        <Image
                                            src={pic1}
                                            alt=""
                                            style={{
                                                maxWidth: pic1.width,
                                                width: "100%",
                                                height: "auto",
                                                marginTop: "28px",
                                                marginBottom: "9px",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography
                                            color="#e65022"
                                            letterSpacing={"-0.2px"}
                                            fontSize={"16px"}
                                            fontWeight={400}
                                        >
                                            Премиальное качество на рынке
                                        </Typography>

                                        {/* <Typography
                                        color="grey"
                                        fontSize={"14px"}
                                        fontWeight={"light"}
                                    >
                                        Экологичный профиль по рецептуре CaZn
                                        (без свинца в составе)
                                    </Typography> */}
                                        <Image
                                            src={pic1}
                                            alt=""
                                            style={{
                                                maxWidth: pic1.width,
                                                width: "100%",
                                                height: "auto",
                                                marginTop: "28px",
                                                marginBottom: "9px",
                                            }}
                                        />
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Происхождение системы
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Российская Федерация
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Германия
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Совместимость с системой
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Rehau
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            VEKA
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Ключевой различие
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Толщина наружных стенок профиля -
                                            2.7 мм, Толщина внутренних стенок
                                            профиля - не регламентируется
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Толщина наружных стенок профиля -
                                            3,0 мм, Толщина внутренних стенок
                                            профиля - 2,7 мм
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Базовая взломостойкость
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Есть
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Есть
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Противопылевая заглушка
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Есть
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Опция
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Тип оконной ручки
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Базовая ручка (Россия)
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Ручка премиум-класса
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Уплотнительная резина
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Стандартный уплотнитель (Россия)
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Фирменный уплотнитель REHAU RAUCELL
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Коэффициент теплозащиты окна R0 (м2
                                            × °C)/Вт
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            0,64
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            0,70
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Гарантия на оконные блоки
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Стандартная гарантия - 3 года
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Стандартная гарантия - 3 года
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
                                            fontSize={"14px"}
                                            color="grey"
                                        >
                                            Рекомендации по применению
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Оконные блоки в соответствии с ГОСТ
                                            30674-99, ГОСТ Р 56926-2016
                                            Классические оконные блоки,
                                            собранные под контролем качества
                                            Рекомендуются для остекления дач,
                                            балконов и лоджий, технических
                                            помещений, квартир эконом-класса С
                                            этими окнами можно получить
                                            качественный продукт, когда нужны
                                            самые простые окна по минимальной
                                            цене
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={"14px"}>
                                            Рекомендуются для многоквартирных
                                            домов с центральным отоплением Эти
                                            окна и двери отличаются от
                                            эконом-класса идеально гладкой и
                                            глянцевой поверхностью профиля
                                            Энергосберегающее стекло является
                                            дополнительной страховкой от
                                            недотопа батарей и плохой
                                            вентиляции. Фурнитура ROTO NX -
                                            эталон качества на оконном рынке. С
                                            ней оконные створки работают
                                            десятилетиями без поломок
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
                                            color="grey"
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
    description: string
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
                <Typography variant="body2" color="text.secondary">
                    {description}
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
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>

                {descriptionText.map((paragraph) => {
                    return (
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            textAlign={"justify"}
                            fontSize={"16px"}
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
