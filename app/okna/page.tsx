import React from "react";
import { Container, Typography, Grid, Divider } from "@mui/material";

import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";

import ButtonImage from "@/app/components/ButtonImage";

import okna_pvc from "@/public/images/about2.jpg";
import okna_alu from "@/public/images/dveri/alumarks70.jpg";

export default function Page() {
    return (
        <Container maxWidth={"lg"}>
            <Grid
                container
                marginTop={0}
                columnSpacing={1}
                rowSpacing={10}
                direction={"row"}
                alignItems={"flex-start"}
                justifyContent={"center"}
            >
                <Grid item xs={12}>
                    <Typography variant="h1">Окна ВЕКА</Typography>
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="VEKA Euroline 58" image={okna_pvc} />
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="VEKA Softline 70" image={okna_alu} />
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="VEKA Softline 82" image={okna_alu} />
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h1">Окна РЕХАУ</Typography>
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="REHAU Blitz 60" image={okna_pvc} />
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage
                        caption="REHAU Constanta 60"
                        image={okna_alu}
                    />
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="REHAU Grazio 70" image={okna_alu} />
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="REHAU Delight 70" image={okna_alu} />
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="REHAU Intelio 80" image={okna_alu} />
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h1">Окна КАЛЕВА</Typography>
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="KALEVA Profi 60" image={okna_pvc} />
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage
                        caption="KALEVA Standart 70"
                        image={okna_alu}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
