import { ReactElement } from "react";
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Grid2 as Grid,
} from "@mui/material";
import Image from "next/image";

import latestPrice from "@/public/price.json";
import PriceNotesBox from "./PriceNotesBox";

interface Props {
    filterByProductName: string;
}

const Pricer = ({ filterByProductName }: Props) => {
    return (
        <TableContainer component={Paper} elevation={12}>
            <Table size="small">
                <TableHead sx={{ bgcolor: "#333" }}>
                    <TableRow>
                        <TableCell>
                            <Typography
                                sx={{
                                    m: 1,
                                    p: 0,
                                    color: "white",
                                    fontWeight: 300,
                                    textTransform: "uppercase",
                                    letterSpacing: "3px",
                                    textAlign: "center",
                                }}
                            >
                                5- и 9-этажные дома. Актуальные цены на дату:{" "}
                                {latestPrice.date}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ verticalAlign: "top" }}>
                        <TableCell sx={{ borderBottom: "none" }}>
                            <Grid
                                container
                                justifyContent={"space-around"}
                                columnSpacing={6}
                                rowSpacing={10}
                            >
                                {latestPrice.constructionTypes.map(
                                    (constructionType, index) => {
                                        let currentProduct =
                                            constructionType.products.find(
                                                (product) =>
                                                    product.name.toUpperCase() ==
                                                    filterByProductName.toUpperCase()
                                            );
                                        if (!currentProduct) return;

                                        return (
                                            <Grid
                                                sx={{ my: 2 }}
                                                size={{
                                                    xs: 6,
                                                    sm: 4,
                                                    md: 4,
                                                    lg: 2,
                                                }}
                                                key={index}
                                                justifyContent={"center"}
                                            >
                                                <Typography
                                                    sx={{
                                                        mt: 0,
                                                        typography: "body2",
                                                        textAlign: "center",
                                                        minHeight: "3rem",
                                                        verticalAlign: "bottom",
                                                        fontSize: {
                                                            xs: "0.8rem",
                                                            sm: "inherit",
                                                        },
                                                        fontWeight: 500,
                                                        textTransform:
                                                            "uppercase",
                                                    }}
                                                >
                                                    {renderName(
                                                        constructionType.type
                                                    )}
                                                </Typography>

                                                <Image
                                                    src={
                                                        constructionType.typeImageSrc
                                                    }
                                                    width={932}
                                                    height={686}
                                                    quality={100}
                                                    unoptimized
                                                    priority
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                    }}
                                                    alt={`Тип оконной конструкции, ${constructionType.typeImageSrc}`}
                                                />

                                                <Typography
                                                    variant={"body2"}
                                                    sx={{
                                                        textAlign: "center",
                                                        my: 2,
                                                        p: 1,
                                                        bgcolor: "lightyellow",
                                                    }}
                                                >
                                                    Окно и отлив, <wbr />
                                                    монтаж по ГОСТ
                                                    <br />
                                                    <Typography
                                                        component={"span"}
                                                        variant="body2"
                                                        sx={{
                                                            fontSize: {
                                                                xs: "1rem",
                                                                sm: "1.2rem",
                                                            },
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {
                                                            currentProduct.price_naked
                                                        }{" "}
                                                        руб
                                                    </Typography>
                                                </Typography>

                                                <Typography
                                                    variant={"body2"}
                                                    sx={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Подоконник,
                                                    <br />
                                                    тёплые откосы
                                                </Typography>
                                                <Typography
                                                    variant={"body2"}
                                                    sx={{
                                                        textAlign: "center",
                                                        bgcolor: "lightyellow",
                                                    }}
                                                >
                                                    <strong>
                                                        {currentProduct.price_full -
                                                            currentProduct.price_naked}{" "}
                                                        руб
                                                    </strong>
                                                </Typography>

                                                {constructionType.additional_sash !=
                                                    0 && (
                                                    <Typography
                                                        variant={"body2"}
                                                        sx={{
                                                            mt: 2,
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        Дополнительная
                                                        <br />
                                                        створка
                                                        <br />
                                                        <strong>
                                                            {
                                                                constructionType.additional_sash
                                                            }{" "}
                                                            руб
                                                        </strong>
                                                    </Typography>
                                                )}
                                                {constructionType.additional_mosquito !=
                                                    0 && (
                                                    <Typography
                                                        variant={"body2"}
                                                        sx={{
                                                            mt: 2,
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        Дополнительная
                                                        <br />
                                                        москитная сетка
                                                        <br />
                                                        <strong>
                                                            {
                                                                constructionType.additional_mosquito
                                                            }{" "}
                                                            руб
                                                        </strong>
                                                    </Typography>
                                                )}

                                                <Typography
                                                    variant={"body2"}
                                                    sx={{
                                                        mt: 2,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Отказ от
                                                    <br />
                                                    монтажа по ГОСТ
                                                    <br />
                                                    <strong>
                                                        {
                                                            constructionType.without_vapor_barrier
                                                        }{" "}
                                                        руб
                                                    </strong>
                                                </Typography>
                                            </Grid>
                                        );
                                    }
                                )}
                            </Grid>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ m: 0, p: 1 }}>
                            <PriceNotesBox />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

function renderName(type: number): ReactElement {
    switch (type) {
        case 0:
            return (
                <>
                    Одностворчатый
                    <br />
                    оконный блок
                </>
            );
        case 1:
            return (
                <>
                    Двустворчатый
                    <br />
                    оконный блок
                </>
            );
        case 2:
            return (
                <>
                    Трёхстворчатый
                    <br />
                    оконный блок
                </>
            );
        case 3:
            return (
                <>
                    Балконный блок
                    <br />
                    9-этажный дом
                </>
            );
        case 4:
            return (
                <>
                    Балконный блок
                    <br />
                    5-этажный дом
                </>
            );
    }

    return <>Error!</>;
}

export default Pricer;
