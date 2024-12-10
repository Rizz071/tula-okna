"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
    caption: string;
    image: StaticImageData;
    link?: string;
}

const ButtonImage = ({ caption, image, link = "" }: Props) => {
    const [isHovering, setIsHovered] = useState(false);

    return (
        <Link
            href={link}
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                variant="text"
                size="small"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <Image
                    src={image.src}
                    width={300}
                    height={220}
                    alt="windows pvc"
                />
                <Typography
                    textTransform={"uppercase"}
                    paddingY={0.6}
                    marginTop={-5}
                    letterSpacing={1.5}
                    fontWeight={300}
                    color={"white"}
                    bgcolor={isHovering ? "primary.main" : "rgba(0, 0, 0, 0.6)"}
                    align={"center"}
                    width={"100%"}
                >
                    {caption}
                </Typography>
            </Button>
        </Link>
    );
};

export default ButtonImage;
