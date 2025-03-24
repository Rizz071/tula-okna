"use client";

import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Stack,
    Box,
    Button,
} from "@mui/material";
import Image from "next/image";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

import latestPrice from "@/public/price.json";
import { ReactElement } from "react";
import PriceNotesBox from "./PriceNotesBox";

const PriceCompareApartments = () => {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({
        contentRef,
        pageStyle: `@media print {
          @page {
            size: 210mm 297mm;
            margin: 5mm;
          }
        }`,
    });

    const windowsTypesFromPrice = latestPrice.constructionTypes.map(
        (constructionType) => constructionType
    );

    if (windowsTypesFromPrice.length == 0) {
        console.error(
            "Error during parsing apartement pricelist. Zero-length array."
        );
    }

    return (
        <TableContainer component={Paper} elevation={12}>
            <Table
                size="small"
                sx={{
                    tableLayout: { xs: "auto", md: "fixed" },
                }}
                ref={contentRef}
            >
                <TableHead sx={{ bgcolor: "#333" }}>
                    <TableRow>
                        <TableCell colSpan={6} sx={{ p: 1 }}>
                            <Stack
                                direction={"row"}
                                sx={{ alignItems: "center" }}
                            >
                                <Button
                                    // size={"small"}
                                    variant={"outlined"}
                                    onClick={() => reactToPrintFn()}
                                    sx={{
                                        color: "white",
                                        borderColor: "white",
                                        fontSize: {
                                            xs: "x-small",
                                            md: "small",
                                        },
                                    }}
                                >
                                    Печать
                                </Button>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            m: 0,
                                            p: 0,
                                            color: "white",
                                            fontWeight: { xs: 400, md: 300 },
                                            textTransform: "uppercase",
                                            letterSpacing: "3px",
                                            textAlign: "center",
                                            fontSize: {
                                                xs: "x-small",
                                                sm: "small",
                                                md: "medium",
                                                lg: "large",
                                            },
                                        }}
                                    >
                                        5- и 9-этажные дома. Актуальные цены на
                                        дату: {latestPrice.date}
                                    </Typography>
                                </Box>
                            </Stack>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell sx={{ px: { xs: 1, sm: 1, md: 1 } }}>
                            {renderLargeFont(<>ТИП КОНСТРУК&shy;ЦИИ</>)}
                        </TableCell>
                        <TableCell
                            sx={{ display: { xs: "none", sm: "table-cell" } }}
                        >
                            {renderLargeFont(<>ЭТАЖ</>, true)}
                        </TableCell>
                        <TableCell sx={{ px: { xs: 0, sm: 1, md: 1 } }}>
                            {renderLargeFont(<>ПРОФИЛЬ&shy;НАЯ СИСТЕМА</>)}
                        </TableCell>
                        <TableCell
                            sx={{
                                px: { xs: 1, sm: 1, md: 2 },
                                bgcolor: "lightyellow",
                                borderLeft: "1px solid rgba(224, 224, 224, 1)",
                                borderRight: "1px solid rgba(224, 224, 224, 1)",
                            }}
                        >
                            <Box sx={{ my: 1 }}>
                                {renderLargeFont(<>СТОИМОСТЬ</>, true)}

                                {renderSubtitle(
                                    <>
                                        окно, отлив, подо&shy;конник, откосы,
                                        монтаж по ГОСТ
                                    </>,
                                    true
                                )}
                            </Box>
                        </TableCell>
                        <TableCell
                            sx={{ display: { xs: "none", sm: "table-cell" } }}
                        >
                            <Box sx={{ my: 1 }}>
                                {renderLargeFont(<>СТОИМОСТЬ</>)}

                                {renderSubtitle(
                                    <>только окно и отлив, монтаж по ГОСТ</>
                                )}
                            </Box>
                        </TableCell>
                        <TableCell sx={{ px: { xs: 0, sm: 1, md: 1 } }}>
                            {renderLargeFont(<>ОПЦИИ</>)}
                        </TableCell>
                    </TableRow>

                    {latestPrice.constructionTypes.map(
                        (currentConstructionType, constructionIndex) => {
                            return currentConstructionType.products.map(
                                (currentWindowSystem, windowSystemIndex) => {
                                    return (
                                        <TableRow
                                            key={Math.round(
                                                Math.random() * 10000
                                            )}
                                        >
                                            {windowSystemIndex == 0 && (
                                                <TableCell
                                                    sx={{
                                                        px: {
                                                            xs: 1,
                                                            sm: 1,
                                                            md: 2,
                                                        },
                                                        maxWidth: "200px",
                                                        // maxHeight: "100px",
                                                    }}
                                                    rowSpan={
                                                        currentConstructionType
                                                            .products.length
                                                    }
                                                >
                                                    <Image
                                                        src={
                                                            currentConstructionType.typeImageSrc
                                                        }
                                                        alt={``}
                                                        width={932}
                                                        height={686}
                                                        quality={95}
                                                        // unoptimized
                                                        priority
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
                                                        }}
                                                    />
                                                </TableCell>
                                            )}

                                            <TableCell
                                                sx={{
                                                    display: {
                                                        xs: "none",
                                                        sm: "table-cell",
                                                    },
                                                    bgcolor:
                                                        windowSystemIndex == 0
                                                            ? "lightyellow"
                                                            : "inherit",
                                                }}
                                            >
                                                {renderSmallFont(
                                                    renderFloor(
                                                        currentWindowSystem.floor,
                                                        currentConstructionType.type
                                                    ),
                                                    true
                                                )}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    px: 0,
                                                    bgcolor:
                                                        windowSystemIndex == 0
                                                            ? "lightyellow"
                                                            : "inherit",
                                                }}
                                            >
                                                <Button
                                                    href={linkGenerator(
                                                        currentWindowSystem.name.toUpperCase()
                                                    )}
                                                    variant={"text"}
                                                    sx={{
                                                        p: 0,
                                                        color: "secondary.main",
                                                    }}
                                                >
                                                    {renderSmallFont(
                                                        <>
                                                            {currentWindowSystem.name.toUpperCase()}
                                                        </>
                                                    )}
                                                </Button>
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    px: 1,
                                                    bgcolor: "lightyellow",
                                                    borderLeft:
                                                        "1px solid rgba(224, 224, 224, 1)",
                                                    borderRight:
                                                        "1px solid rgba(224, 224, 224, 1)",
                                                }}
                                            >
                                                {renderSmallFont(
                                                    <>
                                                        {
                                                            currentWindowSystem.price_full
                                                        }{" "}
                                                        руб
                                                    </>,
                                                    true
                                                )}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    display: {
                                                        xs: "none",
                                                        sm: "table-cell",
                                                    },
                                                    bgcolor:
                                                        windowSystemIndex == 0
                                                            ? "lightyellow"
                                                            : "inherit",
                                                }}
                                            >
                                                {renderSmallFont(
                                                    <>
                                                        {
                                                            currentWindowSystem.price_naked
                                                        }{" "}
                                                        руб
                                                    </>
                                                )}
                                            </TableCell>

                                            {windowSystemIndex == 0 && (
                                                <TableCell
                                                    sx={{
                                                        px: { xs: 1, md: 2 },
                                                    }}
                                                    rowSpan={
                                                        currentConstructionType
                                                            .products.length
                                                    }
                                                >
                                                    <Stack
                                                        direction={"column"}
                                                        justifyContent={
                                                            "space-around"
                                                        }
                                                    >
                                                        {renderSubtitle(
                                                            <>
                                                                Без
                                                                паро&shy;изоляции
                                                                <br />
                                                                {
                                                                    currentConstructionType.without_vapor_barrier
                                                                }{" "}
                                                                руб
                                                            </>
                                                        )}
                                                        <br />
                                                        {currentConstructionType.additional_sash !=
                                                            0 &&
                                                            renderSubtitle(
                                                                <>
                                                                    Дополни&shy;тель&shy;ная
                                                                    створка
                                                                    <br />
                                                                    {
                                                                        currentConstructionType.additional_sash
                                                                    }{" "}
                                                                    руб
                                                                </>
                                                            )}
                                                        <br />
                                                        {currentConstructionType.additional_sash !=
                                                            0 &&
                                                            renderSubtitle(
                                                                <>
                                                                    Дополни&shy;тель&shy;ная
                                                                    москитная
                                                                    сетка
                                                                    <br />
                                                                    {
                                                                        currentConstructionType.additional_mosquito
                                                                    }{" "}
                                                                    руб
                                                                </>
                                                            )}
                                                    </Stack>
                                                </TableCell>
                                            )}
                                        </TableRow>
                                    );
                                }
                            );
                        }
                    )}

                    <TableRow>
                        <TableCell
                            colSpan={6}
                            sx={{ px: { xs: 0, sm: 2 }, py: 2 }}
                        >
                            <PriceNotesBox />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

function renderLargeFont(text: ReactElement, bold: boolean = false) {
    return (
        <Typography
            sx={{
                m: 0,
                px: { xs: 0, md: 1 },
                textAlign: "center",
                fontSize: {
                    xs: "x-small",
                    sm: "small",
                    md: "medium",
                    lg: "medium",
                },
                fontWeight: bold == true ? 500 : 300,
            }}
        >
            {text}
        </Typography>
    );
}

function renderSmallFont(text: ReactElement, bold: boolean = false) {
    return (
        <Typography
            sx={{
                m: 0,
                px: { xs: 0, md: 1 },
                textAlign: "center",
                fontSize: {
                    xs: "x-small",
                    sm: "x-small",
                    md: "small",
                    lg: "medium",
                },
                fontWeight: bold == true ? 400 : 300,
            }}
        >
            {text}
        </Typography>
    );
}

function renderSubtitle(text: ReactElement, bold: boolean = false) {
    return (
        <Typography
            sx={{
                m: 0,
                px: { xs: 0, md: 1 },
                textAlign: "center",
                fontSize: {
                    xs: "xx-small",
                    sm: "xx-small",
                    md: "x-small",
                    lg: "small",
                },
                fontWeight: bold == true ? 400 : 300,
            }}
        >
            {text}
        </Typography>
    );
}

function renderFloor(
    floorCode: number,
    constructionTypeCode: number
): ReactElement {
    switch (floorCode) {
        case 0:
            return constructionTypeCode < 3 ? (
                <>1&mdash;5</>
            ) : (
                <>
                    Балкон
                    <br />
                    остеклён
                </>
            );
        case 1:
            return constructionTypeCode < 3 ? (
                <>6&mdash;12</>
            ) : (
                <>
                    Балкон
                    <br />
                    НЕ остеклён
                </>
            );
        case 2:
            return constructionTypeCode < 3 ? (
                <>13&mdash;17</>
            ) : (
                <>
                    ПРЕМИУМ
                    <br />
                    вариант
                </>
            );
        case 3:
            return <>выше 18</>;
    }

    return <>Error!</>;
}

// function renderName(type: number): ReactElement {
//     switch (type) {
//         case 0:
//             return (
//                 <>
//                     Одностворчатый
//                     <br />
//                     оконный блок
//                 </>
//             );
//         case 1:
//             return (
//                 <>
//                     Двустворчатый
//                     <br />
//                     оконный блок
//                 </>
//             );
//         case 2:
//             return (
//                 <>
//                     Трёхстворчатый
//                     <br />
//                     оконный блок
//                 </>
//             );
//         case 3:
//             return (
//                 <>
//                     Балконный блок
//                     <br />
//                     9-этажный дом
//                 </>
//             );
//         case 4:
//             return (
//                 <>
//                     Балконный блок
//                     <br />
//                     5-этажный дом
//                 </>
//             );
//     }

//     return <>Error!</>;
// }

function linkGenerator(systemNane: string) {
    switch (systemNane) {
        case "КАЛЕВА 60":
            return "/okna/kaleva_profi";
        case "КАЛЕВА 70":
            return "/okna/kaleva_standart";
        case "VEKA SOFTLINE 70":
            return "/okna/veka_softline_70";
        case "VEKA SOFTLINE 82":
            return "/okna/veka_softline_82";
    }

    return "";
}

export default PriceCompareApartments;
