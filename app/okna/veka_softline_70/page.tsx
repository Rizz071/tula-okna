import React from "react";
import Image from "next/image";
import slideImage from "@/public/images/slides/Artline-82-Interior-01.jpg";
import slide_1 from "@/public/images/Sofltine_crop.png";
import cut_1 from "@/public/images/sl_13.png";
import cut_2 from "@/public/images/sl_16.png";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import veka_logo_light from "@/public/images/veka_logo_light.svg";

import {
    Box,
    Container,
    Grid2 as Grid,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import HeaderSlider from "@/app/components/HeaderSlider";
import ResponsiveHeader_H1 from "@/app/components/Article/ResponsiveHeader_H1";
import VekaUniqueAdvatages from "@/app/components/VekaUniqueAdvatages";

export default function Page() {
    return (
        <>
            <HeaderSlider sliderImage={slideImage} isCardVisible={false} />

            <Container maxWidth={"lg"} sx={{ mt: 8 }}>
                <Grid container columnSpacing={10} rowSpacing={6}>
                    <Grid
                        size={{ xs: 12, sm: 6, md: 6 }}
                        sx={{
                            position: "relative",
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        <Image
                            src={slide_1}
                            alt="Slider hero image"
                            sizes={"50vw"}
                            width={0}
                            height={0}
                            quality={85}
                            priority
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                        <TableContainer
                            component={Paper}
                            elevation={12}
                            sx={{
                                position: "relative",
                                mt: { xs: -13, sm: -15 },
                            }}
                        >
                            <Table
                                aria-label="Profile comapament table"
                                size="small"
                                style={{ tableLayout: "fixed" }}
                            >
                                <TableHead sx={{ bgcolor: "#333" }}>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Grid
                                                container
                                                sx={{ width: "100%" }}
                                            >
                                                <Grid size={{ xs: 3 }}>
                                                    <Box
                                                        sx={{
                                                            position:
                                                                "relative",
                                                            height: "100%",
                                                        }}
                                                    >
                                                        <Image
                                                            src={
                                                                veka_logo_light
                                                            }
                                                            alt={"VEKA logo"}
                                                            fill
                                                        />
                                                    </Box>
                                                </Grid>
                                                <Grid size={"grow"}>
                                                    <Typography
                                                        variant="h1"
                                                        sx={{
                                                            px: 0,
                                                            py: 1,
                                                            color: "white",
                                                            fontSize: {
                                                                xs: "1.2rem",
                                                                md: "1.5rem",
                                                                lg: "2.0rem",
                                                            },
                                                            letterSpacing: {
                                                                xs: "1px",
                                                                lg: "2px",
                                                            },
                                                            textAlign: {
                                                                xs: "right",
                                                                md: "center",
                                                            },
                                                            fontWeight: {
                                                                xs: 400,
                                                                sm: 300,
                                                            },
                                                        }}
                                                    >
                                                        VEKA SOFTLINE 70
                                                    </Typography>

                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                xs: "0.7rem",
                                                                md: "0.9rem",
                                                                lg: "1rem",
                                                            },
                                                            m: 0,
                                                            pb: 1,
                                                            color: "white",
                                                            fontWeight: 300,
                                                            textTransform:
                                                                "uppercase",
                                                            letterSpacing: {
                                                                xs: "1px",
                                                                lg: "2px",
                                                            },
                                                            textAlign: {
                                                                xs: "right",
                                                                md: "center",
                                                            },
                                                        }}
                                                    >
                                                        Особенности нашей сборки
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            colSpan={2}
                                            sx={{
                                                display: {
                                                    xs: "table-cell",
                                                    sm: "none",
                                                },
                                            }}
                                        >
                                            <Image
                                                src={slide_1}
                                                alt="Slider hero image"
                                                sizes={"50vw"}
                                                width={0}
                                                height={0}
                                                quality={85}
                                                priority
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Толщина стенок
                                            </Typography>
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            sx={{
                                                bgcolor: "lightgreen",
                                            }}
                                        >
                                            <>
                                                <Typography
                                                    sx={{
                                                        typography: "overline",
                                                        m: 0,
                                                        p: 0,
                                                        fontSize: {
                                                            xs: "0.7rem",
                                                            md: "0.8rem",
                                                        },
                                                        fontWeight: 500,
                                                        lineHeight: "1.2rem",
                                                    }}
                                                >
                                                    Класс А по RAL
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        typography: "overline",
                                                        mt: 1,
                                                        p: 0,
                                                        fontSize: {
                                                            xs: "0.5rem",
                                                            sm: "0.6rem",
                                                        },
                                                        lineHeight: "1rem",
                                                    }}
                                                >
                                                    не менее 3.0 мм
                                                </Typography>
                                            </>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Количество камер
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                5
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Стеклопакет
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    // wordWrap: "break-word",
                                                    overflowWrap: "break-word",
                                                    hyphens: "auto",
                                                    hyphenateCharacter: "-",
                                                }}
                                            >
                                                Мульти
                                                <wbr />
                                                функциональный
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    mt: 1,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.5rem",
                                                        sm: "0.6rem",
                                                    },
                                                    lineHeight: "1rem",
                                                }}
                                            >
                                                зимой сохраняет тепло,
                                                <br />
                                                летом - не пропускает жару
                                            </Typography>{" "}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Армирование в раме
                                            </Typography>
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            sx={{
                                                bgcolor: "lightgreen",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    mt: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                Замкнутое
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Система уплотнений
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                gutterBottom
                                                sx={{
                                                    typography: "overline",
                                                    mt: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                2 контура
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    mt: 1,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.5rem",
                                                        sm: "0.6rem",
                                                    },
                                                    lineHeight: "1rem",
                                                }}
                                            >
                                                Уплотнение вставлено в паз,
                                                допускает быструю замену
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Нахлест уплотнений снаружи
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                7 мм
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Нахлест уплотнений изнутри
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                8 мм
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Глубина посадки стеклопакета
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                16 мм
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Сопротивление теплопередаче
                                                профиля с армированием
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                0,79 м<sup>2</sup>°С/Вт
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    mt: 1,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.5rem",
                                                        sm: "0.6rem",
                                                    },
                                                    lineHeight: "1rem",
                                                }}
                                            >
                                                Должно быть не менее 0,63 по
                                                СНиП 23-02-2003
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Сопротивление теплопередаче
                                                стеклопакета
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "150%",
                                                    textAlign: "left",
                                                }}
                                            >
                                                1,15 м<sup>2</sup>°С/Вт
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    mt: 1,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.5rem",
                                                        sm: "0.6rem",
                                                    },
                                                    lineHeight: "1rem",
                                                }}
                                            >
                                                Должно быть не менее 0,63 по
                                                СНиП 23-02-2003
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography variant="overline">
                                                Степень глянца
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                Средняя
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Фурнитура
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                Gretsch-Unitas (Германия)
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                ROTO (Германия)
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={{ height: "3.0rem" }}>
                                            <Typography
                                                variant="overline"
                                                sx={{
                                                    lineHeight: "1.2rem",
                                                }}
                                            >
                                                Сравнительная стоимость
                                            </Typography>
                                        </TableCell>

                                        <TableCell align="left">
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    m: 0,
                                                    p: 0,
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.8rem",
                                                    },
                                                    fontWeight: 500,
                                                    lineHeight: "1.2rem",
                                                    textAlign: "left",
                                                }}
                                            >
                                                Средняя
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid size={{ xs: 12, lg: 6 }}></Grid>
                    <Grid
                        size={{ xs: 12, lg: 6 }}
                        sx={{
                            position: "relative",
                            mt: { xs: 0, lg: -6 },
                        }}
                    >
                        <TableContainer component={Paper} elevation={12}>
                            <Table
                                // sx={{ minWidth: 650 }}
                                aria-label="Profile comapament table"
                                size="small"
                                style={{ tableLayout: "fixed" }}
                            >
                                <TableHead sx={{ bgcolor: "#333" }}>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography
                                                sx={{
                                                    m: 1,
                                                    p: 0,
                                                    color: "white",
                                                    fontWeight: 300,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "3px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                Рекомендованное применение
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ verticalAlign: "top" }}>
                                        <TableCell colSpan={2}>
                                            <Typography
                                                sx={{
                                                    fontWeight: 400,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "3px",
                                                    textAlign: "center",
                                                }}
                                            ></Typography>
                                            <Typography
                                                sx={{
                                                    mx: { xs: 2, md: 4 },
                                                    my: 2,
                                                    typography: "button",
                                                    lineHeight: "1.5rem",
                                                }}
                                            >
                                                Загородные дома для
                                                круглогодичного проживания
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mx: { xs: 2, md: 4 },
                                                    my: 2,
                                                    typography: "button",
                                                    lineHeight: "1.5rem",
                                                }}
                                            >
                                                Городские квартиры: на
                                                оживлённой улице, с
                                                недостаточным отоплением, на
                                                высоких этажах
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mx: { xs: 2, md: 4 },
                                                    my: 2,
                                                    typography: "button",
                                                    lineHeight: "1.5rem",
                                                }}
                                            >
                                                Крупногабаритные окна и двери
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ mt: 6 }}>
                        <ResponsiveHeader_H1 text={"Комбинация профилей"} />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TableContainer component={Paper} elevation={12}>
                            <Table
                                aria-label="Profile comapament table"
                                size="small"
                                style={{ tableLayout: "fixed" }}
                            >
                                <TableHead sx={{ bgcolor: "#333" }}>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography
                                                sx={{
                                                    m: 1,
                                                    p: 0,
                                                    color: "white",
                                                    fontWeight: 300,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "3px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                Рама арт.101208 - Створка
                                                арт.103232
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ verticalAlign: "top" }}>
                                        <TableCell colSpan={2}>
                                            <Image
                                                src={cut_1}
                                                alt="Slider hero image"
                                                sizes={"50vw"}
                                                width={0}
                                                height={0}
                                                quality={85}
                                                priority
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TableContainer component={Paper} elevation={12}>
                            <Table
                                aria-label="Profile comapament table"
                                size="small"
                                style={{ tableLayout: "fixed" }}
                            >
                                <TableHead sx={{ bgcolor: "#333" }}>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Typography
                                                sx={{
                                                    m: 1,
                                                    p: 0,
                                                    color: "white",
                                                    fontWeight: 300,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "3px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                Створка арт.103232 - Импост
                                                арт.102214 - Створка арт.103232
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ verticalAlign: "top" }}>
                                        <TableCell colSpan={2}>
                                            <Image
                                                src={cut_2}
                                                alt="Slider hero image"
                                                sizes={"50vw"}
                                                width={0}
                                                height={0}
                                                quality={85}
                                                priority
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                <VekaUniqueAdvatages />
            </Container>
        </>
    );
}
