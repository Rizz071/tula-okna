import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import main_bg from "../../public/images/main-bg.webp";
import pic1 from "../../public/images/knipping2.webp";
import pic2 from "../../public/images/engin22.webp";
import pic3 from "../../public/images/expert2.webp";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const FirstPageComparement = () => {
    return (
        <Box
            paddingY={35}
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
                    Сравнение профильных систем
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
                                    <Typography fontSize={"14px"} color="grey">
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
                                    <Typography fontSize={"14px"} color="grey">
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
                                    <Typography fontSize={"14px"} color="grey">
                                        Ключевой различие
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontSize={"14px"}>
                                        Толщина наружных стенок профиля - 2.7
                                        мм, Толщина внутренних стенок профиля -
                                        не регламентируется
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontSize={"14px"}>
                                        Толщина наружных стенок профиля - 3,0
                                        мм, Толщина внутренних стенок профиля -
                                        2,7 мм
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
                                    <Typography fontSize={"14px"} color="grey">
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
                                    <Typography fontSize={"14px"} color="grey">
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
                                    <Typography fontSize={"14px"} color="grey">
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
                                    <Typography fontSize={"14px"} color="grey">
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
                                    <Typography fontSize={"14px"} color="grey">
                                        Коэффициент теплозащиты окна R0 (м2 ×
                                        °C)/Вт
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
                                    <Typography fontSize={"14px"} color="grey">
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
                                    <Typography fontSize={"14px"} color="grey">
                                        Рекомендации по применению
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontSize={"14px"}>
                                        Оконные блоки в соответствии с ГОСТ
                                        30674-99, ГОСТ Р 56926-2016 Классические
                                        оконные блоки, собранные под контролем
                                        качества Рекомендуются для остекления
                                        дач, балконов и лоджий, технических
                                        помещений, квартир эконом-класса С этими
                                        окнами можно получить качественный
                                        продукт, когда нужны самые простые окна
                                        по минимальной цене
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontSize={"14px"}>
                                        Рекомендуются для многоквартирных домов
                                        с центральным отоплением Эти окна и
                                        двери отличаются от эконом-класса
                                        идеально гладкой и глянцевой
                                        поверхностью профиля Энергосберегающее
                                        стекло является дополнительной
                                        страховкой от недотопа батарей и плохой
                                        вентиляции. Фурнитура ROTO NX - эталон
                                        качества на оконном рынке. С ней оконные
                                        створки работают десятилетиями без
                                        поломок
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
                                    <Typography fontSize={"18px"} color="grey">
                                        Цена
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        fontSize={{ xs: "large", md: "30px" }}
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
                                        fontSize={{ xs: "large", md: "30px" }}
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
    );
};

export default FirstPageComparement;
