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
            direction={{ xs: "column", sm: "column", md: "row" }}
            alignItems={"center"}
        >
            {/* <Paper elevation={10}>
                <Box margin={1}> */}
            <Image
                src={imgSrc.src}
                width={imgSrc.width}
                height={imgSrc.height}
                alt={caption}
            />
            {/* </Box>
            </Paper> */}
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={{ xs: "center", md: "flex-start" }}
                marginLeft={{ xs: 0, sm: 0, md: 3 }}
                gap={1}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "large", sm: "large", md: "larger" },
                        fontWeight: 300,
                        textAlign: { xs: "center", md: "left" },
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
