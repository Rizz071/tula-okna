"use client";

import React, { useEffect } from "react";
import {
    Container,
    Box,
    Typography,
    Grid,
    Paper,
    Divider,
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
    Button,
} from "@mui/material";

import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";

import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import FireplaceSharpIcon from "@mui/icons-material/FireplaceSharp";
import HvacSharpIcon from "@mui/icons-material/HvacSharp";
import CurrencyRubleSharpIcon from "@mui/icons-material/CurrencyRubleSharp";

import ButtonImage from "../components/ButtonImage";

import okna_pvc from "../../public/images/about2.jpg";
import okna_alu from "../../public/images/dveri/alumarks70.jpg";
import { randomInt } from "crypto";
import { StaticImageData } from "next/image";

interface ICardDescriptionTable {
    system_title: string;
    image: StaticImageData;
    link: string;
    floor: number;
    heating: number;
    output_air: number;
    price: number;
}

export default function Page() {
    const [floor, setFloor] = React.useState<string>("1");
    const [heating, setHeating] = React.useState<string>("1");
    const [outputAir, setOutputAir] = React.useState<string>("1");
    const [apartmentWindowsList, setApartmentWindowsList] = React.useState<
        ICardDescriptionTable[]
    >([]);

    const handleChangeFloor = (event: SelectChangeEvent) => {
        setFloor(event.target.value as string);
        console.log(() => floor);
    };

    const handleChangeHeating = (event: SelectChangeEvent) => {
        setHeating(event.target.value as string);
    };

    const handleChangeOutputAir = (event: SelectChangeEvent) => {
        setOutputAir(event.target.value as string);
    };
    const initialApatmentWindowsList: ICardDescriptionTable[] = [
        {
            system_title: "калева профи 60",
            image: okna_pvc,
            link: "",
            floor: 0,
            heating: 2,
            output_air: 2,
            price: 0,
        },
        {
            system_title: "калева стандарт 70",
            image: okna_pvc,
            link: "",
            floor: 1,
            heating: 1,
            output_air: 1,
            price: 0,
        },
        {
            system_title: "VEKA Softline 70",
            image: okna_pvc,
            link: "",
            floor: 2,
            heating: 1,
            output_air: 1,
            price: 1,
        },
        {
            system_title: "VEKA Softline 82",
            image: okna_pvc,
            link: "",
            floor: 3,
            heating: 0,
            output_air: 0,
            price: 2,
        },
    ];

    useEffect(() => {
        setApartmentWindowsList(
            initialApatmentWindowsList.filter((item) => {
                if (item.heating <= parseInt(heating)) return true;
                return false;
            })
        );
    }, [heating]);

    useEffect(() => {
        console.log(apartmentWindowsList);
    }, [apartmentWindowsList]);

    const info_tooltip = {
        floor: "Этажность влияет на ветровую нагрузку. Чем выше этаж - тем она сильнее. Если оконный блок не выдерживает ветровую нагрузку, то зимой окно будет промерзать.",
        heating:
            "Источник тепла обогревает внутреннее стекло стелопакета. Если тепла недостаточно - точка росы смещается на стело и выпадает конденсат. Если тепла сильно не хватает - возникает &quot;ложный сквозняк&quot; (ветер) от окна.",
        output_air:
            "Вытяжка отводит лишнюю влажность из помещения. При нерабочей вытяжке влажность воздуха повышается настолько, что точка росы смещается на стело и выпадает конденсат.",
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
                return "До 9 этажа";
            case 1:
                return "До 12 этажа";
            case 2:
                return "До 17 этажа";
            case 3:
                return "Выше 17 этажа";
            default:
                return "";
        }
    };

    const renderHeating = (heating: number): string => {
        switch (heating) {
            case 0:
                return "Любое";
            case 1:
                return "Нормальное";
            case 2:
                return "Избыточное";
            default:
                return "";
        }
    };

    const renderOutputAir = (output_air: number): string => {
        switch (output_air) {
            case 0:
                return "Любая";
            case 1:
                return "Нормальная";
            case 2:
                return "Отличная";
            default:
                return "";
        }
    };

    return (
        <Container maxWidth={"lg"}>
            <Grid
                container
                marginTop={0}
                columnSpacing={1}
                rowSpacing={10}
                direction={"row"}
                alignItems={"flex-start"}
                justifyContent={"space-evenly"}
            >
                <Grid item xs={12}>
                    <Typography variant="h1">Окна в квартиру</Typography>
                    <Typography>
                        Основные критерии при подборе окон в квартиру это:
                        этажность, качество отопления и вентилляции (вытяжки).
                        Стелопакет для остекления квартир мы рекомендум
                        использовать из трёх стекол для защиты от уличного шума,
                        и с одним или двумя энергосберегающии покрытиями для
                        предотвращения &quot;запотевания&quot; окна.
                        <br />В средней полосе России довольно много пасмурных
                        дней в году и сохранение инсоляции комнаты жизненно
                        необходимо. Энергосберегающие покрытия практически не
                        уменьшают световой поток, поступающий через окно. Потери
                        света при установке мультифуционального покрытия
                        значительно выше чем у энергосберегающего, поэтому в
                        общем случая его применение в квартире нецелесообразно.
                    </Typography>
                </Grid>

                <Grid
                    container
                    direction={"row"}
                    alignItems={"flex-start"}
                    justifyContent={"space-evenly"}
                >
                    <Grid item xs={12} sm={3} md={3}>
                        <Box>
                            <FormControl fullWidth size="small">
                                <InputLabel id="floor-select-input-label">
                                    Этаж
                                </InputLabel>
                                <Select
                                    labelId="floor-select-label"
                                    id="floor-select"
                                    value={floor}
                                    label="Floor"
                                    onChange={handleChangeFloor}
                                >
                                    <MenuItem value={"10"}>Не выбрано</MenuItem>
                                    <MenuItem value={"0"}>До 9 этажа</MenuItem>
                                    <MenuItem value={"1"}>До 12 этажа</MenuItem>
                                    <MenuItem value={"2"}>До 17 этажа</MenuItem>
                                    <MenuItem value={"3"}>
                                        От 18 этажа и выше
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} md={3}>
                        <Box>
                            <FormControl fullWidth size="small">
                                <InputLabel id="heating-select-input-label">
                                    Отопление
                                </InputLabel>
                                <Select
                                    labelId="heating-select-label"
                                    id="heating-select"
                                    value={heating}
                                    label="Heating"
                                    onChange={handleChangeHeating}
                                >
                                    <MenuItem value={"10"}>Не выбрано</MenuItem>
                                    <MenuItem value={"2"}>Избыточное</MenuItem>
                                    <MenuItem value={"1"}>Нормальное</MenuItem>
                                    <MenuItem value={"0"}>
                                        Недостаточное
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3} md={3}>
                        <Box>
                            <FormControl fullWidth size="small">
                                <InputLabel id="output-air-select-label">
                                    Вытяжка
                                </InputLabel>
                                <Select
                                    labelId="output-air-select-label"
                                    id="output-air-select"
                                    value={outputAir}
                                    label="OutputAir"
                                    onChange={handleChangeOutputAir}
                                >
                                    <MenuItem value={"10"}>Не выбрано</MenuItem>
                                    <MenuItem value={"2"}>Отличная</MenuItem>
                                    <MenuItem value={"1"}>Нормальная</MenuItem>
                                    <MenuItem value={"0"}>Слабая</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>

                {apartmentWindowsList.map(
                    (
                        {
                            system_title,
                            image,
                            link,
                            floor,
                            heating,
                            output_air,
                            price,
                        },
                        index
                    ) => {
                        return (
                            <Grid item marginY={0} key={index}>
                                <Paper square elevation={6}>
                                    <Box>
                                        <ButtonImage
                                            caption={system_title}
                                            image={image}
                                            link={link}
                                        />
                                    </Box>

                                    <TableContainer component={Paper}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell
                                                        colSpan={2}
                                                        align="center"
                                                    >
                                                        <Typography
                                                            variant="button"
                                                            sx={{
                                                                m: 0,
                                                            }}
                                                        >
                                                            Помещение для
                                                            установки
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
                                                                info_tooltip.floor
                                                            }
                                                        >
                                                            <Stack
                                                                direction={
                                                                    "row"
                                                                }
                                                                gap={0.5}
                                                                alignItems="center"
                                                            >
                                                                <ApartmentSharpIcon />

                                                                <Typography
                                                                    sx={{
                                                                        my: 0,
                                                                    }}
                                                                >
                                                                    Этаж
                                                                </Typography>
                                                            </Stack>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Tooltip
                                                            arrow
                                                            title={
                                                                info_tooltip.floor
                                                            }
                                                        >
                                                            <Typography
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
                                                <TableRow>
                                                    <TableCell>
                                                        <Tooltip
                                                            arrow
                                                            title={
                                                                info_tooltip.heating
                                                            }
                                                        >
                                                            <Stack
                                                                direction={
                                                                    "row"
                                                                }
                                                                gap={0.5}
                                                                alignItems="center"
                                                            >
                                                                <FireplaceSharpIcon />
                                                                <Typography
                                                                    sx={{
                                                                        my: 0,
                                                                    }}
                                                                >
                                                                    Отопление1
                                                                </Typography>
                                                            </Stack>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Tooltip
                                                            arrow
                                                            title={
                                                                info_tooltip.heating
                                                            }
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    my: 0,
                                                                }}
                                                            >
                                                                {renderHeating(
                                                                    heating
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
                                                                info_tooltip.output_air
                                                            }
                                                        >
                                                            <Stack
                                                                direction={
                                                                    "row"
                                                                }
                                                                gap={0.5}
                                                                alignItems="center"
                                                            >
                                                                <HvacSharpIcon />
                                                                <Typography
                                                                    sx={{
                                                                        my: 0,
                                                                    }}
                                                                >
                                                                    Вытяжка
                                                                </Typography>
                                                            </Stack>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Tooltip
                                                            arrow
                                                            title={
                                                                info_tooltip.output_air
                                                            }
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    my: 0,
                                                                }}
                                                            >
                                                                {renderOutputAir(
                                                                    output_air
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
                                                                gap={0.5}
                                                                alignItems="center"
                                                            >
                                                                <CurrencyRubleSharpIcon />
                                                                <Typography
                                                                    sx={{
                                                                        my: 0,
                                                                    }}
                                                                >
                                                                    Стоимость
                                                                </Typography>
                                                            </Stack>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Tooltip
                                                            arrow
                                                            title={
                                                                info_tooltip.price
                                                            }
                                                        >
                                                            <Typography
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
        </Container>
    );
}
