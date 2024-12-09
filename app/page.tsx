import HeroImageSlider from "./components/HeroImageSlider";
import ProductionCards from "./components/ProductionCards";
import {
    Container,
    Box,
    Typography,
    Grid,
    Divider,
    List,
    ListItem,
    Paper,
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    ListItemText,
} from "@mui/material";
import Image from "next/image";
import glassprom1 from "../public/images/glassprom1.jpg";
import besedka from "../public/images/besedka.webp";
import AllVsVeka from "../public/images/slides/AllVsVeka.png";
import FirstPageComparement from "./components/FirstPageComparement";
import worker_plant_1 from "../public/images/slides/worker_plant_1.jpg";
import veka_profil_ugol from "../public/images/slides/Softline_70_verh-niz_2.png";
import real_economy_1 from "../public/images/slides/real_economy_1.jpg";
import profile_compare_img from "../public/images/slides/profile_compare_house_1.jpg";
import preim_1 from "../public/images/prof.webp";
import preim_2 from "../public/images/vigodno.webp";
import preim_3 from "../public/images/udobno.webp";
import preim_4 from "../public/images/nadejno.webp";
import preim_5 from "../public/images/chestno.webp";
import preim_6 from "../public/images/bistro.webp";
import preim_7 from "../public/images/quality.webp";
import preim_8 from "../public/images/eco.webp";

// import NextLink from "next/link";
// import { Link as MUILink } from "@mui/material";

export default function Home() {
    return (
        <>
            <HeroImageSlider />
            <ProductionCards />
            <Container maxWidth="lg">
                <Grid
                    container
                    marginTop={0}
                    columnSpacing={6}
                    rowSpacing={10}
                    direction="row"
                    alignItems={"flex-start"}
                    justifyContent={"space-between"}
                >
                    <Grid item xs={12} marginY={0}>
                        <Typography variant="h1">
                            Производитель окон в Туле с 1998 года
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            display={"flex"}
                            flexDirection="column"
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Image
                                src={worker_plant_1}
                                alt={"worker at our old plant"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    border: "1px solid green",
                                    width: "100%",
                                    height: "auto",
                                }}
                                unoptimized
                            />
                            <Typography variant="subtitle2">
                                Мы собирали окна и двери на собственном
                                производстве c 1998 по 2019 г.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h2">
                            Собственное производство в Туле
                        </Typography>

                        <Typography>
                            Мы начинали как производители. Первый
                            производственный цех был открыт нами в Туле в 1998
                            году.
                        </Typography>
                        <Typography>
                            Сначала мы изготавливали деревянные окна, затем
                            евроокна из сосны, потом алюминиевые раздвижки, а
                            после этого открыли производство окон и дверей ПВХ.
                            Позже у нас в ассортименте появился фасадный
                            алюминий с окнами и входными группами.
                        </Typography>
                        <Typography>
                            В своих цехах мы наладили полный техпроцесс
                            производства.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs>
                        <Typography variant="h2">
                            Автоматизированное производство в Москве
                        </Typography>
                        <Typography>
                            С появлением на оконном рынке крупных заводов иметь
                            своё маленькое производство стало не выгодно. С 2019
                            года мы начали работать с заводами ЗАО
                            &quot;ГЛАССПРОМ&quot; и АО &quot;СОФОС&quot; на
                            партнёрских условиях.
                        </Typography>
                        <Typography>
                            Сейчас мы, как и раньше, проектируем окна и двери
                            сами, а затем отправляем заказ напрямую на
                            автоматизированное производство нашего партнёра в
                            Москву.
                        </Typography>
                        <Typography>
                            Там наш проект дополнительно проверяется
                            технологами, а готовая продукция на выходе
                            проверяется отделом технического контроля.
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Box
                            display={"flex"}
                            flexDirection="column"
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Image
                                src={glassprom1}
                                alt={"worker at our old plant"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    border: "1px solid black",
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                            <Typography variant="subtitle2">
                                Производственный цех нашего партнёра сегодня
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            justifyContent={"center"}
                        >
                            <Image
                                src={profile_compare_img}
                                alt={"Example of our work"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    border: "1px solid black",
                                    width: "100%",
                                    height: "auto",
                                }}
                            />

                            <Typography variant="subtitle2">
                                Широкий ассортимент оконной и дверной продукции
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h2">
                            Своим клиентам мы предлагаем:
                        </Typography>
                        <List sx={{ listStyleType: "disc" }}>
                            <ListItemText sx={{ display: "list-item" }}>
                                <strong>
                                    широкий выбор конструкций окон ПВХ под любые
                                    задачи:
                                </strong>{" "}
                                профильные системы VEKA, REHAU и KALEVA с
                                безупречной репутацией для квартиры, дома, дачи,
                                производственного помещения
                            </ListItemText>
                            <ListItemText sx={{ display: "list-item" }}>
                                <strong>
                                    гарантированное качество сборки продукции
                                </strong>
                                , подтвержденное протоколами государственных
                                испытаний и специальным гарантийным сроком
                            </ListItemText>
                            <ListItemText sx={{ display: "list-item" }}>
                                <strong>качественный монтаж</strong> с
                                использованием самых современных материалов,
                                соответствующих требованиям ГОСТ
                            </ListItemText>
                            <ListItemText sx={{ display: "list-item" }}>
                                <strong>фурнитуру премиум сегмента</strong> от
                                немецких производителей{" "}
                                <strong>Gretsch-Unitas</strong> и{" "}
                                <strong>ROTO Frank Fenster</strong>
                            </ListItemText>
                            <ListItemText sx={{ display: "list-item" }}>
                                <strong>фурнитуру экономичного сегмента</strong>{" "}
                                <strong>REZE</strong> - от ведущего
                                производителя Турции
                            </ListItemText>
                        </List>
                    </Grid>
                </Grid>
            </Container>

            <Box
                width={"100%"}
                bgcolor="#f7f7f7"
                paddingY={2}
                marginY={16}
                lineHeight={2}
            >
                <Typography
                    variant="sliderFont"
                    fontSize={{ xs: "1.7rem", sm: "30px" }}
                    fontWeight={"light"}
                    textAlign={"center"}
                    bgcolor={"#f7f7f7"}
                    gutterBottom
                >
                    Используем полновесное армирование профиля - толщиной от 1.5
                    до 2.5мм
                </Typography>
                <Typography
                    variant="sliderFont"
                    fontSize={{ xs: "1.7rem", sm: "30px" }}
                    textAlign={"center"}
                    bgcolor={"#f7f7f7"}
                    gutterBottom
                >
                    Для больших конструкций применяем технологию вклейки
                    стеклопакета в створку
                </Typography>
                <Typography
                    variant="sliderFont"
                    fontSize={{ xs: "1.7rem", sm: "30px" }}
                    textAlign={"center"}
                    bgcolor={"#f7f7f7"}
                    gutterBottom
                >
                    Устанавливаем проверенную фурнитуру от G-U и ROTO
                </Typography>
            </Box>

            <Container maxWidth="lg">
                <Grid container columnSpacing={8} rowSpacing={10}>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            display="flex"
                            flexDirection={"column"}
                            alignItems="center"
                            justifyContent="center"
                            bgcolor={"#f0f0f0"}
                            border={"1px solid"}
                            padding={2}
                        >
                            <Image
                                src={besedka}
                                alt={"Example of our work"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />

                            <Typography
                                variant="subtitle2"
                                fontWeight={"light"}
                                textAlign={"left"}
                                alignSelf={"flex-start"}
                            >
                                <strong>Остекление беседки</strong>
                                <br />
                                Образец нашей работы
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2">Настоящая гарантия</Typography>
                        <Typography>
                            Гарантийный срок — это единственная характеристика
                            надежности производителя, показатель его отношения к
                            своему клиенту.
                        </Typography>
                        <Typography>
                            Наша гарантия на окна составляет:{" "}
                            <strong>
                                3 года на изделие и 5 лет на монтажные работы
                            </strong>
                            . В течение этого периода «Тульские Окна» обязуются
                            бесплатно устранять любые неполадки, выполнять все
                            необходимые регулировки.
                        </Typography>
                        <Typography>
                            Гарантия распространяется на дефекты, связанные с
                            механизмом фурнитуры, герметичностью стеклопакетов,
                            стабильностью цвета профиля, работоспособностью
                            резинового уплотнителя, целостностью откосов из
                            сэндвич-панелей.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12} marginY={0}>
                        <Typography variant="h1" gutterBottom>
                            Краткое сравнение нашей продукции
                        </Typography>

                        <TableContainer component={Paper} elevation={12}>
                            <Table
                                // sx={{ minWidth: 650 }}
                                aria-label="Profile comapament table"
                                size="small"
                                style={{ tableLayout: "fixed" }}
                            >
                                <TableHead
                                    sx={{ bgcolor: "rgb(98, 106, 115)" }}
                                >
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "table-cell",
                                                },
                                            }}
                                        ></TableCell>
                                        <TableCell
                                            align="left"
                                            sx={{ verticalALign: "top" }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "white",
                                                    fontWeight: 500,
                                                    letterSpacing: 3,
                                                    textTransform: "uppercase",
                                                    my: 0,
                                                    py: 0,
                                                }}
                                            >
                                                Окна KALEVA
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                gutterBottom
                                                sx={{
                                                    color: "white",
                                                    fontWeight: 500,
                                                    letterSpacing: 3,
                                                    textTransform: "uppercase",
                                                    my: 0,
                                                    py: 0,
                                                }}
                                            >
                                                Profi, Standart
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            sx={{ verticalALign: "top" }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "white",
                                                    fontWeight: 500,
                                                    letterSpacing: 3,
                                                    textTransform: "uppercase",
                                                    my: 0,
                                                    py: 0,
                                                }}
                                            >
                                                Окна VEKA
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                gutterBottom
                                                sx={{
                                                    color: "white",
                                                    fontWeight: 500,
                                                    letterSpacing: 3,
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                Euroline, Softline
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            sx={{ verticalALign: "top" }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "white",
                                                    fontWeight: 500,
                                                    letterSpacing: 3,
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                Окна REHAU
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                gutterBottom
                                                sx={{
                                                    color: "white",
                                                    fontWeight: 500,

                                                    letterSpacing: 3,
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                Blitz, Constanta, Grazio,
                                                Delight, Intellio
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "table-cell",
                                                },
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Толщина стенок
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                Класс Б по ГОСТ (Россия)
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            sx={{
                                                bgcolor: "lightgreen",
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Класс А по RAL (Германия)
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                Класс А по ГОСТ (Россия)
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "table-cell",
                                                },
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Армирование в раме
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                П-образное
                                                <br />
                                                Замкнутое - опция
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            sx={{
                                                bgcolor: "lightgreen",
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Только замкнутый квадрат
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                П-образное
                                                <br />
                                                Замкнутое - опция
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "table-cell",
                                                },
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Степень глянца
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                Средняя
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                Средняя
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            sx={{
                                                bgcolor: "lightgreen",
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Высокая
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "table-cell",
                                                },
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Фурнитура
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                Gretsch-Unitas (Германия)
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                Gretsch-Unitas (Германия)
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                ROTO (Германия)
                                                <br />
                                                REZE (Турция)
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            component="th"
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "table-cell",
                                                },
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Стоимость
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="left"
                                            sx={{
                                                bgcolor: "lightgreen",
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Низкая цена
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                Средняя цена
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Typography variant="overline">
                                                Высокая цена
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow sx={{ verticalAlign: "top" }}>
                                        <TableCell
                                            component="th"
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "table-cell",
                                                },
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Рекомендованное применение
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <List
                                                sx={{
                                                    listStyleType: "disc",
                                                }}
                                            >
                                                {[
                                                    "Окна стандартных размеров",
                                                ].map((item, i) => (
                                                    <ListItemText
                                                        key={i}
                                                        sx={{
                                                            display:
                                                                "list-item",
                                                        }}
                                                    >
                                                        <Typography variant="overline">
                                                            {item}
                                                        </Typography>
                                                    </ListItemText>
                                                ))}
                                            </List>
                                        </TableCell>
                                        <TableCell>
                                            <List
                                                sx={{
                                                    listStyleType: "disc",
                                                }}
                                            >
                                                {[
                                                    "Окна любых размеров",
                                                    "Особо высокие нагрузки",
                                                ].map((item, i) => (
                                                    <ListItemText
                                                        key={i}
                                                        sx={{
                                                            display:
                                                                "list-item",
                                                        }}
                                                    >
                                                        <Typography variant="overline">
                                                            {item}
                                                        </Typography>
                                                    </ListItemText>
                                                ))}
                                            </List>
                                        </TableCell>
                                        <TableCell>
                                            <List
                                                sx={{ listStyleType: "disc" }}
                                            >
                                                {[
                                                    "Окна любых размеров",
                                                    "особо высокие требования по глянцу и белизне",
                                                ].map((item, i) => (
                                                    <ListItemText
                                                        key={i}
                                                        sx={{
                                                            display:
                                                                "list-item",
                                                        }}
                                                    >
                                                        <Typography variant="overline">
                                                            {item}
                                                        </Typography>
                                                    </ListItemText>
                                                ))}
                                            </List>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Typography align="center">
                            Представленное сравнение относится только к нашим
                            изделиям. Другие производители могут собирать окна и
                            двери совершенно иначе, но, тем не менее,
                            использовать аналогичные названия брендов и
                            технологий.
                        </Typography>
                        <Typography align="center">
                            Просим оценивать по данной таблице только нашу
                            продукцию и не применять её к чужим изделиям.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} marginY={0}>
                        <Typography variant="h1">
                            Уникальные отличия окон VEKA
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h2">
                            Квадратное армирование в раме
                        </Typography>
                        <Typography>
                            Важнейшее преимущество оконных систем VEKA и WHS -
                            замкнутое армирование в раме уже в стандартной
                            комплектации.
                        </Typography>
                        <Typography>
                            Крепить оконный блок за тонкую пластиковую стенку
                            запрещено по нормам ГОСТ. К сожалению, это самый
                            распространённый способ монтажа в РФ. Вызвано это
                            тем, что так закрепить окно в проёме легче всего.
                            Оконная рама прижимается нагелем в пластиковую
                            стенку профиля, а не в металл.
                        </Typography>
                        <Typography fontWeight={"bold"}>
                            Окна VEKA и WHS просто не получится закрепить
                            неправильно - этого не позволит сделать сама
                            конструкция окна.
                        </Typography>
                        <Typography fontWeight={"bold"} textAlign={"left"}>
                            Выгода потребителя:
                            <br />
                            &nbsp;- Окна VEKA и WHS by VEKA всегда закреплены по
                            ГОСТ.
                            <br />
                            &nbsp;- При установке окон на монтажную пластину
                            исключён люфт профиля.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        // padding={2}
                        // alignItems="center"
                        // justifyContent="center"
                    >
                        <Box
                            display="flex"
                            flexDirection={"column"}
                            alignItems="center"
                            justifyContent="center"
                            // bgcolor={"#f0f0f0"}
                            // border={"1px solid lightgray"}
                            padding={2}
                        >
                            <Image
                                src={AllVsVeka}
                                alt={"Example of our work"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                unoptimized
                            />

                            {/* <Typography
                                variant="subtitle2"
                                fontWeight={"light"}
                                textAlign={"left"}
                                alignSelf={"flex-start"}
                            >
                                <strong>
                                    Схема крепления оконной рамы в проём
                                </strong>
                                <br />
                                Преимущество систем VEKA
                            </Typography> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        // padding={2}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            display="flex"
                            flexDirection={"column"}
                            alignItems="center"
                            justifyContent="center"
                            // bgcolor={"#f0f0f0"}
                            // border={"1px solid"}
                            padding={2}
                        >
                            <Image
                                src={veka_profil_ugol}
                                alt={"Example of our work"}
                                // height={600}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "70%", height: "auto" }}
                                unoptimized
                            />

                            {/* <Typography
                                variant="subtitle2"
                                fontWeight={"light"}
                                textAlign={"left"}
                                alignSelf={"flex-start"}
                            >
                                <strong>
                                    Схема крепления оконной рамы в проём
                                </strong>
                                <br />
                                Преимущество систем VEKA
                            </Typography> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2">
                            Толщина стенки по евро стандарту
                        </Typography>
                        <Typography>
                            Профиль VEKA имеет одну из самых толстых стенок на
                            рынке, потому что изготавливается не по российскому
                            ГОСТ, а по более строгому европейскому DIN.
                        </Typography>
                        <Typography fontWeight={"bold"} textAlign={"left"}>
                            Выгода потребителя:
                            <br />
                            &nbsp;- Высокая прочность сварного шва на углах. Нет
                            трещин.
                            <br />
                            &nbsp;- Створки не провисают, все режимы открывания,
                            откидывания и закрывания функционируют исправно.
                        </Typography>
                        <Typography>
                            На рынке много оконных брендов, однако, из каких
                            именно профилей будут изготовлены окна, которые
                            попадутся потребителю - никто сказать не может. Это
                            уж как повезет.
                        </Typography>
                        <Typography>
                            Почему? Потому что на практике – более 80% всех окон
                            в России производятся из профилей класса Б.
                            Оптимизированных, адаптированных, урезанных и
                            сокращенных. Под звучными немецкими названиями – но
                            класса Б. С хлипкой наружной стенкой, низким сроком
                            службы и высокими эксплуатационными рисками.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} marginY={0}>
                        <Typography variant="h1">Наши преимущества</Typography>
                    </Grid>

                    {[
                        {
                            image: preim_1,
                            title_text: "профессионально",
                            descr_text: (
                                <Typography
                                    fontWeight={300}
                                    fontSize={"1.2rem"}
                                    lineHeight={"normal"}
                                >
                                    Индивидуально подберем окна, подходящие к
                                    типу вашего помещения.
                                    <br />
                                    <strong>
                                        Доверьте подбор окон специалистам!
                                    </strong>
                                </Typography>
                            ),
                        },
                        {
                            image: preim_2,
                            title_text: "способ оплаты",
                            descr_text: (
                                <Typography
                                    fontWeight={300}
                                    fontSize={"1.2rem"}
                                    lineHeight={"normal"}
                                >
                                    Все варианты оплаты - наличными, картой,
                                    переводом на счёт. В офисе или удалённо.
                                    Работаем с НДС.
                                </Typography>
                            ),
                        },
                        {
                            image: preim_3,
                            title_text: "договор на дому",
                            descr_text: (
                                <Typography
                                    fontWeight={300}
                                    fontSize={"1.2rem"}
                                    lineHeight={"normal"}
                                >
                                    Заключение договора на дому{" "}
                                    <strong>в удобное время</strong>. Разгрузку
                                    и подъем оконных конструкций к месту монтажа
                                    выполняют сотрудники нашей компании.
                                </Typography>
                            ),
                        },
                        {
                            image: preim_4,
                            title_text: "надёжно",
                            descr_text: (
                                <Typography
                                    fontWeight={300}
                                    fontSize={"1.2rem"}
                                    lineHeight={"normal"}
                                >
                                    <strong>Доставка спецтранспортом</strong>.
                                    Надежное крепление и упаковка предотвращают
                                    повреждения.
                                    <br />
                                    Реальная долгосрочная гарантия.
                                </Typography>
                            ),
                        },
                        {
                            image: preim_5,
                            title_text: "честно",
                            descr_text: (
                                <Typography
                                    fontWeight={300}
                                    fontSize={"1.2rem"}
                                    lineHeight={"normal"}
                                >
                                    Максимально точный расчет цены в день
                                    обращения. Перед подписанием договора Вы
                                    будете знать точную стоимость и конфигурацию
                                    заказа
                                </Typography>
                            ),
                        },
                        {
                            image: preim_6,
                            title_text: "быстро",
                            descr_text: (
                                <Typography
                                    fontWeight={300}
                                    fontSize={"1.2rem"}
                                    lineHeight={"normal"}
                                >
                                    От замера объекта до монтажа всех
                                    конструкций в соответствии с заказом пройдет
                                    не более 10 дней
                                </Typography>
                            ),
                        },
                        {
                            image: preim_7,
                            title_text: "качественно",
                            descr_text: (
                                <Typography
                                    fontWeight={300}
                                    fontSize={"1.2rem"}
                                    lineHeight={"normal"}
                                >
                                    Регулярная сертификация окон по ГОСТ. Монтаж
                                    производится квалифицированными бригадами в
                                    соответствии с нормами ГОСТ.
                                </Typography>
                            ),
                        },
                        {
                            image: preim_8,
                            title_text: "экологично",
                            descr_text: (
                                <Typography
                                    fontWeight={300}
                                    fontSize={"1.2rem"}
                                    lineHeight={"normal"}
                                >
                                    Наши окна не содержат в своём составе
                                    свинец! Они абсолютно безопасны для
                                    здоровья.
                                </Typography>
                            ),
                        },
                    ].map(({ image, title_text, descr_text }, index) => {
                        return (
                            <Grid item xs={6} md={3} key={index}>
                                <Box
                                    display={"flex"}
                                    flexDirection="column"
                                    justifyContent={"left"}
                                    alignItems={"top"}
                                >
                                    <Box height={"100px"}>
                                        <Image
                                            src={image}
                                            alt={"Профессионально"}
                                            style={
                                                {
                                                    // width: "30%",
                                                    // maxWidth: "100%",
                                                    // maxHeight: "100px",
                                                }
                                            }
                                        />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            letterSpacing: 2,
                                            textTransform: "uppercase",
                                            marginTop: 2,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {title_text}
                                    </Typography>
                                    {descr_text}
                                </Box>
                            </Grid>
                        );
                    })}

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            display="flex"
                            flexDirection={"column"}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Image
                                src={real_economy_1}
                                alt={"Illustration of economy in family"}
                                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={100}
                                // unoptimized
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} marginY={0}>
                        <Typography variant="h1">
                            Установка пластиковых окон
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Любое, даже самый качественный оконный блок потеряет
                            все свои преимущества при неправильном монтаже,
                            поэтому профессиональная установка - это залог
                            отсутствия проблем с эксплуатацией в будущем. В
                            нашем распоряжении две монтажные бригады, работающие
                            с нами уже более 15 лет. Мы никогда не привлекаем к
                            монтажным работам посторонние бригады, т.к. не
                            уверены в их профессионализме. В пакет монтажных
                            услуг входят следующие работы:
                        </Typography>
                        <List sx={{ listStyleType: "disc" }}>
                            {[
                                "замеры, которые производятся теми же монтажниками, которые в дальнейшем будут проводить монтажные работы (бесплатно)",
                                "аккуратная доставка на объект спецтранспортом (бесплатно по г.Туле)",
                                "подъем на этаж (бесплатно)",
                                "демонтаж старых окон (бесплатно)",
                                "профессиональный монтаж изделий. В перечень работ включены отделка оконного проема, регулировка фурнитуры, дополнительно - установка теплых откосов, отливов, подоконников",
                            ].map((item, index) => {
                                return (
                                    <ListItemText
                                        sx={{ display: "list-item", ml: 10 }}
                                        key={index}
                                    >
                                        {item}
                                    </ListItemText>
                                );
                            })}
                        </List>
                        <Typography>
                            При монтаже используются современные герметичные
                            гидро-, звуко-, теплоизоляционные материалы.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} marginY={0}>
                        <Typography variant="h1">
                            Как заказать "под ключ" окна Veka и Rehau в Туле и
                            области
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Для того чтобы заказать оконные блоки или остекление
                            балконов в Туле от нашей организации, выполните
                            несколько простых действий:
                        </Typography>
                        <List sx={{ listStyleType: "disc" }}>
                            {[
                                "обратитесь в диспетчерскую службу по телефону или по электронной почте. Опишите вашу задачу, укажите адрес, определите удобное время приезда замерщика. При обращении вы получите профессиональную консультацию по нашей продукции, срокам исполнения, стоимости, а также другим интересующим вас вопросам",
                                "определитесь с конфигурацией изделий",
                                "уточните детали заказа с замерщиком",
                                "подпишите договор",
                                "в назначенный срок ожидайте приезда бригады специалистов-монтажников",
                            ].map((item, index) => {
                                return (
                                    <ListItemText
                                        sx={{ display: "list-item", ml: 10 }}
                                        key={index}
                                    >
                                        {item}
                                    </ListItemText>
                                );
                            })}
                        </List>
                        <Typography>
                            Хотите сделать свою квартиру максимально комфортной,
                            привлекательной, безопасной - выберите оконные блоки
                            от нашей Компании!
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} marginY={0}>
                        <Typography variant="h1">
                            Как купить пластиковые окна Veka и Rehau для
                            самостоятельной установки
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Купить окна в Туле для самостоятельной установки
                            возможно у нас. Необходимый порядок действий:
                        </Typography>
                        <List sx={{ listStyleType: "disc" }}>
                            {[
                                "Снимите точные размеры оконного проема. Не забудьте учесть отклонение сторон от вертикальности-горизонтальности (с помощью строительного уровня)",
                                "Помните, что монтажный зазор между оконным блоком и проемом не может быть меньше 10мм, а также не желателен более 50мм. Зазор менее 10мм не обеспечит нужную теплоизоляцию оконной рамы - оконный блок будет промерзать!",
                                "Приезжайте к нам или присылайте эскизы окон с размерами для консультации со специалистом. Подскажем, какой тип оконного блока вам подойдет лучше всего. Оконные блоки для летнего дома, квартиры или коттеджа, не говоря уже о техническом помещениии, будут очень разные!",
                                "Подтвердите Счет-Договор на производство оконных/дверных блоков. Уточните возможность и стоимость доставки, срок изготовления ваших изделий.",
                                "Внесите необходимую предоплату (для заказов без нашего монтажа мы берём только 100% предоплату)",
                                "В согласованный день примите ваш заказ по акту приёмки",
                                "Обязательно учитывайте то, что установка окон требует профессиональных навыков! Прежде чем браться за самостоятельный монтаж обязательно изучите все нюансы, оцените непредвзято свои возможности.",
                            ].map((item, index) => {
                                return (
                                    <ListItemText
                                        sx={{ display: "list-item", ml: 10 }}
                                        key={index}
                                    >
                                        {item}
                                    </ListItemText>
                                );
                            })}
                        </List>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} marginY={0}>
                        <Typography variant="h1">
                            Как сэкономить на остеклении
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid
                            container
                            marginTop={0}
                            justifyContent={"space-between"}
                        >
                            <Grid item xs={5}>
                                <Typography variant="h2" align="center">
                                    Правильно:
                                </Typography>
                                <Typography fontWeight={500}>
                                    Попросить оконную компанию, которой Вы
                                    доверяете, подобрать подходящий тип окон и
                                    способ монтажа.
                                </Typography>
                                <Typography
                                    color={"DodgerBlue"}
                                    fontWeight={400}
                                    marginTop={0}
                                >
                                    ЭКОНОМИЯ: до 50% от цены заказа - нет
                                    переплаты за ненужные опции
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant="h2" align="center">
                                    Неправильно:
                                </Typography>
                                <Typography fontWeight={500}>
                                    Выбрать название известного бренда окон в
                                    интернет и заказать самые дешёвые или самые
                                    дорогие окна с таким названием.
                                </Typography>
                                <Typography
                                    // color={"red"}
                                    fontWeight={400}
                                    marginTop={0}
                                >
                                    ПОСЛЕДСТВИЯ: Деформация створок от жары
                                    летом и постоянный конденсат на стекле
                                    зимой, либо переплата за характеристики,
                                    которорые не приносят ощутимой пользы.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            marginTop={10}
                            justifyContent={"space-between"}
                        >
                            <Grid item xs={5}>
                                <Typography variant="h2" align="center">
                                    Правильно:
                                </Typography>
                                <Typography fontWeight={500}>
                                    При установке окон на срок более 3 лет
                                    доплатить за самую надёжную фурнитуру.
                                </Typography>
                                <Typography
                                    color={"DodgerBlue"}
                                    fontWeight={400}
                                    marginTop={0}
                                >
                                    ЭКОНОМИЯ ЗА 20 ЛЕТ: до 300.000 руб на
                                    платной регулировке (за 10 окон).
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography variant="h2" align="center">
                                    Неправильно:
                                </Typography>
                                <Typography fontWeight={500}>
                                    Сэкономить 1-2 тыс. руб с каждого окна за
                                    счёт дешёвых элементов фурнитуры, считая что
                                    всё работает одинаково.
                                </Typography>
                                <Typography
                                    // color={"red"}
                                    fontWeight={400}
                                    marginTop={0}
                                >
                                    ПОСЛЕДСТВИЯ: Плата от 1.500 руб за створку
                                    регулировщику при каждой смене сезона
                                    зима/лето для бессмысленной
                                    &quot;регулировки&quot; уставшего механизма
                                    из мягкого металла.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            marginTop={10}
                            justifyContent={"space-between"}
                        >
                            <Grid item xs={5}>
                                <Typography variant="h2" align="center">
                                    Правильно:
                                </Typography>
                                <Typography fontWeight={500}>
                                    Если в помещении есть возможность
                                    регулировать мощность отопления - нужно
                                    доплатить за более тёплый стеклопакет
                                </Typography>
                                <Typography
                                    color={"DodgerBlue"}
                                    fontWeight={400}
                                    marginTop={0}
                                >
                                    ЭКОНОМИЯ ЗА 20 ЛЕТ: от 400.000 до 1.600.000
                                    руб на отоплении зимой и кондиционировании
                                    летом (за 10 окон)
                                </Typography>
                            </Grid>

                            <Grid item xs={5}>
                                <Typography variant="h2" align="center">
                                    Неправильно:
                                </Typography>
                                <Typography fontWeight={500}>
                                    Сэкономить на глубине профиля и теплоте
                                    стеклопакета по 1-2 тыс. руб на оконном
                                    блоке.
                                </Typography>
                                <Typography
                                    // color={"red"}
                                    fontWeight={400}
                                    marginTop={0}
                                >
                                    ПОСЛЕДСТВИЯ: Потеря каждую зиму от 10.000 до
                                    40.000 руб на &quot;отапливании улицы&quot;.
                                    Летом страдать от жары и включать
                                    кондиционер на максимум.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            marginTop={10}
                            justifyContent={"space-between"}
                        >
                            <Grid item xs={5}>
                                <Typography variant="h2" align="center">
                                    Правильно:
                                </Typography>
                                <Typography fontWeight={500}>
                                    Для окон на первом этаже - доплатить за
                                    минимальную противовзломность
                                </Typography>
                                <Typography
                                    color={"DodgerBlue"}
                                    fontWeight={400}
                                    marginTop={0}
                                >
                                    Снижение угрозы жизни. Шум ломающейся защиты
                                    отпугнёт большинство преступников.
                                </Typography>
                            </Grid>
                            {/* <Grid item xs={1}>
                                <Divider orientation="vertical" />
                            </Grid> */}
                            <Grid item xs={5}>
                                <Typography variant="h2" align="center">
                                    Неправильно:
                                </Typography>
                                <Typography fontWeight={500}>
                                    Выбрать &quot;молодую&quot; оконную компанию
                                    с более низкими ценами за монтажные работы.
                                </Typography>
                                <Typography
                                    // color={"red"}
                                    fontWeight={400}
                                    marginTop={0}
                                >
                                    ПОСЛЕДСТВИЯ: Не стоит ждать качественного
                                    монтажа и соблюдения 5-летней гарантии по
                                    ГОСТ. Как правило, такие фирмы просто
                                    открываются каждый сезон под новыми
                                    юридическими названиями.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* <FirstPageComparement /> */}
        </>
    );
}
