"use client";
import * as React from "react";
import { Box, IconButton, Drawer, Grid2 as Grid } from "@mui/material";
import MobileMenuItem from "./MobileMenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import WindowSharpIcon from "@mui/icons-material/WindowSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import MeetingRoomSharpIcon from "@mui/icons-material/MeetingRoomSharp";
import ViewArraySharpIcon from "@mui/icons-material/ViewArraySharp";
import DoorSlidingSharpIcon from "@mui/icons-material/DoorSlidingSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ImageSearchSharpIcon from "@mui/icons-material/ImageSearchSharp";

const MobileMenu = () => {
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
                        <Grid size={{ xs: 12 }}>
                            <MobileMenuItem
                                Icon={HomeSharpIcon}
                                text={"Начало"}
                                link="/"
                            />

                            <MobileMenuItem
                                Icon={WindowSharpIcon}
                                text={"Окна"}
                                link="/okna"
                            />

                            <MobileMenuItem
                                Icon={MeetingRoomSharpIcon}
                                text={"Двери"}
                                link="/doors"
                            />

                            <MobileMenuItem
                                Icon={ViewArraySharpIcon}
                                text={"Балконы"}
                                link="/balkony"
                            />

                            <MobileMenuItem
                                Icon={DoorSlidingSharpIcon}
                                text={"Порталы"}
                                link="/portals"
                            />

                            <MobileMenuItem
                                Icon={AppsSharpIcon}
                                text={"Фасадное остекление"}
                                link="/fasade"
                            />

                            <MobileMenuItem
                                Icon={ImageSearchSharpIcon}
                                text={"Портфолио"}
                                link="/portfolio"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </>
    );
};

export default MobileMenu;
