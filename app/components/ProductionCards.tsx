import { Paper, Typography, Divider, Container } from "@mui/material";
import { calculateOverrideValues } from "next/dist/server/font-utils";

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
                    height: "300px",
                    mt: {
                        xs: 20,
                        md: -5,
                        lg: 9,
                    },
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    maxWidth: "lg",
                }}
            >
                <Typography variant="h4" fontWeight={"light"} paddingY={2}>
                    Продукция и услуги
                </Typography>
                <Divider />
            </Paper>
        </Container>
    );
};

export default ProductionCards;
