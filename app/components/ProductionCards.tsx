import {
    Paper,
    Typography,
    Divider,
    Container,
    Box,
    Grid,
    Link as MuiLink,
} from "@mui/material";

import ProductionTypeCard from "./ProductionTypeCard";
import konstr1 from "../../public/images/konstr1.webp";
import Front_small_2 from "../../public/images/Front_small_2.webp";
import Front_small_3 from "../../public/images/Front_small_3.webp";
import House from "../../public/images/House.webp";
import Doors from "../../public/images/Doors.webp";
import apartements1 from "../../public/images/apartements3_104px.jpg";
import dacha1 from "../../public/images/dacha1_104px.jpeg";

import NextLink from "next/link";

const ProductionCards = () => {
    return (
        <Container>
            <Paper
                elevation={4}
                square={false}
                color="white"
                sx={{
                    position: "relative",
                    zIndex: "100",
                    textAlign: "center",
                    mt: {
                        xs: -5,
                        sm: -5,
                        md: -10,
                        lg: -15,
                        xl: -11,
                    },

                    // mt: {
                    //     xs: -35.3,
                    //     sm: -32,
                    //     md: -27,
                    //     lg: -15,
                    //     xl: -11,
                    // },
                    transform: "translate(-50%, 0%)",
                    left: "50%",
                    maxWidth: "lg",
                }}
            >
                {/* <Typography
                    fontWeight={"light"}
                    paddingY={1}
                    sx={{
                        fontSize: {
                            xs: "1rem",
                            sm: "1.2rem",
                            md: "1.5rem",
                            lg: "2rem",
                        },
                    }}
                >
                    Выбор продукции
                </Typography>
                <Divider /> */}
                <Box padding={6}>
                    <Grid
                        container
                        rowSpacing={7}
                        columnSpacing={4}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={apartements1}
                                caption={"Оптимальные окна ПВХ в квартиру"}
                                link={"6 000"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={Front_small_2}
                                caption={
                                    "Холодное и теплое балконное остекление"
                                }
                                link={"15 000"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <MuiLink
                                component={NextLink}
                                href="/okna"
                                color="inherit"
                                underline="none"
                            >
                                <ProductionTypeCard
                                    imgSrc={House}
                                    caption={
                                        "Энергоэффективное остекление домов"
                                    }
                                    link=""
                                />
                            </MuiLink>
                        </Grid>

                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={dacha1}
                                caption={"Недорогие окна ПВХ на дачу"}
                                link={"6 000"}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={Doors}
                                caption={"Входные группы Алюминий и ПВХ"}
                                link={"15 000"}
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={Fasad1}
                                caption={
                                    "Фасадное остекление алюминиевым профилем"
                                }
                                link={""}
                            />
                        </Grid> */}
                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={Front_small_3}
                                caption={"Раздвижные тёплые двери-порталы"}
                                link={"59 000"}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default ProductionCards;
