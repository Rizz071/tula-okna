import React from "react";
import {
    Container,
    Box,
    Typography,
    Grid,
    Paper,
    Divider,
} from "@mui/material";

import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";

import ButtonImage from "../components/ButtonImage";

import okna_pvc from "../../public/images/about2.jpg";
import okna_alu from "../../public/images/dveri/alumarks70.jpg";

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
                <Grid item marginY={0}>
                    <ButtonImage
                        caption="пластиковые окна"
                        image={okna_pvc}
                        link={"/okna/plastikovye-okna"}
                    />
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="алюминиевые окна" image={okna_alu} />
                </Grid>
                <Grid item marginY={0}>
                    <ButtonImage caption="двери" image={okna_alu} />
                </Grid>
            </Grid>
        </Container>
    );
}
