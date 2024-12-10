import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import logoImage from "../../public/images/Logo1.svg";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import DrawerMobileMenu from "./DrawerMobileMenu";
import { Container } from "@mui/material";
import Link from "next/link";
import BreadCrumbs from "./BreadCrumbs";

const Navbar = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        bgcolor: "white",
                        color: "black",
                    }}
                    elevation={0}
                >
                    <Toolbar
                        sx={{
                            justifyContent: "space-between",
                            fontWeight: "light",
                            flexWrap: "wrap",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignContent: "center",
                                width: { xs: "100%", sm: "auto" },
                            }}
                        >
                            <Box
                                sx={{
                                    mr: 2,
                                    display: {
                                        xs: "flex",
                                        md: "none",
                                        flexGrow: 1,
                                    },
                                }}
                            >
                                <DrawerMobileMenu />
                            </Box>
                            <Link href={"/"} style={{ textDecoration: "none" }}>
                                <Box
                                    sx={{
                                        display: { xs: "none", sm: "block" },
                                        mt: 1,
                                    }}
                                >
                                    <Image
                                        src={logoImage}
                                        height={128}
                                        alt="Site logo"
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: { xs: "block", sm: "none" },
                                        my: "auto",
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography variant="h5">
                                        ТУЛЬСКИЕ ОКНА
                                    </Typography>
                                    <Typography variant="caption">
                                        светопрозрачные конструкции
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                flexDirection: {
                                    sm: "column",
                                    lg: "row",
                                },
                                justifyContent: {
                                    sm: "flex-start",
                                    lg: "space-between",
                                },
                                alignContent: {
                                    sm: "flex-start",
                                    lg: "space-between",
                                },
                                gap: { sm: 0, lg: 1 },
                            }}
                        >
                            <Button
                                sx={{
                                    color: "#e74f21",
                                    paddingY: "3px",
                                    mr: "auto",
                                }}
                                startIcon={
                                    <CalculateOutlinedIcon
                                        sx={{
                                            width: { lg: 35 },
                                            height: { lg: 35 },
                                        }}
                                    />
                                }
                            >
                                <Typography
                                    color="#e74f21"
                                    fontWeight={"light"}
                                    fontSize={"large"}
                                    margin={0}
                                    sx={{ textTransform: "none" }}
                                >
                                    Калькулятор окон
                                </Typography>
                            </Button>
                            <Button
                                sx={{
                                    color: "#e74f21",
                                    paddingY: "3px",
                                    mr: "auto",
                                }}
                                startIcon={
                                    <AccountBalanceWalletOutlinedIcon
                                        sx={{
                                            width: { lg: 35 },
                                            height: { lg: 35 },
                                        }}
                                    />
                                }
                            >
                                <Typography
                                    color="#e74f21"
                                    fontWeight={"light"}
                                    sx={{ textTransform: "none" }}
                                    fontSize={"large"}
                                    margin={0}
                                >
                                    Подбор типа окна
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            sx={{ display: { xs: "none", md: "flex" } }}
                            flexDirection={"row"}
                            alignSelf={"center"}
                            gap={2}
                        >
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={1}
                            >
                                {/* <Typography fontWeight="fontWeightLight">
                                    О компании
                                </Typography> */}
                                <Typography margin={0}>
                                    Порядок работы
                                </Typography>
                                <Typography margin={0}>
                                    Схема проезда
                                </Typography>
                            </Box>
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={1}
                            >
                                {/* <Typography fontWeight="fontWeightLight">
                                    Услуги
                                </Typography> */}
                            </Box>
                        </Box>
                        <Box
                            sx={{ display: { xs: "none", sm: "flex" } }}
                            flexDirection={"column"}
                            alignSelf={"center"}
                            justifyContent={"flex-end"}
                            textAlign={"right"}
                        >
                            <Typography
                                fontSize={"0.9rem"}
                                lineHeight={"1.2rem"}
                                fontWeight={"light"}
                            >
                                Пн - Пт с 9:00 до 19:00
                            </Typography>
                            {/* <Typography
                                fontSize={"0.9rem"}
                                lineHeight={"1.2rem"}
                                fontWeight={"light"}
                            >
                                Телефон в г.Туле
                            </Typography> */}
                            <Typography variant="h5">
                                <span style={{ fontWeight: "lighter" }}>
                                    +7 (4872)
                                </span>{" "}
                                38-55-50
                            </Typography>
                            <Typography
                                fontSize={"0.9rem"}
                                // lineHeight={"1.2rem"}
                                fontWeight={"light"}
                                color="#e74f21"
                                margin={0}
                            >
                                Почта: 385391@mail.ru
                            </Typography>
                        </Box>
                    </Toolbar>
                    <Toolbar
                        sx={{
                            display: { xs: "none", md: "flex" },
                            flexDirection: "row",
                            justifyContent: "space-between",
                            letterSpacing: { md: ".2rem" },
                            textAlign: "center",
                            gap: { md: 4 },
                            mb: 2,
                        }}
                    >
                        <Link href={"/okna"} style={{ textDecoration: "none" }}>
                            <Typography>ОКНА</Typography>
                        </Link>
                        <Typography>ДВЕРИ</Typography>
                        <Typography>БАЛКОНЫ</Typography>
                        <Typography>ПОРТАЛЫ</Typography>
                        <Typography>ФАСАДНОЕ ОСТЕКЛЕНИЕ</Typography>
                        <Typography>ЦЕНЫ</Typography>
                        <Typography>ПОРТФОЛИО</Typography>

                        {/* <Typography>ПРОДУКЦИЯ</Typography>
                        <Typography>ЦЕНЫ</Typography>
                        <Typography>ПОРТФОЛИО</Typography> */}
                    </Toolbar>
                    <BreadCrumbs />
                </AppBar>
            </Box>
        </Container>
    );
};

export default Navbar;
