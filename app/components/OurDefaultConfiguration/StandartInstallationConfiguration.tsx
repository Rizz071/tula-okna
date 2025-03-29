import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Box,
    List,
    ListItemText,
} from "@mui/material";
import Image from "next/image";

import image_profile from "@/public/images/profiles/veka_compare_2_800px.jpg";
import image_furniture from "@/public/images/uni-jet 2.0_42.png";
import image_steklopaket from "@/public/images/slides/steklopaket_1.jpg";
import image_profile_color from "@/public/images/lamination_1_crop.png";
import image_setka from "@/public/images/polotno_ms_2.png";

const StandartInstallationConfiguration = () => {
    return (
        <TableContainer component={Paper} elevation={12} sx={{ mt: 6 }}>
            <Table size="small" sx={{ tableLayout: "fixed" }}>
                <TableHead>
                    <TableRow sx={{ bgcolor: "#333" }}>
                        <TableCell>
                            <Typography
                                sx={{
                                    m: 1,
                                    p: 0,
                                    fontWeight: 400,
                                    textTransform: "uppercase",
                                    letterSpacing: "3px",
                                    textAlign: "center",
                                    bgcolor: "#333",
                                    color: "white",
                                }}
                            >
                                Монтажные работы
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ verticalAlign: "top" }}>
                        <TableCell>
                            <Typography sx={{ textTransform: "uppercase" }}>
                                Монтажные работы
                            </Typography>
                            <strong>
                                Для квартир всегда рассчитываем монтаж по ГОСТ:
                                <br />
                                ПСУЛ снаружи монтажного шва, и пароизоляционная
                                лента изнутри.
                            </strong>
                            <br />
                            При установке тёплых внутренних откосов из
                            сэндвич-панели есть возможность отказаться от
                            пароизоляции для небольшой экономии средств, потому
                            что сэндвич-панель уже имеет пароизоляционные
                            свойства.
                            <br />
                            <br />
                            Для загородных домов и всех нестандартных случаев
                            &mdash; всегда предлагаем монтаж по ГОСТ отдельной
                            строкой на согласование.
                            <br />
                            <br />
                            Любой, даже самый качественный оконный блок потеряет
                            все свои преимущества при неправильном монтаже,
                            поэтому профессиональная установка - это залог
                            отсутствия проблем с эксплуатацией в будущем. В
                            нашем распоряжении две монтажные бригады, работающие
                            с нами уже более 15 лет. Мы никогда не привлекаем к
                            монтажным работам посторонние бригады, т.к. не
                            уверены в их профессионализме. В пакет монтажных
                            услуг входят следующие работы: замеры, которые
                            производятся теми же монтажниками, которые в
                            дальнейшем будут проводить монтажные работы
                            (бесплатно)
                            <br />
                            <br />
                            аккуратная доставка на объект спецтранспортом
                            <br />
                            <br />
                            подъем на этаж (бесплатно)
                            <br />
                            <br />
                            демонтаж старых окон
                            <br />
                            <br />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StandartInstallationConfiguration;
