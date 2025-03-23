import { Paper, Container, Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import ProductionCard from "./ProductionCard";
import { IProductionCard } from "../../lib/types";

interface Props {
    title: string;
    cardsArray: IProductionCard[];
}

const ProductionCardsContainer = ({ title, cardsArray }: Props) => {
    return (
        <Container>
            <Paper
                elevation={8}
                // square={true}
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
                {title && (
                    <Box
                        sx={{
                            bgcolor: "#333",
                            borderRadius: "4px 4px 0 0",
                        }}
                    >
                        <Typography
                            sx={{
                                typography: "h5",
                                fontSize: { xs: "1.1rem", sm: "1.5rem" },
                                textAlign: "center",
                                py: 2,
                                textTransform: "uppercase",
                                color: "white",
                                fontWeight: 300,
                                letterSpacing: "2px",
                            }}
                        >
                            {title}
                        </Typography>
                        <Divider sx={{ mx: 10 }} />
                    </Box>
                )}
                <Grid
                    container
                    rowSpacing={7}
                    columnSpacing={4}
                    sx={{
                        px: { xs: 0, sm: 6 },
                        py: 6,
                        justifyContent: "space-evenly",
                    }}
                    padding={6}
                >
                    {cardsArray.map((card, index) => {
                        return (
                            <Grid
                                size={{
                                    xs: 12,
                                    sm: 4,
                                }}
                                key={index}
                            >
                                <ProductionCard
                                    imgSrc={card.image}
                                    caption={card.caption}
                                    link={card.link}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Paper>
        </Container>
    );
};

export default ProductionCardsContainer;
