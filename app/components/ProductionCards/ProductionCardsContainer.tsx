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
                {title && (
                    <Box>
                        <Typography
                            fontWeight={"light"}
                            paddingY={3}
                            align="center"
                            sx={{
                                fontSize: {
                                    xs: "1rem",
                                    sm: "1.2rem",
                                    md: "1.5rem",
                                    lg: "2rem",
                                },
                            }}
                        >
                            {title}
                        </Typography>
                        <Divider />
                    </Box>
                )}
                <Box padding={6}>
                    <Grid
                        container
                        rowSpacing={7}
                        columnSpacing={4}
                        justifyContent={"space-evenly"}
                    >
                        {cardsArray.map((card, index) => {
                            return (
                                <Grid
                                    size={{
                                        xs: 12,
                                        sm: 5,
                                        md: 4,
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
                </Box>
            </Paper>
        </Container>
    );
};

export default ProductionCardsContainer;
