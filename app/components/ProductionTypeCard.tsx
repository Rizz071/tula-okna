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
                        fontSize: { xs: "medium", sm: "medium", md: "large" },
                        fontWeight: "light",
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    {caption}
                </Typography>
                <Button variant="outlined" size="small">
                    ПЕРЕЙТИ
                </Button>
                {/* {price && (
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
                )} */}
            </Box>
        </Box>
    );
};

export default ProductionTypeCard;
