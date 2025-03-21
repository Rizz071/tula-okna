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

import kaleva_profi from "@/public/images/klv_profi_tumblr_1.jpg";
import kaleva_standart from "@/public/images/klv_standart_tumblr_1.jpg";
import veka_euroline_1 from "@/public/images/el_0_1.png";
import veka_softline_70_1 from "@/public/images/veka_softline_70_tmblr_1.jpg";
import veka_softline_82_1 from "@/public/images/veka_softline_80_tmblr_1.jpg";
import { StaticImageData } from "next/image";

interface ICardDescriptionTable {
    system_title: string;
    image: StaticImageData;
    link: string;
    floor: number;
    heating: number;
    street_noise: number;
    price: number;
}

const ApartmentsWindowsChooser = () => {
    const [floor, setFloor] = React.useState<string>("0");
    const [heating, setHeating] = React.useState<string>("2");
    const [streetNoise, setStreetNoise] = React.useState<string>("2");
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

    const handleChangeStreetNoise = (event: SelectChangeEvent) => {
        setStreetNoise(event.target.value as string);
    };

    useEffect(() => {
        const initialApatmentWindowsList: ICardDescriptionTable[] = [
            {
                system_title: "калева профи 60",
                image: kaleva_profi,
                link: "/okna/kaleva_profi",
                floor: 0,
                heating: 2,
                street_noise: 2,
                price: 0,
            },
            {
                system_title: "калева стандарт 70",
                image: kaleva_standart,
                link: "/okna/kaleva_standart",
                floor: 1,
                heating: 1,
                street_noise: 2,
                price: 0,
            },
            {
                system_title: "VEKA Euroline 58",
                image: veka_euroline_1,
                link: "/okna/veka_euroline",
                floor: 0,
                heating: 2,
                street_noise: 2,
                price: 1,
            },
            {
                system_title: "VEKA Softline 70",
                image: veka_softline_70_1,
                link: "/okna/veka_softline_70",
                floor: 2,
                heating: 1,
                street_noise: 1,
                price: 1,
            },
            {
                system_title: "VEKA Softline 82",
                image: veka_softline_82_1,
                link: "/okna/veka_softline_82",
                floor: 3,
                heating: 0,
                street_noise: 0,
                price: 2,
            },
        ];
        setApartmentWindowsList(
            initialApatmentWindowsList.filter((item) => {
                if (
                    item.floor >= parseInt(floor) &&
                    item.heating <= parseInt(heating) &&
                    item.street_noise <= parseInt(streetNoise)
                )
                    return true;

                if (floor == "10" && heating == "10" && streetNoise == "10") {
                    return true;
                }

                return false;
            })
        );
    }, [floor, heating, streetNoise]);

    useEffect(() => {
        console.log(apartmentWindowsList);
    }, [apartmentWindowsList]);

    const info_tooltip = {
        floor: "Этажность влияет на ветровую нагрузку. Чем выше этаж - тем она сильнее. Если оконный блок не выдерживает ветровую нагрузку, то зимой окно будет промерзать.",
        heating:
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

    const renderHeating = (heating: number): string => {
        switch (heating) {
            case 0:
                return "Слабое";
            case 1:
                return "Нормальное";
            case 2:
                return "Избыточное";
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
                >
                    {/* <Grid size={{ xs: 12 }}>
                        <Typography variant="h1">Окна в квартиру</Typography>
                        <Typography gutterBottom>
                            Основные критерии при подборе окон в квартиру это:
                            этажность, качество отопления и вентилляции
                            (вытяжки).
                        </Typography>
                        <Typography gutterBottom>
                            Стелопакет для остекления квартир мы рекомендум
                            использовать из трёх стекол для защиты от уличного
                            шума, и с одним или двумя энергосберегающии
                            покрытиями для предотвращения
                            &quot;запотевания&quot; окна.
                        </Typography>
                    </Grid> */}

                    <Grid
                        container
                        direction={"row"}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                        rowGap={2}
                    >
                        <Grid size={{ xs: 12 }}>
                            <Typography
                                variant="h2"
                                align="center"
                                marginTop={5}
                                gutterBottom
                            >
                                Выберите параметры помещения
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
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
                                        <MenuItem value={"10"}>
                                            Не выбрано
                                        </MenuItem>
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

                        <Grid size={{ xs: 12, md: 3 }}>
                            <Box sx={{ maxWidth: { xs: "auto", lg: 300 } }}>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel
                                        id="heating-select-input-label"
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
                                        &nbsp;Отопление
                                    </InputLabel>
                                    <Select
                                        labelId="heating-select-label"
                                        id="heating-select"
                                        value={heating}
                                        label="Heating"
                                        onChange={handleChangeHeating}
                                        sx={{ pt: 1 }}
                                    >
                                        <MenuItem value={"10"}>
                                            Не выбрано
                                        </MenuItem>
                                        <MenuItem value={"2"}>
                                            Избыточное
                                        </MenuItem>
                                        <MenuItem value={"1"}>
                                            Нормальное
                                        </MenuItem>
                                        <MenuItem value={"0"}>
                                            Недостаточное
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 3 }}>
                            <Box sx={{ maxWidth: { xs: "auto", lg: 300 } }}>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel
                                        id="output-air-select-label"
                                        sx={{
                                            fontWeight: 500,
                                            color: "black",
                                            fontSize: "larger",
                                        }}
                                    >
                                        <GraphicEqSharpIcon
                                            sx={{
                                                verticalAlign: "bottom",
                                                fontSize: "1.8rem",
                                            }}
                                        />
                                        &nbsp;Уличный шум
                                    </InputLabel>
                                    <Select
                                        labelId="output-air-select-label"
                                        id="output-air-select"
                                        value={streetNoise}
                                        label="streetNoise"
                                        onChange={handleChangeStreetNoise}
                                        sx={{ pt: 1 }}
                                    >
                                        <MenuItem value={"10"}>
                                            Не выбрано
                                        </MenuItem>
                                        <MenuItem value={"2"}>
                                            Слабый уровень
                                        </MenuItem>
                                        <MenuItem value={"1"}>
                                            Средний уровень
                                        </MenuItem>
                                        <MenuItem value={"0"}>
                                            Сильный уровень
                                        </MenuItem>
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
                                                                    info_tooltip.floor
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
                                                                    info_tooltip.heating
                                                                }
                                                            >
                                                                <Typography
                                                                    variant="subtitle1"
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
                                                                    info_tooltip.street_noise
                                                                }
                                                            >
                                                                <Stack
                                                                    direction={
                                                                        "row"
                                                                    }
                                                                    gap={0.5}
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
                                                                    gap={0.5}
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
            </Container>
        </>
    );
};

export default ApartmentsWindowsChooser;
