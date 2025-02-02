import { useState } from "react";
import { Toolbar, Box, Button, Typography, Stack } from "@mui/material";
import Link from "next/link";
import PhoneMailButton from "../PhoneMainButton";
import Hamburger from "./Hamburger";
import logoImage from "@/public/images/Logo1_horiz_3.svg";
import Image from "next/image";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { IMainMenuItem } from "@/app/lib/types";

const NavbarHigherRow = ({ menuItems }: { menuItems: IMainMenuItem[] }) => {
    const [isContactsVisible, setIsContactsVisible] = useState<boolean>(false);

    const DESKTOP_HIGH_ROW_HEIGHT = "90px";
    const MOBILE_HIGH_ROW_HEIGHT = "70px";

    return (
        <Toolbar
            sx={{
                justifyContent: "space-between",
                fontWeight: "light",
                mt: 1,
                mb: 1,
                height: {
                    xs: MOBILE_HIGH_ROW_HEIGHT,
                    sm: DESKTOP_HIGH_ROW_HEIGHT,
                },
                columnGap: 2,
            }}
        >
            <Stack
                direction={"column"}
                sx={{
                    height: {
                        xs: MOBILE_HIGH_ROW_HEIGHT,
                        sm: DESKTOP_HIGH_ROW_HEIGHT,
                    },
                }}
            >
                <Link href={"/"} style={{ width: "100%", height: "100%" }}>
                    <Image
                        src={logoImage}
                        width={0}
                        height={0}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        alt="Company logo"
                    />
                </Link>
            </Stack>

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

            <Box
                sx={{
                    display: {
                        xs: "flex",
                        sm: "none",
                    },
                }}
            >
                <Hamburger menuItems={menuItems} />
            </Box>
        </Toolbar>
    );
};

export default NavbarHigherRow;
