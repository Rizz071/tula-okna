"use client";

import * as React from "react";
import { Container, Box, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import BreadCrumbs from "./BreadCrumbs";
import NavbarHigherRow from "./NavbarHigherRow";
import NavbarLowerRow from "./NavbarLowerRow";
import ThinMobileMenu from "./ThinMobileMenu";
import { IMainMenuItem } from "@/app/lib/types";
import WindowSharpIcon from "@mui/icons-material/WindowSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import MeetingRoomSharpIcon from "@mui/icons-material/MeetingRoomSharp";
import ViewArraySharpIcon from "@mui/icons-material/ViewArraySharp";
import DoorSlidingSharpIcon from "@mui/icons-material/DoorSlidingSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";

const Navbar = () => {
    const theme = useTheme();
    const greaterThanSM = useMediaQuery(theme.breakpoints.up("sm"));

    const menuItems: IMainMenuItem[] = [
        { name: "главная", link: "/", icon: HomeSharpIcon },
        { name: "окна", link: "/okna", icon: WindowSharpIcon },
        { name: "двери", link: "/", icon: MeetingRoomSharpIcon },
        { name: "балконы", link: "/balkony", icon: ViewArraySharpIcon },
        { name: "порталы", link: "/", icon: DoorSlidingSharpIcon },
        { name: "фасадное остекление", link: "/", icon: AppsSharpIcon },
    ];

    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 300,
                boxShadow: "0 10px 20px -2px gray",
            }}
        >
            {greaterThanSM && (
                <Container maxWidth={"lg"} sx={{ p: 0 }}>
                    <AppBar
                        position="relative"
                        sx={{
                            bgcolor: "white",
                            color: "black",
                        }}
                        elevation={0}
                    >
                        <NavbarHigherRow menuItems={menuItems} />
                        <NavbarLowerRow menuItems={menuItems} />
                        <BreadCrumbs />
                    </AppBar>
                </Container>
            )}

            {!greaterThanSM && (
                <AppBar
                    position="relative"
                    sx={{
                        bgcolor: "white",
                        color: "black",
                    }}
                    elevation={0}
                >
                    <NavbarHigherRow menuItems={menuItems} />
                    <ThinMobileMenu menuItems={menuItems} />
                </AppBar>
            )}
        </Box>
    );
};

export default Navbar;
