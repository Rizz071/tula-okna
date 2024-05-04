import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface Props {
    imgSrc: StaticImageData;
    caption: string;
    price?: string;
}

const ProductionTypeCard = ({ imgSrc, caption, price }: Props) => {
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
            />
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                marginLeft={{ xs: 0, md: 3 }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "medium", sm: "medium", md: "large" },
                        fontWeight: "light",
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    {caption}
                </Typography>
                {price && (
                    <Box display={"flex"} width={"100%"}>
                        <Typography
                            marginLeft={0}
                            sx={{
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.2rem",
                                    lg: "1.5rem",
                                },
                                width: "100%",
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            {`от ${price} ₽`}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ProductionTypeCard;
