import { Box, Typography, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface Props {
    imgSrc: StaticImageData;
    caption: string;
    link: string;
}

const ProductionTypeCard = ({ imgSrc, caption, link }: Props) => {
    return (
        <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"center"}
        >
            <Image
                src={imgSrc.src}
                width={imgSrc.width}
                height={imgSrc.height}
                alt={caption}
                style={{ width: "auto" }}
            />
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={{ xs: "center", md: "flex-start" }}
                marginLeft={{ xs: 0, md: 3 }}
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
        </Box>
    );
};

export default ProductionTypeCard;
