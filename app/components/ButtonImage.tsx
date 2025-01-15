"use client";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { IButtonImage } from "../lib/types";
import { grey } from "@mui/material/colors";

const ButtonImage = ({
    caption,
    image,
    link = "",
    description,
}: IButtonImage) => {
    const [isHovering, setIsHovered] = useState(false);

    return (
        <>
            <Link
                href={link}
                style={{ textDecoration: "none" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Card
                    sx={{ maxWidth: 300 }}
                    square
                    variant="elevation"
                    elevation={6}
                >
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 400 }}
                            image={image.src}
                            title={caption}
                        />
                        <CardContent sx={{ m: 0, p: 0 }}>
                            {/* <Image
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                unoptimized
                                alt={caption}
                            /> */}
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    minHeight: 50,
                                    opacity: isHovering ? 1 : 0.95,
                                    bgcolor: isHovering
                                        ? "primary.main"
                                        : grey[900],
                                    m: 0,
                                    p: 0,
                                    alignContent: "center",
                                    color: "white",
                                    fontWeight: 300,
                                    letterSpacing: 1.5,
                                    textTransform: "uppercase",
                                }}
                            >
                                {caption}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
            <Typography align={"center"}>{description}</Typography>
        </>
    );
};

export default ButtonImage;
