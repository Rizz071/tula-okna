import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";

interface Props {
    caption: string;
    image: StaticImageData;
}

const ButtonImage = ({ caption, image }: Props) => {
    return (
        <Button
            variant="text"
            size="small"
            style={{ display: "flex", flexDirection: "column" }}
        >
            <Image src={image.src} width={300} height={220} alt="windows pvc" />
            <Typography
                textTransform={"uppercase"}
                paddingY={0.6}
                marginTop={-5}
                letterSpacing={1.5}
                fontWeight={300}
                color={"white"}
                bgcolor={"rgba(0, 0, 0, 0.6)"}
                align={"center"}
                width={"100%"}
            >
                {caption}
            </Typography>
        </Button>
    );
};

export default ButtonImage;
