"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Box, Breadcrumbs, Typography } from "@mui/material";

const BreadCrumbs = () => {
    const paths = usePathname();
    const pathNamesOriginal = paths.split("/").filter((path) => path);

    const pathNames = pathNamesOriginal.map((name) => {
        if (name == "okna") return "окна";
        if (name == "plastikovye-okna") return "пластиковые окна";

        return name;
    });
    console.log(paths);
    return (
        paths !== "/" && (
            <Breadcrumbs
                aria-label="breadcrumb"
                separator="›"
                sx={{
                    marginX: 3,
                    marginY: 0,
                    padding: 0,
                }}
            >
                <Link
                    color="inherit"
                    href="/"
                    style={{ textDecoration: "none" }}
                >
                    <Typography variant="overline" color="red" fontWeight={100}>
                        Главная
                    </Typography>
                </Link>

                {pathNames.map((item, index) => {
                    return (
                        <Link
                            color="inherit"
                            style={{ textDecoration: "none" }}
                            href={
                                "/" +
                                pathNamesOriginal.slice(0, index + 1).join("/")
                            }
                            key={index}
                        >
                            <Typography
                                variant="overline"
                                color="red"
                                fontWeight={300}
                            >
                                {item}
                            </Typography>
                        </Link>
                    );
                })}
            </Breadcrumbs>
        )
    );
};

export default BreadCrumbs;
