import React from "react";
import {
    Box,
    Container,
    Grid2 as Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Link from "next/link";
import HeaderSlider from "../components/HeaderSlider";
import slide from "@/public/images/slides/HS_portal_1.jpg";
import InfoCard from "../components/InfoCard";

export default function Page() {
    return (
        <>
            <HeaderSlider sliderImage={slide} isCardVisible={false} />

            <Container maxWidth="lg" sx={{ mt: 6 }}>
                <Grid
                    container
                    spacing={6}
                    sx={{
                        position: "relative",
                        mt: { xs: -9, md: -20 },
                    }}
                >
                    <Grid
                        size={{ xs: 12, md: 8 }}
                        order={{ xs: 3, sm: 3, md: 1 }}
                    >
                        <TableContainer
                            component={Paper}
                            elevation={12}
                            sx={{ height: "100%", minHeight: "400px" }}
                        >
                            <Table size="small" sx={{ height: "100%" }}>
                                <TableHead sx={{ bgcolor: "#333" }}>
                                    <TableRow>
                                        <TableCell>
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
                                                Схема проезда
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{ height: "100%" }}>
                                    <TableRow
                                        sx={{
                                            verticalAlign: "top",
                                            m: 0,
                                            p: 0,
                                            height: "100%",
                                        }}
                                    >
                                        <TableCell
                                            sx={{
                                                m: 0,
                                                p: 0,
                                            }}
                                        >
                                            <iframe
                                                style={{
                                                    height: "98%",
                                                    width: "100%",
                                                    border: "0px",
                                                }}
                                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A36077a11465838ad06aed17724b29fd5f2e64293b0eb9e4d1d8871009d7370a8&amp;source=constructor"
                                            ></iframe>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid
                        container
                        size={{ xs: 12, sm: 12, md: 4 }}
                        order={{ sx: 1, md: 2 }}
                        direction={{ xs: "column", sm: "row", md: "column" }}
                        spacing={6}
                    >
                        <Grid size={{ xs: 12, sm: 6, md: 12 }}>
                            <InfoCard
                                infoCard={{
                                    title: "Связь с Компанией",
                                    infoCardLines: [
                                        {
                                            leftProperty: "Телефон",
                                            rightProperty: (
                                                <>
                                                    <Link
                                                        href={
                                                            "tel:+74872385550"
                                                        }
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                typography:
                                                                    "overline",
                                                                m: 0,
                                                                p: 0,
                                                                fontSize: {
                                                                    xs: "1.0rem",
                                                                    md: "0.9rem",
                                                                },
                                                                fontWeight: 500,
                                                                textAlign: {
                                                                    xs: "center",
                                                                    lg: "left",
                                                                },
                                                                color: "black",
                                                            }}
                                                        >
                                                            +7 (4872) 38-55-50
                                                        </Typography>
                                                    </Link>
                                                </>
                                            ),
                                        },
                                        {
                                            leftProperty: "Электронная почта",
                                            rightProperty: (
                                                <>
                                                    <Link
                                                        href={
                                                            "mailto:385391@mail.ru"
                                                        }
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                typography:
                                                                    "overline",
                                                                m: 0,
                                                                p: 0,
                                                                fontSize: {
                                                                    xs: "1.0rem",
                                                                    md: "0.9rem",
                                                                },
                                                                fontWeight: 500,
                                                                textAlign: {
                                                                    xs: "center",
                                                                    lg: "left",
                                                                },
                                                                color: "black",
                                                            }}
                                                        >
                                                            385391@mail.ru
                                                        </Typography>
                                                    </Link>
                                                </>
                                            ),
                                        },
                                    ],
                                }}
                            />
                        </Grid>

                        <Grid
                            size={{ xs: 12, sm: 6, md: 12 }}
                            order={{ xs: 2, md: 0 }}
                        >
                            <TableContainer component={Paper} elevation={12}>
                                <Table
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
                                                        textTransform:
                                                            "uppercase",
                                                        letterSpacing: "3px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    График работы
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow sx={{ verticalAlign: "top" }}>
                                            <TableCell
                                                sx={{ height: "3.0rem" }}
                                            >
                                                <Typography
                                                    variant="overline"
                                                    sx={{
                                                        lineHeight: "1.2rem",
                                                    }}
                                                >
                                                    Понедельник - Пятница
                                                </Typography>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Typography
                                                    sx={{
                                                        typography: "overline",
                                                        m: 0,
                                                        p: 0,
                                                        fontSize: {
                                                            xs: "0.8rem",
                                                            md: "0.8rem",
                                                        },
                                                        fontWeight: 500,
                                                        lineHeight: "1.2rem",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    с 9.00 до 18.00
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow sx={{ verticalAlign: "top" }}>
                                            <TableCell
                                                sx={{ height: "3.0rem" }}
                                            >
                                                <Typography
                                                    variant="overline"
                                                    sx={{
                                                        lineHeight: "1.2rem",
                                                    }}
                                                >
                                                    Суббота
                                                </Typography>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Typography
                                                    sx={{
                                                        typography: "overline",
                                                        m: 0,
                                                        p: 0,
                                                        fontSize: {
                                                            xs: "0.8rem",
                                                            md: "0.8rem",
                                                        },
                                                        fontWeight: 500,
                                                        lineHeight: "1.2rem",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    с 9.00 до 15.00
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: "secondary.main",
                                                    }}
                                                >
                                                    <strong>
                                                        По субботам принимаются
                                                        только звонки и почта,
                                                        офис закрыт!
                                                    </strong>
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow sx={{ verticalAlign: "top" }}>
                                            <TableCell
                                                sx={{ height: "3.0rem" }}
                                            >
                                                <Typography
                                                    variant="overline"
                                                    sx={{
                                                        lineHeight: "1.2rem",
                                                        color: "red",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Воскресенье
                                                </Typography>
                                            </TableCell>

                                            <TableCell align="left">
                                                <Typography
                                                    sx={{
                                                        typography: "overline",
                                                        m: 0,
                                                        p: 0,
                                                        fontSize: {
                                                            xs: "0.8rem",
                                                            md: "0.8rem",
                                                        },
                                                        fontWeight: 500,
                                                        lineHeight: "1.2rem",
                                                        textAlign: "left",
                                                        color: "red",
                                                    }}
                                                >
                                                    Выходной
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }} order={10}>
                        <Paper elevation={12} sx={{ mt: 6 }}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "800px",
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                <iframe
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: "1px solid #e6e6e6",
                                        borderRadius: "8px",
                                        boxSizing: "border-box",
                                    }}
                                    src="https://yandex.ru/maps-reviews-widget/1029466930?comments"
                                ></iframe>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid
                        size={{ xs: 12, sm: 6 }}
                        sx={{ justifyContent: "center" }}
                        order={11}
                    >
                        <TableContainer
                            component={Paper}
                            elevation={12}
                            sx={{
                                mt: 6,
                                // maxWidth: "500px",
                                alignSelf: "center",
                            }}
                        >
                            <Table
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
                                                Реквизиты организации
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[
                                        {
                                            leftCol: (
                                                <>
                                                    Наименование юридического
                                                    лица
                                                </>
                                            ),
                                            rightCol: <>ООО «Тульские Окна»</>,
                                        },
                                        {
                                            leftCol: (
                                                <>
                                                    Юридический и фактический
                                                    адрес
                                                </>
                                            ),
                                            rightCol: (
                                                <>
                                                    300022, г. Тула, пос.
                                                    Октябрьский, 6ой проезд 1”Б”
                                                </>
                                            ),
                                        },
                                        {
                                            leftCol: <>ИНН/КПП</>,
                                            rightCol: (
                                                <>
                                                    7103052973/
                                                    <wbr />
                                                    710301001
                                                </>
                                            ),
                                        },
                                        {
                                            leftCol: <>Расчётный счёт</>,
                                            rightCol: (
                                                <>
                                                    40702.810.2.
                                                    <wbr />
                                                    66000007263 в ОТДЕЛЕНИИ
                                                    N8604 СБЕРБАНКА РОССИИ
                                                </>
                                            ),
                                        },
                                        {
                                            leftCol: <>Корр. счёт</>,
                                            rightCol: (
                                                <>
                                                    30101.810.3.
                                                    <wbr />
                                                    00000000608
                                                </>
                                            ),
                                        },
                                        {
                                            leftCol: <>Адрес банка</>,
                                            rightCol: (
                                                <>
                                                    300000, г. ТУЛА, ПЛ.КРЕСТО
                                                    <wbr />
                                                    ВОЗДВИЖЕНСКАЯ, 1
                                                </>
                                            ),
                                        },
                                        {
                                            leftCol: <>БИК</>,
                                            rightCol: <>047003608</>,
                                        },
                                        {
                                            leftCol: <>ОГРН</>,
                                            rightCol: <>1187154000681</>,
                                        },
                                        {
                                            leftCol: <>ОКПО</>,
                                            rightCol: <>23280172</>,
                                        },
                                        {
                                            leftCol: <>ОКВЭД</>,
                                            rightCol: <>43.32</>,
                                        },
                                        {
                                            leftCol: <>ОКАТО</>,
                                            rightCol: <>70401364000</>,
                                        },
                                        {
                                            leftCol: <>Генеральный директор</>,
                                            rightCol: (
                                                <>Бурыкин Игорь Юрьевич</>
                                            ),
                                        },
                                        {
                                            leftCol: (
                                                <>Действует на основании</>
                                            ),
                                            rightCol: <>Устава</>,
                                        },
                                    ].map((tableRow, index) => {
                                        return (
                                            <TableRow
                                                key={index}
                                                sx={{ verticalAlign: "top" }}
                                            >
                                                <TableCell
                                                    sx={{ height: "3.0rem" }}
                                                >
                                                    <Typography
                                                        variant="overline"
                                                        sx={{
                                                            lineHeight:
                                                                "1.2rem",
                                                        }}
                                                    >
                                                        {tableRow.leftCol}
                                                    </Typography>
                                                </TableCell>

                                                <TableCell align="left">
                                                    <Typography
                                                        sx={{
                                                            typography:
                                                                "overline",
                                                            m: 0,
                                                            p: 0,
                                                            fontSize: {
                                                                xs: "0.7rem",
                                                                md: "0.8rem",
                                                            },
                                                            fontWeight: 500,
                                                            lineHeight:
                                                                "1.2rem",
                                                            textAlign: "left",
                                                            textWrap: "wrap",
                                                        }}
                                                    >
                                                        {tableRow.rightCol}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
