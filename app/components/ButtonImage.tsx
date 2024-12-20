"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";

interface Props {
    caption: string;
    image: StaticImageData;
    link?: string;
}

const ButtonImage = ({ caption, image, link = "" }: Props) => {
    const [isHovering, setIsHovered] = useState(false);

    return (
        <Box width={300} height={400}>
            <Link
                href={link}
                style={{
                    textDecoration: "none",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Button
                    variant="text"
                    size="small"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 0,
                        alignItems: "flex-end",
                    }}
                >
                    <Box
                        margin={0}
                        padding={0}
                        style={{
                            width: "300px",
                            height: "400px",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            style={
                                {
                                    // position: "relative"
                                    //     width: image.width,
                                    //     height: "auto",
                                }
                            }
                            // objectFit="contain"
                            unoptimized
                            alt="windows pvc"
                        />
                    </Box>
                    <Typography
                        alignSelf={"flex-end"}
                        textTransform={"uppercase"}
                        paddingY={0.6}
                        marginTop={-5}
                        letterSpacing={1.5}
                        fontWeight={300}
                        color={"white"}
                        bgcolor={isHovering ? "primary.main" : "black"}
                        align={"center"}
                        width={"100%"}
                        sx={{ opacity: isHovering ? 0.9 : 0.7 }}
                        // alignSelf={"flex-end"}
                    >
                        {caption}
                    </Typography>
                </Button>
            </Link>
        </Box>
    );
};

export default ButtonImage;
