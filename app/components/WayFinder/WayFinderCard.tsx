"use client";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { IButtonImage } from "../../lib/types";

const WayFinderCard = ({
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
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    minHeight: 50,
                                    bgcolor: !isHovering
                                        ? "primary.main"
                                        : "primary.dark",
                                    m: 0,
                                    p: 0,
                                    alignContent: "center",
                                    color: "white",
                                    fontWeight: 400,
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

export default WayFinderCard;
