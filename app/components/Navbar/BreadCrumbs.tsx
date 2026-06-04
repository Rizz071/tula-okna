"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, Typography } from "@mui/material";

const BreadCrumbs = () => {
  const paths = usePathname();
  const pathNamesOriginal = paths.split("/").filter((path) => path);

  const pathNames = pathNamesOriginal.map((name) => {
    switch (name) {
      case "okna":
        return "окна";
      case "plastikovye-okna":
        return "пластиковые окна";
      case "cottage":
        return "в частный дом";
      case "apartments":
        return "в квартиру";
      case "balkony":
        return "балконы и лоджии";
      case "cold":
        return "холодное остекление";
      case "warm":
        return "тёплое остекление";
      case "interior":
        return "внутренняя отделка";
      case "kaleva_profi":
        return "КАЛЕВА 60";
      case "kaleva_standart":
        return "КАЛЕВА 70";
      case "veka_euroline":
        return "ВЕКА ЕВРОЛАЙН 58";
      case "veka_softline_70":
        return "ВЕКА СОФТЛАЙН 70";
      case "veka_softline_82":
        return "ВЕКА СОФТЛАЙН 82";
      case "ceny":
        return "цены";
      case "stoimost-tipovyh-okon":
        return "типовые окна в квартиру";
      case "portaly":
        return "раздвижные двери - порталы";
      case "contacts":
        return "контакты";
      default:
        return "404 - нет пути";
    }
  });

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
        <Link color="inherit" href="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="overline"
            sx={{
              color: "red",
              fontWeight: 100,
            }}
          >
            Главная
          </Typography>
        </Link>

        {pathNames.map((item, index) => {
          return (
            <Link
              color="inherit"
              style={{ textDecoration: "none" }}
              href={"/" + pathNamesOriginal.slice(0, index + 1).join("/")}
              key={index}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "red",
                  fontWeight: 300,
                }}
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
