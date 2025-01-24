"use client";

import * as React from "react";
import { Container, Box, Toolbar, Typography, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import logoImage from "@/public/images/Logo1_horiz.svg";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import DrawerMobileMenu from "./DrawerMobileMenu";
import Link from "next/link";
import BreadCrumbs from "./BreadCrumbs";
import PhoneMailButton from "../PhoneMainButton";

const Navbar = () => {
    const [isContactsVisible, setIsContactsVisible] =
        React.useState<boolean>(false);

    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 300,
                boxShadow: { xs: "0 10px 20px -2px gray", xl: 0 },
            }}
        >
            <Container maxWidth={"lg"}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar
                        position="relative"
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
                                    width: { xs: "100%", md: "auto" },
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
                                <Link
                                    href={"/"}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Box
                                        sx={{
                                            // display: { sm: "block" },
                                            alignSelf: "flex-end",
                                            mt: 2,
                                            height: "100px",
                                        }}
                                    >
                                        <Image
                                            src={logoImage}
                                            height={100}
                                            alt="Company logo"
                                        />
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
                                    alignSelf: "flex-end",
                                }}
                            >
                                <Button
                                    sx={{
                                        color: "primary",
                                        alignSelf: "flex-end",
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
                                        color={"primary"}
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
                                        color: "primary",
                                        paddingY: "3px",
                                        mr: "auto",
                                    }}
                                    startIcon={
                                        <MapOutlinedIcon
                                            sx={{
                                                width: { lg: 35 },
                                                height: { lg: 35 },
                                            }}
                                        />
                                    }
                                >
                                    <Typography
                                        color="primary"
                                        fontWeight={"light"}
                                        sx={{ textTransform: "none" }}
                                        fontSize={"large"}
                                        margin={0}
                                    >
                                        Схема проезда
                                    </Typography>
                                </Button>
                            </Box>

                            <Box alignSelf={"flex-end"}>
                                <PhoneMailButton
                                    isContactsVisible={isContactsVisible}
                                    setIsContactsVisible={setIsContactsVisible}
                                />
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
                            <Link
                                href={"/okna"}
                                style={{ textDecoration: "none" }}
                            >
                                <Typography
                                    fontWeight={400}
                                    color="black"
                                    letterSpacing={1.5}
                                >
                                    ОКНА
                                </Typography>
                            </Link>
                            <Typography
                                fontWeight={400}
                                color="black"
                                letterSpacing={1.5}
                            >
                                ДВЕРИ
                            </Typography>
                            <Link
                                href={"/balkony"}
                                style={{ textDecoration: "none" }}
                            >
                                <Typography
                                    fontWeight={400}
                                    color="black"
                                    letterSpacing={1.5}
                                >
                                    БАЛКОНЫ
                                </Typography>
                            </Link>
                            <Typography
                                fontWeight={400}
                                color="black"
                                letterSpacing={1.5}
                            >
                                ПОРТАЛЫ
                            </Typography>
                            <Typography
                                fontWeight={400}
                                color="black"
                                letterSpacing={1.5}
                            >
                                ФАСАДНОЕ ОСТЕКЛЕНИЕ
                            </Typography>
                            <Typography
                                fontWeight={400}
                                color="black"
                                letterSpacing={1.5}
                            >
                                ЦЕНЫ
                            </Typography>
                            <Typography fontWeight={400} color="black">
                                ПОРТФОЛИО
                            </Typography>
                        </Toolbar>
                        <BreadCrumbs />
                    </AppBar>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
