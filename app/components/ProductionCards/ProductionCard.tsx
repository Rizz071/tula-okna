import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface Props {
    imgSrc: StaticImageData;
    caption: string;
    link: string;
}

const ProductionCard = ({ imgSrc, caption, link }: Props) => {
    return (
        <Stack
            direction={{ xs: "row", sm: "column", lg: "row" }}
            alignItems={"center"}
            sx={{
                justifyContent: "space-between",
                height: "100%",
            }}
        >
            <Image
                src={imgSrc.src}
                width={imgSrc.width}
                height={imgSrc.height}
                quality={100}
                // unoptimized
                // height={104}
                alt={caption}
                // style={{ width: "auto" }}
            />
            <Stack
                direction={"column"}
                sx={{
                    alignItems: {
                        xs: "flex-start",
                        sm: "center",
                        lg: "flex-start",
                    },
                    ml: { xs: 0, lg: 3 },
                    height: "100%",
                    justifyContent: "space-between",
                    gap: 1,
                    maxWidth: "200px",
                    py: { xs: 0, lg: 1 },
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "large", md: "larger" },
                        fontWeight: 300,
                        textAlign: { xs: "left", sm: "center", lg: "left" },
                        mt: { xs: 1, lg: 0 },
                    }}
                >
                    {caption}
                </Typography>
                <Button variant="outlined" size="small" href={link}>
                    ПЕРЕЙТИ
                </Button>
            </Stack>
            {/* </Box> */}
        </Stack>
    );
};

export default ProductionCard;
