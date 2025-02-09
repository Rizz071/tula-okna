import { Typography, Button, Stack, Grid2 as Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface Props {
    imgSrc: StaticImageData;
    caption: string;
    link: string;
}

const ProductionCard = ({ imgSrc, caption, link }: Props) => {
    return (
        <Grid container>
            <Grid size={{ xs: 8, sm: 12, lg: 5 }}>
                <Image
                    src={imgSrc.src}
                    width={imgSrc.width}
                    height={imgSrc.height}
                    quality={100}
                    unoptimized
                    alt={caption}
                />
            </Grid>
            <Grid size={{ xs: 4, sm: 12, lg: 7 }}>
                <Stack
                    direction={"column"}
                    sx={{
                        alignItems: {
                            xs: "flex-start",
                            sm: "center",
                            lg: "flex-start",
                        },
                        ml: { xs: 1, sm: 0, lg: 3 },
                        height: "100%",
                        justifyContent: "space-between",
                        gap: 1,
                        // maxWidth: "200px",
                        py: { xs: 0, lg: 1 },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "large", md: "larger" },
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
