import { Paper, Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import ProductionTypeCard from "./ProductionTypeCard";
import { IProductionCard } from "../lib/types";

interface Props {
    cardsArray: IProductionCard[];
}

const ProductionCards = ({ cardsArray }: Props) => {
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
                    transform: "translate(-50%, 0%)",
                    left: "50%",
                    maxWidth: "lg",
                }}
            >
                <Box padding={6}>
                    <Grid
                        container
                        rowSpacing={7}
                        columnSpacing={4}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {cardsArray.map((card, index) => {
                            return (
                                <Grid
                                    size={{ xs: 12, sm: 4, md: 6, lg: 4 }}
                                    key={index}
                                >
                                    <ProductionTypeCard
                                        imgSrc={card.image}
                                        caption={card.caption}
                                        link={card.link}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>

                    {/* <Grid
                        container
                        rowSpacing={7}
                        columnSpacing={4}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid size={{ xs: 12, sm: 4, md: 6, lg: 4 }}>
                            <ProductionTypeCard
                                imgSrc={apartements1}
                                caption={"Остекление квартир"}
                                link={"/okna/apartments"}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4, md: 6, lg: 4 }}>
                            <ProductionTypeCard
                                imgSrc={Front_small_2}
                                caption={"Остекление и отделка балконов"}
                                link={"15 000"}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4, md: 6, lg: 4 }}>
                            <ProductionTypeCard
                                imgSrc={House}
                                caption={"Остекление домов"}
                                link="/okna/cottage"
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 4, md: 6, lg: 4 }}>
                            <ProductionTypeCard
                                imgSrc={dacha1}
                                caption={"Остекление дач"}
                                link={"6 000"}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 4, md: 6, lg: 4 }}>
                            <ProductionTypeCard
                                imgSrc={Doors}
                                caption={"Входные двери для предприятий"}
                                link={"15 000"}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4, md: 6, lg: 4 }}>
                            <ProductionTypeCard
                                imgSrc={Front_small_3}
                                caption={"Раздвижные двери-порталы"}
                                link={"59 000"}
                            />
                        </Grid>
                    </Grid> */}
                </Box>
            </Paper>
        </Container>
    );
};

export default ProductionCards;
