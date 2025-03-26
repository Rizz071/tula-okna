import { Typography, Button, Stack, Grid2 as Grid, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

interface Props {
    imgSrc: StaticImageData;
    caption: ReactElement;
    link: string;
}

const ProductionCard = ({ imgSrc, caption, link }: Props) => {
    return (
        <Grid container>
            <Grid size={{ xs: 6, sm: 12, lg: 5 }}>
                <Box
                    sx={{
                        ml: "auto",
                        mr: { xs: 2, sm: "auto" },
                        width: { xs: "120px", sm: "150px" },
                        height: "100px",
                    }}
                >
                    <Image
                        src={imgSrc.src}
                        width={imgSrc.width}
                        height={imgSrc.height}
                        // width={0}
                        // height={0}
                        quality={95}
                        // unoptimized
                        alt={""} //TODO alt
                        style={{
                            width: "auto",
                            height: "100%",
                            // width:  "150px",
                            // height: "100px",
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </Grid>
            <Grid size={{ xs: 6, sm: 12, lg: 7 }}>
                <Stack
                    direction={"column"}
                    sx={{
                        alignItems: {
                            xs: "flex-start",
                            sm: "center",
                            lg: "flex-start",
                        },
                        ml: { xs: 1, sm: "auto", lg: 3 },
                        mr: { xs: 0, sm: "auto" },
                        height: "100%",
                        gap: 1,
                        maxWidth: "250px",
                        py: { xs: 0, lg: 0 },
                        pr: { xs: 2, sm: 0 },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "medium",
                                sm: "large",
                                md: "larger",
                            },
                            fontWeight: 300,
                            textAlign: {
                                xs: "left",
                                sm: "center",
                                lg: "left",
                            },
                            mt: { xs: 1, lg: 0 },
                        }}
                    >
                        {caption}
                    </Typography>
                    <Button variant="outlined" size="small" href={link}>
                        ПЕРЕЙТИ
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ProductionCard;
