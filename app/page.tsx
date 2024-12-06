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
                                style={{
                                    border: "1px solid black",
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
                            Собственное производство
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
                            Сегодня - автоматизированное производство в Москве
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
                                style={{
                                    // border: "1px solid black",
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
                    Используем только полновесное армирование профиля - толщиной
                    от 1.5 до 2.5мм
                </Typography>
                <Typography
                    variant="sliderFont"
                    fontSize={{ xs: "1.7rem", sm: "30px" }}
                    textAlign={"center"}
                    bgcolor={"#f7f7f7"}
                    gutterBottom
                >
                    Для габаритных конструкций применяем современную технологию
                    вклейки стеклопакета в створку
                </Typography>
                <Typography
                    variant="sliderFont"
                    fontSize={{ xs: "1.7rem", sm: "30px" }}
                    textAlign={"center"}
                    bgcolor={"#f7f7f7"}
                    gutterBottom
                >
                    Устанавливаем только проверенную лично нами в сборке и
                    эксплуатации фурнитуру
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
                                        <TableCell></TableCell>
                                        <TableCell
                                            align="justify"
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
                                            align="justify"
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
                                            align="justify"
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
                                        <TableCell component="th">
                                            <Typography variant="overline">
                                                Толщина стенок
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                Класс Б по ГОСТ (Россия)
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="justify"
                                            sx={{
                                                bgcolor: "lightgreen",
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Класс А по RAL (Германия)
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                Класс А по ГОСТ (Россия)
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">
                                            <Typography variant="overline">
                                                Армирование в раме
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                П-образное
                                                <br />
                                                Замкнутое - опция
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="justify"
                                            sx={{
                                                bgcolor: "lightgreen",
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Только замкнутый квадрат
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                П-образное
                                                <br />
                                                Замкнутое - опция
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">
                                            <Typography variant="overline">
                                                Степень глянца
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                Средняя
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                Средняя
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="justify"
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
                                        <TableCell component="th">
                                            <Typography variant="overline">
                                                Фурнитура
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                Gretsch-Unitas (Германия)
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                Gretsch-Unitas (Германия)
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                ROTO (Германия)
                                                <br />
                                                REZE (Турция)
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th">
                                            <Typography variant="overline">
                                                Стоимость
                                            </Typography>
                                        </TableCell>
                                        <TableCell
                                            align="justify"
                                            sx={{
                                                bgcolor: "lightgreen",
                                            }}
                                        >
                                            <Typography variant="overline">
                                                Низкая цена
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                Средняя цена
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="justify">
                                            <Typography variant="overline">
                                                Высокая цена
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow sx={{ verticalAlign: "top" }}>
                                        <TableCell component="th">
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
                                // style={{ width: "100%", height: "auto" }}
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
                                height={600}
                                // style={{ width: "100%", height: "auto" }}
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
                    <Grid item xs={12}>
                        <Box
                            display="flex"
                            flexDirection={"column"}
                            alignItems="center"
                            justifyContent="center"
                            // padding={2}
                        >
                            <Image
                                src={real_economy_1}
                                alt={"Illustration of economy in family"}
                                // sizes={"100vw"}
                                // quality={100}
                                // fill
                                // style={{ objectFit: "cover" }}
                                height={500}
                                // style={{ width: "100%", height: "auto" }}
                                unoptimized
                            />
                        </Box>
                    </Grid>

                    {/* <Grid item xs={12}>
                        <Divider />
                    </Grid> */}

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
