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
                            fontWeight={300}
                            paddingY={2}
                            align="center"
                            sx={{
                                fontSize: {
                                    xs: "1.5rem",
                                    sm: "1.5rem",
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
                <Grid
                    container
                    rowSpacing={7}
                    columnSpacing={4}
                    sx={{
                        p: 6,
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
