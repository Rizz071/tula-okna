import {
    Paper,
    Typography,
    Divider,
    Container,
    Box,
    Grid,
} from "@mui/material";
import ProductionTypeCard from "./ProductionTypeCard";
import konstr1 from "../../public/images/konstr1.webp";
import Front_small_2 from "../../public/images/Front_small_2.webp";
import Front_small_3 from "../../public/images/Front_small_3.webp";
import House from "../../public/images/House.webp";
import Doors from "../../public/images/Doors.webp";
import Fasad1 from "../../public/images/Fasad1.webp";

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
                        xs: -35.3,
                        sm: -32,
                        md: -27,
                        lg: -15,
                        xl: -11,
                    },
                    transform: "translate(-50%, 0%)",
                    left: "50%",
                    maxWidth: "lg",
                }}
            >
                <Typography
                    fontWeight={"light"}
                    paddingY={1}
                    sx={{
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                    }}
                >
                    Продукция и услуги
                </Typography>
                <Divider />
                <Box padding={6}>
                    <Grid
                        container
                        rowSpacing={7}
                        columnSpacing={4}
                        // padding={6}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={konstr1}
                                caption={
                                    "Качественные окна ПВХ без свинца в составе"
                                }
                                price={"6 000"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={Front_small_2}
                                caption={
                                    "Холодное и теплое балконное остекление"
                                }
                                price={"15 000"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={House}
                                caption={
                                    "Энергоэффективное остекление домов и коттеджей"
                                }
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={Doors}
                                caption={"Входные группы Алюминий и ПВХ"}
                                price={"15 000"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={Fasad1}
                                caption={
                                    "Фасадное остекление алюминиевым профилем"
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={6} lg={4}>
                            <ProductionTypeCard
                                imgSrc={Front_small_3}
                                caption={"Раздвижные порталы большой площади"}
                                price={"59 000"}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default ProductionCards;
