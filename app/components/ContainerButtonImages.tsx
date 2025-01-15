import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import ButtonImage from "@/app/components/ButtonImage";

import apartmentsImg from "@/public/images/apartmements2_tmblr.jpeg";
import cottageImg from "@/public/images/dom3_tmblr.jpg";
import dachaImg from "@/public/images/dacha1_tmblr.jpeg";
import { IButtonImage } from "../lib/types";

interface Props {
    mainTitle: string;
    mainTitleDescription: string;
    buttonsArray: IButtonImage[];
}

const ContainerButtonImages = ({
    mainTitle,
    mainTitleDescription,
    buttonsArray,
}: Props) => {
    return (
        <Container maxWidth={"lg"}>
            <Grid
                container
                marginTop={0}
                columnSpacing={1}
                rowSpacing={6}
                direction={"row"}
                justifyContent={"space-evenly"}
            >
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h1">{mainTitle}</Typography>
                    <Typography sx={{ textAlign: "center" }}>
                        {mainTitleDescription}
                    </Typography>
                </Grid>

                {buttonsArray.map((button) => {
                    return (
                        <Grid size={{ xs: 12, md: 5 }} maxWidth={300}>
                            <ButtonImage
                                caption={button.caption}
                                image={button.image}
                                link={button.link}
                                description={button.description}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default ContainerButtonImages;
