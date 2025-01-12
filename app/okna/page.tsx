import React from "react";
import { Container, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";

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
            >
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h1">Частным лицам</Typography>
                    <Typography></Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <ButtonImage
                        caption="Окна в квартиру"
                        image={okna_pvc}
                        link={"/okna/apartments"}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <ButtonImage
                        caption="Окна в коттедж"
                        image={okna_alu}
                        link={"/okna/cottage"}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <ButtonImage caption="Окна на дачу" image={okna_alu} />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Divider />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Typography variant="h1">Предприятиям</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <ButtonImage caption="Окна в офис" image={okna_pvc} />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <ButtonImage caption="Окна в цех" image={okna_alu} />
                </Grid>
            </Grid>
        </Container>
    );
}
