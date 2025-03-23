"use client";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { IButtonImage } from "../../lib/types";
import Image from "next/image";

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
                    <CardActionArea sx={{ textAlign: "center" }}>
                        {/* <CardMedia
                            sx={{ height: 400 }}
                            image={image.src}
                            title={caption}
                        /> */}
                        <Image
                            src={image}
                            width={0}
                            height={0}
                            alt={caption}
                            quality={95}
                            style={{
                                height: 400,
                                width: "auto",
                                verticalAlign: "bottom",
                            }}
                        />
                        <CardContent sx={{ m: 0, p: 0 }}>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    minHeight: 60,
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
                                    lineHeight: "1.3rem",
                                }}
                            >
                                {caption}
                                <br />
                                <Typography
                                    component={"span"}
                                    sx={{
                                        typography: "caption",
                                        fontSize: "0.7rem",
                                        m: 0,
                                        p: 0,
                                        // lineHeight: "1rem",
                                    }}
                                >
                                    посмотреть прайслист
                                </Typography>
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
