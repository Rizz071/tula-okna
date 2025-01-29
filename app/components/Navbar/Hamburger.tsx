"use client";
import * as React from "react";
import {
    Box,
    IconButton,
    Drawer,
    Grid2 as Grid,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import WindowSharpIcon from "@mui/icons-material/WindowSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import MeetingRoomSharpIcon from "@mui/icons-material/MeetingRoomSharp";
import ViewArraySharpIcon from "@mui/icons-material/ViewArraySharp";
import DoorSlidingSharpIcon from "@mui/icons-material/DoorSlidingSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ImageSearchSharpIcon from "@mui/icons-material/ImageSearchSharp";
import { IMainMenuItem } from "@/app/lib/types";

const Hamburger = ({ menuItems }: { menuItems: IMainMenuItem[] }) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon sx={{ fontSize: 45, p: 0, m: 0 }} />
            </IconButton>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        width: 250,
                        height: "100%",
                        bgcolor: "#333",
                        color: "white",
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                >
                    <Grid container>
                        {menuItems.map((item, index) => {
                            return (
                                <Grid size={{ xs: 12 }} key={index}>
                                    <Link
                                        href={item.link}
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                            width: "100%",
                                        }}
                                    >
                                        <Stack
                                            direction={"row"}
                                            sx={{
                                                width: "auto",
                                                m: 2,
                                            }}
                                        >
                                            {item.icon && (
                                                <item.icon
                                                    sx={{
                                                        mr: 2,
                                                        alignSelf: "center",
                                                        height: "35px",
                                                        width: "auto",
                                                    }}
                                                />
                                            )}
                                            <Typography
                                                sx={{
                                                    alignSelf: "center",
                                                    m: 0,
                                                    p: 0,
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Stack>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Drawer>
        </>
    );
};

export default Hamburger;
