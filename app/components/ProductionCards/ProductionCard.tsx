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
            direction={{ xs: "column", sm: "column", lg: "row" }}
            alignItems={"center"}
        >
            <Image
                src={imgSrc.src}
                width={imgSrc.width}
                height={imgSrc.height}
                // height={104}
                alt={caption}
                // style={{ width: "auto" }}
            />
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={{ xs: "center", lg: "flex-start" }}
                marginLeft={{ xs: 0, lg: 3 }}
                gap={1}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "large", md: "larger" },
                        fontWeight: 300,
                        textAlign: { xs: "center", lg: "left" },
                        my: 0,
                    }}
                >
                    {caption}
                </Typography>
                <Button variant="outlined" size="small" href={link}>
                    ПЕРЕЙТИ
                </Button>
            </Box>
        </Stack>
    );
};

export default ProductionCard;
