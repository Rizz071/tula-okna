import { Box, Container, Grid2 as Grid } from "@mui/material";
import Image from "next/image";
import background from "@/public/images/stoimost-fon.png";
import man_image from "@/public/images/stoimost-img.webp";
import FormRequestOffer from "./FormRequestOffer";
import FooterContacts from "./FooterContacts";

const FooterContainer = () => {
    //TODO Add text message field
    return (
        <Box sx={{ backgroundImage: `url(${background.src})` }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ mt: 10, pt: 3 }}>
                    <Grid size={{ xs: 12, sm: 7, lg: 5 }}>
                        <FormRequestOffer />
                    </Grid>

                    <Grid size={{ xs: 12, sm: "grow" }}>
                        <FooterContacts />
                    </Grid>

                    <Grid
                        size={"auto"}
                        sx={{ display: { xs: "none", lg: "block" } }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                mt: -5,
                            }}
                        >
                            <Image src={man_image} alt="worker image" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FooterContainer;
