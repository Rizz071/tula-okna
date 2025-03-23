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
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import latestPrice from "@/public/price.json";
import { ReactElement } from "react";
import PriceNotesBox from "./PriceNotesBox";

interface IConstructionType {
    type: number;
    typeImageSrc: string;
    additional_sash: number;
    additional_mosquito: number;
    without_vapor_barrier: number;
    products: {
        floor: number;
        name: string;
        price_full: number;
        price_naked: number;
    }[];
}

const PriceCompareApartments = () => {
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
                // style={{ tableLayout: "fixed" }}
                sx={{
                    borderCollapse: "unset",
                    tableLayout: { xs: "auto", md: "fixed" },
                }}
            >
                <TableHead sx={{ bgcolor: "#333" }}>
                    <TableRow>
                        <TableCell colSpan={6}>
                            <Typography
                                sx={{
                                    m: 1,
                                    p: 0,
                                    color: "white",
                                    fontWeight: 300,
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
                                5- и 9-этажные дома. Актуальные цены на дату:{" "}
                                {latestPrice.date}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell>
                            {renderLargeFont(<>ТИП КОНСТРУКЦИИ</>)}
                        </TableCell>
                        <TableCell>
                            {renderLargeFont(<>ЭТАЖ</>, true)}
                        </TableCell>
                        <TableCell>
                            {renderLargeFont(<>РЕКОМЕН&shy;ДУЕМАЯ СИСТЕМА</>)}
                        </TableCell>
                        <TableCell
                            sx={{
                                bgcolor: "lightyellow",
                                borderLeft: "1px solid rgba(224, 224, 224, 1)",
                                borderRight: "1px solid rgba(224, 224, 224, 1)",
                            }}
                        >
                            <Box sx={{ my: 1 }}>
                                {renderLargeFont(<>СТОИМОСТЬ</>, true)}

                                {renderSubtitle(
                                    <>
                                        окно, отлив, подо&shy;конник, откосы
                                        тёплые, монтаж по ГОСТ
                                    </>,
                                    true
                                )}
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Box sx={{ my: 1 }}>
                                {renderLargeFont(<>СТОИМОСТЬ</>)}

                                {renderSubtitle(
                                    <>только окно и отлив, монтаж по ГОСТ</>
                                )}
                            </Box>
                        </TableCell>
                        <TableCell>{renderLargeFont(<>ОПЦИИ</>)}</TableCell>
                    </TableRow>

                    {latestPrice.constructionTypes.map(
                        (currentConstructionType, constructionIndex) => {
                            return currentConstructionType.products.map(
                                (currentWindowSystem, windowSystemIndex) => {
                                    return (
                                        <TableRow key={windowSystemIndex}>
                                            {windowSystemIndex == 0 && (
                                                <TableCell
                                                    rowSpan={
                                                        currentConstructionType
                                                            .products.length
                                                    }
                                                    // sx={{ maxWidth: "300px" }}
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
                                                    bgcolor:
                                                        windowSystemIndex == 0
                                                            ? "lightyellow"
                                                            : "inherit",
                                                }}
                                            >
                                                <Link
                                                    href={linkGenerator(
                                                        currentWindowSystem.name.toUpperCase()
                                                    )}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: "unset",
                                                    }}
                                                >
                                                    {renderSmallFont(
                                                        <>
                                                            {currentWindowSystem.name.toUpperCase()}
                                                        </>
                                                    )}
                                                </Link>
                                            </TableCell>
                                            <TableCell
                                                sx={{
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
                                                                Без пароизоляции
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
                                                                    Дополнительная
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
                                                                    Дополнительная
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
                        <TableCell colSpan={6}>
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
                textAlign: "center",
                fontSize: {
                    xs: "x-small",
                    sm: "small",
                    md: "medium",
                    lg: "large",
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
