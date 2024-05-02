import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import logoImage from "../../public/images/logo.png";
import AccountBalanceWalletSharpIcon from "@mui/icons-material/AccountBalanceWalletSharp";
import MoreTimeSharpIcon from "@mui/icons-material/MoreTimeSharp";
import DrawerMobileMenu from "./DrawerMobileMenu";
import { Container } from "@mui/material";

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
                            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                <Image src={logoImage} alt="Site logo" />
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
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                flexDirection: {
                                    sm: "column",
                                    lg: "row",
                                },
                                justifyContent: "space-between",
                                gap: { xs: 0, md: 1 },
                            }}
                        >
                            <Button
                                sx={{
                                    color: "#e74f21",
                                }}
                                startIcon={
                                    <AccountBalanceWalletSharpIcon
                                        sx={{
                                            width: { lg: 35 },
                                            height: { lg: 35 },
                                        }}
                                    />
                                }
                            >
                                <Typography color="#e74f21">
                                    Калькулятор окон
                                </Typography>
                            </Button>
                            <Button
                                sx={{ color: "#e74f21" }}
                                startIcon={
                                    <MoreTimeSharpIcon
                                        sx={{
                                            width: { lg: 35 },
                                            height: { lg: 35 },
                                        }}
                                    />
                                }
                            >
                                <Typography color="#e74f21">
                                    Рассрочка платежа
                                </Typography>
                            </Button>
                        </Box>
                        <Box
                            sx={{ display: { xs: "none", md: "flex" } }}
                            flexDirection={"column"}
                            alignSelf={"center"}
                            gap={1}
                        >
                            <Box display={"flex"} flexDirection={"row"} gap={2}>
                                <Typography fontWeight="fontWeightLight">
                                    О компании
                                </Typography>
                                <Typography fontWeight="fontWeightLight">
                                    Услуги
                                </Typography>
                            </Box>
                            <Box display={"flex"} flexDirection={"row"} gap={2}>
                                <Typography fontWeight="fontWeightLight">
                                    Как заказать
                                </Typography>
                                <Typography fontWeight="fontWeightLight">
                                    Контакты
                                </Typography>
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
                                variant="subtitle2"
                                fontWeight={"light"}
                            >
                                Ежедневно с 9:00 до 19:00
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                fontWeight={"light"}
                            >
                                Телефон в г.Туле
                            </Typography>
                            <Typography variant="h5" fontWeight={"light"}>
                                +7 (4872) 38-55-50
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                fontWeight={"light"}
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
                        }}
                    >
                        <Typography>ОКНА И ДВЕРИ</Typography>
                        <Typography>БАЛКОНЫ</Typography>
                        <Typography>ЦВЕТОВЫЕ РЕШЕНИЯ</Typography>
                        <Typography>ПОРТАЛЫ</Typography>
                        <Typography>ЦЕНЫ</Typography>
                        <Typography>ПОРТФОЛИО</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
};

export default Navbar;
