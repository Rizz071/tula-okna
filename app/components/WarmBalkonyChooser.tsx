"use client";

import React, { useEffect } from "react";
import {
    Container,
    Box,
    Typography,
    Grid2 as Grid,
    Paper,
    TableContainer,
    Table,
    TableCell,
    TableRow,
    Stack,
    Tooltip,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TableBody,
    TableHead,
} from "@mui/material";

import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import FireplaceSharpIcon from "@mui/icons-material/FireplaceSharp";
import GraphicEqSharpIcon from "@mui/icons-material/GraphicEqSharp";
import CurrencyRubleSharpIcon from "@mui/icons-material/CurrencyRubleSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

import WayFinderCard from "./WayFinder/WayFinderCard";

import veka_softline_70_1 from "@/public/images/veka_softline_70_tmblr_1.jpg";
import kaleva_profi from "@/public/images/klv_profi_tumblr_1.jpg";
import kaleva_standart from "@/public/images/klv_standart_tumblr_1.jpg";
import veka_softline_82_1 from "@/public/images/veka_softline_80_tmblr_1.jpg";
import { StaticImageData } from "next/image";

interface ICardDescriptionTable {
    system_title: string;
    image: StaticImageData;
    link: string;
    option1: number;
    option2: number;
    floor: number;
    street_noise: number;
    price: number;
}

const WarmBalkonyChooser = () => {
    const [floor, setFloor] = React.useState<string>("0");
    const [option1, setOption1] = React.useState<string>("0"); // Совмещение с комнатой
    const [option2, setOption2] = React.useState<string>("0"); // Отопление на балконе

    const [apartmentWindowsList, setApartmentWindowsList] = React.useState<
        ICardDescriptionTable[]
    >([]);

    const handleChangeOption1 = (event: SelectChangeEvent) => {
        setOption1(event.target.value as string);
        if (event.target.value == "1") setOption2("1");
    };

    const handleChangeOption2 = (event: SelectChangeEvent) => {
        setOption2(event.target.value as string);
        if (event.target.value == "0") setOption1("0");
    };

    const handleChangeFloor = (event: SelectChangeEvent) => {
        setFloor(event.target.value as string);
    };

    useEffect(() => {
        const initialApatmentWindowsList: ICardDescriptionTable[] = [
            {
                system_title: "калева профи 60",
                image: kaleva_profi,
                link: "/okna/kaleva_profi",
                option1: 0,
                option2: 0,
                floor: 0,
                street_noise: 2,
                price: 0,
            },
            {
                system_title: "калева стандарт 70",
                image: kaleva_standart,
                link: "/okna/kaleva_standart",
                option1: 1,
                option2: 1,
                floor: 1,
                street_noise: 2,
                price: 0,
            },
            {
                system_title: "VEKA Softline 70",
                image: veka_softline_70_1,
                link: "/okna/veka_softline_70",
                option1: 1,
                option2: 1,
                floor: 2,
                street_noise: 1,
                price: 1,
            },
            {
                system_title: "VEKA Софтлайн 82",
                image: veka_softline_82_1,
                link: "/okna/veka_softline_82",
                option1: 1,
                option2: 1,
                floor: 3,
                street_noise: 0,
                price: 2,
            },
        ];
        setApartmentWindowsList(
            initialApatmentWindowsList.filter((item) => {
                if (
                    item.floor >= parseInt(floor) &&
                    item.option1 >= parseInt(option1) &&
                    item.option2 >= parseInt(option2)
                )
                    return true;

                return false;
            })
        );
    }, [option1, option2, floor]);

    useEffect(() => {
        console.log(apartmentWindowsList);
    }, [apartmentWindowsList]);

    const info_tooltip = {
        option1:
            "Этажность влияет на ветровую нагрузку. Чем выше этаж - тем она сильнее. Если оконный блок не выдерживает ветровую нагрузку, то зимой окно будет промерзать.",
        option2:
            "Источник тепла обогревает внутреннее стекло стелопакета. Если тепла недостаточно - точка росы смещается на стело и выпадает конденсат. Если тепла сильно не хватает - возникает &quot;ложный сквозняк&quot; (ветер) от окна. К такому же негативному эффекту может привести неработающая (забитая) вентиляционная вытяжка.",
        street_noise:
            "Уличный шум может сильно снизить комфорт проживания в городской квартире. Чем больше воздушных камер в профиле, тем сильнее глушится шум. При очень высоком уровне шума необходимо также установить стеклопакет со стёклами разной толщины.",
        price: "Здесь указана приблизительная сравнительная стоимость. Чем выше цена - тем большее количество ПВХ-материала используется, и тем мощнее армирование устанавливается в оконный профиль.",
    };

    const renderPrice = (price: number): string => {
        switch (price) {
            case 0:
                return "Низкая";
            case 1:
                return "Средняя";
            case 2:
                return "Высокая";
            default:
                return "";
        }
    };

    const renderFloor = (floor: number): string => {
        switch (floor) {
            case 0:
                return "До 5 этажа";
            case 1:
                return "До 12 этажа";
            case 2:
                return "До 17 этажа";
            case 3:
                return "Любой этаж";
            default:
                return "";
        }
    };

    const renderStreetNoise = (street_noise: number): string => {
        switch (street_noise) {
            case 0:
                return "Сильная";
            case 1:
                return "Средняя";
            case 2:
                return "Слабая";
            default:
                return "";
        }
    };

    return (
        <>
            <Container maxWidth={"lg"}>
                <Grid
                    container
                    marginTop={8}
                    columnSpacing={1}
                    rowSpacing={10}
                    direction={"row"}
                    alignItems={"flex-start"}
                    justifyContent={"space-evenly"}
                    size={12}
                >
                    <Grid size={{ xs: 12 }}>
                        <Typography
                            variant="h2"
                            align="center"
                            marginTop={5}
                            gutterBottom
                        >
                            Подбор окон для тёплого остекления балкона/лоджии
                        </Typography>
                    </Grid>

                    <Grid
                        container
                        direction={"column"}
                        size={{ xs: 12, md: 3 }}
                        alignItems={"flex-start"}
                        justifyContent={"center"}
                        rowGap={2}
                    >
                        <Grid size={12}>
                            <Box
                                sx={{
                                    maxWidth: { xs: "auto", lg: 300 },
                                }}
                            >
                                <FormControl fullWidth variant="filled">
                                    <InputLabel
                                        id="option2-select-input-label"
                                        sx={{
                                            fontWeight: 500,
                                            color: "black",
                                            fontSize: "larger",
                                        }}
                                    >
                                        <ApartmentSharpIcon
                                            sx={{
                                                verticalAlign: "bottom",
                                                fontSize: "1.8rem",
                                            }}
                                        />
                                        &nbsp;Совмещение с комнатой
                                    </InputLabel>
                                    <Select
                                        labelId="option1-select-label"
                                        id="option1-select"
                                        value={option1}
                                        label="option1"
                                        onChange={handleChangeOption1}
                                        sx={{ pt: 1 }}
                                    >
                                        <MenuItem value={"0"}>
                                            Не будет
                                        </MenuItem>
                                        <MenuItem value={"1"}>Будет</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid size={12}>
                            <Box sx={{ maxWidth: { xs: "auto", lg: 300 } }}>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel
                                        id="option2-select-input-label"
                                        sx={{
                                            fontWeight: 500,
                                            color: "black",
                                            fontSize: "larger",
                                        }}
                                    >
                                        <FireplaceSharpIcon
                                            sx={{
                                                verticalAlign: "bottom",
                                                fontSize: "1.8rem",
                                            }}
                                        />
                                        &nbsp;Отопление на балконе
                                    </InputLabel>
                                    <Select
                                        labelId="option2-select-label"
                                        id="option2-select"
                                        value={option2}
                                        label="option2"
                                        onChange={handleChangeOption2}
                                        sx={{ pt: 1 }}
                                    >
                                        <MenuItem value={"0"}>
                                            Не будет
                                        </MenuItem>
                                        <MenuItem value={"1"}>Будет</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid size={12}>
                            <Box
                                sx={{
                                    maxWidth: { xs: "auto", lg: 300 },
                                }}
                            >
                                <FormControl fullWidth variant="filled">
                                    <InputLabel
                                        id="heating-select-input-label"
                                        sx={{
                                            fontWeight: 500,
                                            color: "black",
                                            fontSize: "larger",
                                        }}
                                    >
                                        <ApartmentSharpIcon
                                            sx={{
                                                verticalAlign: "bottom",
                                                fontSize: "1.8rem",
                                            }}
                                        />
                                        &nbsp;Этаж
                                    </InputLabel>
                                    <Select
                                        labelId="floor-select-label"
                                        id="floor-select"
                                        value={floor}
                                        label="Floor"
                                        onChange={handleChangeFloor}
                                        sx={{ pt: 1 }}
                                    >
                                        <MenuItem value={"0"}>
                                            1 &mdash; 5
                                        </MenuItem>
                                        <MenuItem value={"1"}>
                                            6 &mdash; 12
                                        </MenuItem>
                                        <MenuItem value={"2"}>
                                            13 &mdash; 17
                                        </MenuItem>
                                        <MenuItem value={"3"}>
                                            18 и выше
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        justifyContent={"space-around"}
                        size={{ xs: 12, md: 8 }}
                    >
                        {apartmentWindowsList.map(
                            (
                                {
                                    system_title,
                                    image,
                                    link,
                                    floor,
                                    street_noise,
                                    price,
                                },
                                index
                            ) => {
                                return (
                                    <Grid sx={{ my: 0 }} key={index}>
                                        <Paper square elevation={6}>
                                            <Box>
                                                <WayFinderCard
                                                    caption={system_title}
                                                    image={image}
                                                    link={link}
                                                />
                                            </Box>

                                            <TableContainer
                                                component={Paper}
                                                sx={{ width: "300px" }}
                                            >
                                                <Table size="small">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell
                                                                colSpan={2}
                                                                align="center"
                                                                sx={{
                                                                    pt: 0,
                                                                    pb: 0,
                                                                }}
                                                            >
                                                                <Typography
                                                                    variant="button"
                                                                    sx={{
                                                                        mx: 0,
                                                                    }}
                                                                >
                                                                    Условия
                                                                    эксплуатации
                                                                </Typography>
                                                                <Typography
                                                                    marginY={0}
                                                                    padding={0}
                                                                    align="center"
                                                                >
                                                                    <ExpandMoreSharpIcon />
                                                                </Typography>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>
                                                                <Tooltip
                                                                    arrow
                                                                    title={
                                                                        info_tooltip.option1
                                                                    }
                                                                >
                                                                    <Stack
                                                                        direction={
                                                                            "row"
                                                                        }
                                                                        gap={
                                                                            0.5
                                                                        }
                                                                        alignItems="center"
                                                                    >
                                                                        <ApartmentSharpIcon />

                                                                        <Typography
                                                                            variant="subtitle1"
                                                                            sx={{
                                                                                my: 0,
                                                                            }}
                                                                        >
                                                                            Этаж
                                                                        </Typography>
                                                                    </Stack>
                                                                </Tooltip>
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    paddingLeft: 0,
                                                                }}
                                                            >
                                                                <Tooltip
                                                                    arrow
                                                                    title={
                                                                        info_tooltip.option1
                                                                    }
                                                                >
                                                                    <Typography
                                                                        variant="subtitle1"
                                                                        sx={{
                                                                            my: 0,
                                                                        }}
                                                                    >
                                                                        {renderFloor(
                                                                            floor
                                                                        )}
                                                                    </Typography>
                                                                </Tooltip>
                                                            </TableCell>
                                                        </TableRow>
                                                        {/* <TableRow>
                                                            <TableCell>
                                                                <Tooltip
                                                                    arrow
                                                                    title={
                                                                        info_tooltip.option2
                                                                    }
                                                                >
                                                                    <Stack
                                                                        direction={
                                                                            "row"
                                                                        }
                                                                        gap={
                                                                            0.5
                                                                        }
                                                                        alignItems="center"
                                                                    >
                                                                        <FireplaceSharpIcon />
                                                                        <Typography
                                                                            variant="subtitle1"
                                                                            sx={{
                                                                                my: 0,
                                                                            }}
                                                                        >
                                                                            Отопление
                                                                        </Typography>
                                                                    </Stack>
                                                                </Tooltip>
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    paddingLeft: 0,
                                                                }}
                                                            >
                                                                <Tooltip
                                                                    arrow
                                                                    title={
                                                                        info_tooltip.option2
                                                                    }
                                                                >
                                                                    <Typography
                                                                        variant="subtitle1"
                                                                        sx={{
                                                                            my: 0,
                                                                        }}
                                                                    >
                                                                        {renderOption2(
                                                                            option2
                                                                        )}
                                                                    </Typography>
                                                                </Tooltip>
                                                            </TableCell>
                                                        </TableRow> */}
                                                        <TableRow>
                                                            <TableCell>
                                                                <Tooltip
                                                                    arrow
                                                                    title={
                                                                        info_tooltip.street_noise
                                                                    }
                                                                >
                                                                    <Stack
                                                                        direction={
                                                                            "row"
                                                                        }
                                                                        gap={
                                                                            0.5
                                                                        }
                                                                        alignItems="center"
                                                                    >
                                                                        <GraphicEqSharpIcon />
                                                                        <Typography
                                                                            variant="subtitle1"
                                                                            lineHeight={
                                                                                1
                                                                            }
                                                                            sx={{
                                                                                my: 0,
                                                                            }}
                                                                        >
                                                                            Шумоизоляция
                                                                        </Typography>
                                                                    </Stack>
                                                                </Tooltip>
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    paddingLeft: 0,
                                                                }}
                                                            >
                                                                <Tooltip
                                                                    arrow
                                                                    title={
                                                                        info_tooltip.street_noise
                                                                    }
                                                                >
                                                                    <Typography
                                                                        variant="subtitle1"
                                                                        sx={{
                                                                            my: 0,
                                                                        }}
                                                                    >
                                                                        {renderStreetNoise(
                                                                            street_noise
                                                                        )}
                                                                    </Typography>
                                                                </Tooltip>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>
                                                                <Tooltip
                                                                    arrow
                                                                    title={
                                                                        info_tooltip.price
                                                                    }
                                                                >
                                                                    <Stack
                                                                        direction={
                                                                            "row"
                                                                        }
                                                                        gap={
                                                                            0.5
                                                                        }
                                                                        alignItems="center"
                                                                    >
                                                                        <CurrencyRubleSharpIcon />
                                                                        <Typography
                                                                            variant="subtitle1"
                                                                            sx={{
                                                                                my: 0,
                                                                            }}
                                                                        >
                                                                            Стоимость
                                                                        </Typography>
                                                                    </Stack>
                                                                </Tooltip>
                                                            </TableCell>
                                                            <TableCell
                                                                sx={{
                                                                    paddingLeft: 0,
                                                                }}
                                                            >
                                                                <Tooltip
                                                                    arrow
                                                                    title={
                                                                        info_tooltip.price
                                                                    }
                                                                >
                                                                    <Typography
                                                                        variant="subtitle1"
                                                                        sx={{
                                                                            my: 0,
                                                                        }}
                                                                    >
                                                                        {renderPrice(
                                                                            price
                                                                        )}
                                                                    </Typography>
                                                                </Tooltip>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Paper>
                                    </Grid>
                                );
                            }
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default WarmBalkonyChooser;
