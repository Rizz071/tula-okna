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

    console.log(pathNamesOriginal.join("/"));

    return (
        <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Link color="inherit" href="/">
                <Typography variant="overline">Главная</Typography>
            </Link>

            {pathNames.map((item, index) => {
                return (
                    <Link
                        color="inherit"
                        href={
                            "/" +
                            pathNamesOriginal.slice(0, index + 1).join("/")
                        }
                        key={index}
                    >
                        <Typography variant="overline">{item}</Typography>
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default BreadCrumbs;
