"use client";

import * as React from "react";
import { Container, Box, useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import BreadCrumbs from "./BreadCrumbs";
import NavbarHigherRow from "./NavbarHigherRow";
import NavbarLowerRow from "./NavbarLowerRow";

const Navbar = () => {
    const theme = useTheme();
    const greaterThanSM = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Box
            sx={{
                position: "relative",
                zIndex: 300,
                boxShadow: "0 10px 20px -2px gray",
            }}
        >
            <Container maxWidth={"lg"} sx={{ p: 0 }}>
                <AppBar
                    position="relative"
                    sx={{
                        bgcolor: "white",
                        color: "black",
                    }}
                    elevation={0}
                >
                    <NavbarHigherRow />
                    <NavbarLowerRow />
                    {greaterThanSM && <BreadCrumbs />}
                </AppBar>
            </Container>
        </Box>
    );
};

export default Navbar;
