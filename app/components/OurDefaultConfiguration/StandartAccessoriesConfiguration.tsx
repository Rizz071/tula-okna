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
} from "@mui/material";
import Image from "next/image";

import image_profile from "@/public/images/profiles/veka_compare_2_800px.jpg";
import image_furniture from "@/public/images/uni-jet 2.0_42.png";
import image_steklopaket from "@/public/images/slides/steklopaket_1.jpg";
import image_profile_color from "@/public/images/lamination_1_crop.png";
import image_setka from "@/public/images/polotno_ms_2.png";

const StandartAccessoriesConfiguration = () => {
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
                                Общие комплектующие
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ verticalAlign: "top" }}>
                        <TableCell sx={{ p: 4 }}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "300px",
                                    textAlign: "center",
                                }}
                            >
                                <Image
                                    src={image_steklopaket}
                                    width={image_steklopaket.width}
                                    height={image_steklopaket.height}
                                    alt={"Стеклопакет"}
                                    style={{
                                        width: "auto",
                                        height: "100%",
                                        verticalAlign: "bottom",
                                    }}
                                />
                            </Box>
                            <Typography
                                gutterBottom
                                sx={{
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                }}
                            >
                                Стеклопакет
                            </Typography>
                            <Box sx={{ ml: { xs: 0, md: 2 } }}>
                                <strong>Для отапливаемых помещений:</strong>
                                <br />
                                всегда 3 стекла с двумя энергосберегающими
                                покрытиями (типа &quot;И-стекло&quot;, либо
                                &quot;МФ-&quot; + &quot;И-стекло&quot;),
                                <br />
                                <br />
                                <strong>
                                    Для неотапливаемых холодных помещений:
                                </strong>
                                <br />2 стекла с одним энергосберегающим
                                покрытием (типа &quot;И-стекло&quot;).
                                <br />
                                <br />
                                <strong>Вклейка стеклопакета</strong>
                                <br />
                                применяется нами для значительного повышения
                                прочности больших створок.
                                <br />
                                <br />
                                Вклеиваем стеклопакет в раму створки в
                                обязательном порядке:
                                <br />
                                в особо больших оконных створках &mdash; при
                                ширине более 900мм,
                                <br />в дверных створках белого цвета &mdash;
                                при ширине от 900мм и в цветных &mdash; при
                                ширине от 800мм.
                            </Box>
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ verticalAlign: "top" }}>
                        <TableCell>
                            <Box
                                sx={{
                                    pt: 4,
                                    width: "100%",
                                    height: "300px",
                                    textAlign: "center",
                                }}
                            >
                                <Image
                                    src={image_profile_color}
                                    width={image_profile_color.width}
                                    height={image_profile_color.height}
                                    alt={"Декорирование профиля ПВХ"}
                                    style={{
                                        width: "auto",
                                        height: "100%",
                                        verticalAlign: "bottom",
                                    }}
                                />
                            </Box>
                            <Typography
                                gutterBottom
                                sx={{
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                }}
                            >
                                Декорирование профиля
                            </Typography>
                            <Box sx={{ ml: { xs: 0, md: 2 } }}>
                                <strong>
                                    Ламинационная плёнка LX Hausys (бывший LG,
                                    Корея).
                                </strong>
                                <br />
                                <br />
                                <strong>
                                    Окраска в любой простой цвет по таблице RAL.
                                </strong>
                            </Box>
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ verticalAlign: "top" }}>
                        <TableCell>
                            <Box
                                sx={{
                                    pt: 4,
                                    width: "100%",
                                    height: "200px",
                                    textAlign: "center",
                                }}
                            >
                                <Image
                                    src={image_setka}
                                    width={image_setka.width}
                                    height={image_setka.height}
                                    alt={"Полотно москитной сетки"}
                                    style={{
                                        width: "auto",
                                        height: "100%",
                                        verticalAlign: "bottom",
                                    }}
                                />
                            </Box>
                            <Typography
                                gutterBottom
                                sx={{
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                }}
                            >
                                Москитная сетка
                            </Typography>
                            <Box sx={{ ml: { xs: 0, md: 2 } }}>
                                <strong>
                                    1 штука всегда включена в стоимость каждого
                                    окна.
                                </strong>
                                <br />
                                По запросу поставляем сетку
                                &quot;Антикошка&quot; и &quot;Антипыльца&quot;
                            </Box>
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ verticalAlign: "top" }}>
                        <TableCell>
                            <Typography sx={{ textTransform: "uppercase" }}>
                                Подоконник
                            </Typography>
                            В стандартном варианте расчёта применяем подоконник
                            ПДК Российского производства.
                            <br />
                            <br />
                            По запросу поставляем подоконники Moller
                            (Германия/Россия), Витраж, ПДК Премиум А.
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{ verticalAlign: "top" }}>
                        <TableCell>
                            <Typography sx={{ textTransform: "uppercase" }}>
                                Внутренние откосы
                            </Typography>
                            <strong>
                                Применяем только тёплую сэндвич-панель толщиной
                                9-10мм.
                            </strong>
                            <br />
                            Пропениваем пространство под панелью, чтобы откосы
                            &quot;не играл&quot;.
                            <br />
                            Никогда не применяем полые пластиковые панели, т.к.
                            они просвечиваются и промерзают.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StandartAccessoriesConfiguration;
