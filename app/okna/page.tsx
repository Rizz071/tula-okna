import React from "react";
import { Container, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";

import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";

import ButtonImage from "@/app/components/ButtonImage";

import apartmentsImg from "@/public/images/apartmements2_tmblr.jpeg";
import cottageImg from "@/public/images/dom3_tmblr.jpg";
import dachaImg from "@/public/images/dacha1_tmblr.jpeg";
import okna_alu from "@/public/images/dveri/alumarks70.jpg";

export default function Page() {
    return (
        <Container maxWidth={"lg"}>
            <Grid
                container
                marginTop={0}
                columnSpacing={1}
                // rowSpacing={10}
                direction={"row"}
                // alignItems={""}
                justifyContent={"space-evenly"}
            >
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h1">
                        Выберите цель остекления
                    </Typography>
                    <Typography align={"center"}>
                        Для каждого объекта мы предлагаем свои варианты оконных
                        блоков
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }} maxWidth={300}>
                    <ButtonImage
                        caption="Окна в квартиру"
                        image={apartmentsImg}
                        link={"/okna/apartments"}
                    />
                    <Typography align={"center"}>
                        Защищают от продувания на высоких этажах.
                        <br />
                        Глушат шум улицы.
                        <br />
                        Впускают много света.
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }} maxWidth={300}>
                    <ButtonImage
                        caption="Окна в коттедж"
                        image={cottageImg}
                        link={"/okna/cottage"}
                    />
                    <Typography align={"center"}>
                        Экономят деньги на отоплении зимой и сохраняют прохладу
                        летом при круглогодичное проживании.
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }} maxWidth={300}>
                    <ButtonImage caption="Окна на дачу" image={dachaImg} />
                    <Typography align={"center"}>
                        Без лишних переплат, только для летнего проживания.
                    </Typography>
                </Grid>

                {/* <Grid size={{ xs: 12 }}>
                    <Divider />
                </Grid> */}

                {/* <Grid size={{ xs: 12 }}>
                    <Typography variant="h1">Предприятиям</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <ButtonImage caption="Окна в офис" image={apartmentsImg} />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <ButtonImage caption="Окна в цех" image={okna_alu} />
                </Grid> */}
            </Grid>
        </Container>
    );
}
