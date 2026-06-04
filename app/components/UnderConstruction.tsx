import under_construction_logo from "@/public/images/under_construction.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const UnderConstruction = () => {
    return (
        <Container maxWidth={"lg"}>
            <Grid container sx={{ m: 10 }}>
                <Grid size={6}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant={"h3"}>
                            Данная страница находится на реконструкции.
                        </Typography>
                        <Typography variant={"h3"} sx={{ mt: 4 }}>
                            Скоро работы закончатся и содержание вернётся!
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Image
                        src={under_construction_logo}
                        alt={"Страница на реконструкции"}
                        width={0}
                        height={0}
                        unoptimized
                        quality={100}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default UnderConstruction;
