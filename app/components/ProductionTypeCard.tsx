import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface Props {
    imgSrc: StaticImageData;
    caption: string;
    price?: string;
}

const ProductionTypeCard = ({ imgSrc, caption, price }: Props) => {
    return (
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            {/* <Box display={{ xs: "none", sm: "block" }}> */}
            <Image
                src={imgSrc.src}
                width={imgSrc.width}
                height={imgSrc.height}
                alt={caption}
            />
            {/* </Box> */}
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                marginLeft={3}
            >
                <Typography
                    sx={{
                        fontSize: "large",
                        fontWeight: "light",
                        textAlign: "left",
                    }}
                >
                    {caption}
                </Typography>
                {price && (
                    <Typography
                        sx={{ fontSize: { xs: "1.2rem", lg: "1.5rem" } }}
                    >{`от ${price} ₽`}</Typography>
                )}
            </Box>
        </Box>
    );
};

export default ProductionTypeCard;
