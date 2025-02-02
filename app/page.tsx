import HeaderSlider from "./components/HeaderSlider";
import {
    Container,
    Box,
    Typography,
    Divider,
    List,
    Paper,
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    ListItemText,
    Stepper,
    Step,
    StepLabel,
    StepContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import glassprom1 from "../public/images/glassprom1.jpg";
import besedka from "../public/images/besedka.webp";
import AllVsVeka from "../public/images/slides/AllVsVeka.png";
import worker_plant_1 from "../public/images/slides/worker_plant_1.jpg";
import veka_profil_ugol from "../public/images/slides/Softline_70_verh-niz_2.png";
import real_economy_1 from "../public/images/slides/real_economy_1.jpg";
import profile_compare_img from "../public/images/slides/profile_compare_house_1.jpg";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import kaleva_sert_1 from "../public/images/certificates/kaleva_sert_1.jpg";
import veka_sert_1 from "../public/images/certificates/veka_sert_1.jpg";
import rehau_sert_1 from "../public/images/certificates/rehau_cert1.jpg";
import slideImage from "@/public/images/slides/MainSlide_6k_sharp.jpg";
import Front_small_2 from "@/public/images/Front_small_2.webp";
import Front_small_3 from "@/public/images/Front_small_3.webp";
import House from "@/public/images/House.webp";
import Doors from "@/public/images/Doors.webp";
import apartements1 from "@/public/images/footer-okno_tmblr.jpg";
import dacha1 from "@/public/images/dacha1_104px.jpeg";
import { ImageSide } from "./lib/types";
import ProductionCardsContainer from "./components/ProductionCards/ProductionCardsContainer";
import ArticlesContainer from "./components/Article/ArticlesContainer";
import ResponsiveHeader_H1 from "./components/Article/ResponsiveHeader_H1";
import AdvantagesContainer from "./components/AdvantagesContainer";

export default function Home() {
    return (
        <>
            <HeaderSlider sliderImage={slideImage} isCardVisible={true} />
            <ProductionCardsContainer
                title={"Продукция и услуги"}
                cardsArray={[
                    {
                        image: apartements1,
                        caption: "Остекление квартир",
                        link: "/okna/apartments",
                    },
                    {
                        image: Front_small_2,
                        caption: "Остекление и отделка балконов",
                        link: "/balkony",
                    },
                    {
                        image: House,
                        caption: "Остекление домов",
                        link: "/okna/cottage",
                    },
                    {
                        image: dacha1,
                        caption: "Остекление дач и беседок",
                        link: "6 000",
                    },
                    {
                        image: Doors,
                        caption: "Входные двери для предприятий",
                        link: "15 000",
                    },
                    {
                        image: Front_small_3,
                        caption: "Раздвижные двери-порталы",
                        link: "59 000",
                    },
                ]}
            />

            <ArticlesContainer
                mainTitle={"НАША ИСТОРИЯ"}
                articles={[
                    {
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Собственное производство в Туле",
                        articleParagraphsJSX: [
                            <>
                                Мы начинали как производители. Первый
                                производственный цех был открыт нами в Туле в
                                1998 году.
                            </>,
                            <>
                                Сначала мы изготавливали деревянные окна, затем
                                евроокна из сосны, потом алюминиевые раздвижки,
                                а после этого открыли производство окон и дверей
                                ПВХ. Позже у нас в ассортименте появился
                                фасадный алюминий с окнами и входными группами.
                            </>,
                            <>
                                В своих цехах мы наладили полный техпроцесс
                                производства.
                            </>,
                        ],
                        articlesAccordion: [
                            {
                                accordionTitle:
                                    "Откуда вообще берётся тонкий профиль?",
                                accordionParagraphs: [
                                    "Заводы выпускают облегчённый профиль для изготовления маленьких рам. Например, он хорошо подходит для изготовления шкафов-купе, окон раздачи в учреждениях питания и т.д.",
                                    "Однако, пользуясь тем, что потребитель не различает полновесный профиль от низкосортного, недобросовестные монтажнные организации применяют его буквально везде.",
                                    "В итоге потребитель платит немного меньше при заказе такой продукции, но через некоторое время сталкивается с негативными последствиями.",
                                ],
                            },
                        ],
                        articleImageJSX: (
                            <>
                                <Image
                                    src={worker_plant_1}
                                    alt={"worker at our old plant"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        border: "1px solid grey",
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    unoptimized
                                />
                                <Typography
                                    variant="subtitle2"
                                    sx={{ textAlign: "center", mt: 0 }}
                                >
                                    Благодаря производственному опыту, мы знаем
                                    точно, какими должны быть качественно
                                    собранные окна.
                                </Typography>
                            </>
                        ),
                    },

                    {
                        imageSide: ImageSide.RIGHT,
                        articleTitle:
                            "Автоматизированное производство в Москве",
                        articleParagraphsJSX: [
                            <>
                                С появлением на оконном рынке крупных заводов
                                иметь своё маленькое производство стало не
                                выгодно. С 2019 года мы начали работать с
                                заводами ЗАО &quot;ГЛАССПРОМ&quot; и АО
                                &quot;СОФОС&quot; на партнёрских условиях.
                            </>,
                            <>
                                Сейчас мы, как и раньше, проектируем окна и
                                двери сами, а затем отправляем заказ напрямую на
                                автоматизированное производство нашего партнёра
                                в Москву.
                            </>,
                            <>
                                Там наш проект дополнительно проверяется
                                технологами, а готовая продукция на выходе
                                проверяется отделом технического контроля.
                            </>,
                        ],
                        articlesAccordion: [
                            {
                                accordionTitle:
                                    "Откуда вообще берётся тонкий профиль?",
                                accordionParagraphs: [
                                    "Заводы выпускают облегчённый профиль для изготовления маленьких рам. Например, он хорошо подходит для изготовления шкафов-купе, окон раздачи в учреждениях питания и т.д.",
                                    "Однако, пользуясь тем, что потребитель не различает полновесный профиль от низкосортного, недобросовестные монтажнные организации применяют его буквально везде.",
                                    "В итоге потребитель платит немного меньше при заказе такой продукции, но через некоторое время сталкивается с негативными последствиями.",
                                ],
                            },
                        ],
                        articleImageJSX: (
                            <>
                                <Image
                                    src={glassprom1}
                                    alt={"worker at our old plant"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        border: "1px solid grey",
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    unoptimized
                                />
                                <Typography
                                    variant="subtitle2"
                                    sx={{ textAlign: "center", mt: 0 }}
                                >
                                    Производственный цех нашего партнёра ЗСК
                                    ГЛАССПРОМ
                                </Typography>
                            </>
                        ),
                    },

                    {
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Сегодня своим клиентам мы предлагаем:",
                        articleParagraphsJSX: [
                            <>
                                <strong>
                                    Широкий выбор конструкций окон ПВХ под любые
                                    задачи:
                                </strong>{" "}
                                профильные системы VEKA, REHAU и KALEVA с
                                безупречной репутацией для квартиры, дома, дачи,
                                производственного помещения
                            </>,
                            <>
                                <strong>
                                    Гарантированное качество сборки продукции
                                </strong>
                                , подтвержденное протоколами государственных
                                испытаний и специальным гарантийным сроком
                            </>,
                            <>
                                <strong>Качественный монтаж</strong> с
                                использованием самых современных материалов,
                                соответствующих требованиям ГОСТ
                            </>,
                            <>
                                <strong>Фурнитуру премиум сегмента</strong> от
                                немецких производителей{" "}
                                <strong>Gretsch-Unitas</strong> и{" "}
                                <strong>ROTO Frank Fenster</strong>
                            </>,
                            <>
                                <strong>Фурнитуру экономичного сегмента</strong>
                                <strong>REZE</strong> - от ведущего
                                производителя Турции
                            </>,
                        ],
                        articlesAccordion: [
                            {
                                accordionTitle:
                                    "Откуда вообще берётся тонкий профиль?",
                                accordionParagraphs: [
                                    "Заводы выпускают облегчённый профиль для изготовления маленьких рам. Например, он хорошо подходит для изготовления шкафов-купе, окон раздачи в учреждениях питания и т.д.",
                                    "Однако, пользуясь тем, что потребитель не различает полновесный профиль от низкосортного, недобросовестные монтажнные организации применяют его буквально везде.",
                                    "В итоге потребитель платит немного меньше при заказе такой продукции, но через некоторое время сталкивается с негативными последствиями.",
                                ],
                            },
                        ],
                        articleImageJSX: (
                            <>
                                <Image
                                    src={profile_compare_img}
                                    alt={"Example of our work"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        border: "0px solid grey",
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    unoptimized
                                />
                                <Typography
                                    variant="subtitle2"
                                    sx={{ textAlign: "center", mt: 0 }}
                                ></Typography>
                            </>
                        ),
                    },
                ]}
            />

            <Box
                width={"100%"}
                bgcolor="#333"
                textAlign={"center"}
                padding={4}
                marginTop={12}
            >
                {[
                    <>НАШ ПРИНЦИП РАБОТЫ:</>,
                    <>
                        Мы не предлагаем &quot;дорогие&quot; или
                        &quot;дешёвые&quot; окна и двери.
                    </>,
                    <>
                        Мы предлагаем окна и двери, подходящие к вашим условиям
                        эксплуатации.
                    </>,
                ].map((item, index) => {
                    return (
                        <Typography
                            key={index}
                            sx={{
                                fontSize: { xs: "1.7rem", sm: "26px" },
                                fontWeight: 400,
                                textAlign: "center",
                                bgcolor: "#333",
                                color: "white",
                                m: 0,
                                p: 0,
                            }}
                        >
                            {item}
                        </Typography>
                    );
                })}
            </Box>

            <ArticlesContainer
                mainTitle={""}
                articles={[
                    {
                        imageSide: ImageSide.LEFT,
                        articleTitle: "Настоящая гарантия",
                        articleParagraphsJSX: [
                            <>
                                Гарантийный срок — это единственная
                                характеристика надежности производителя,
                                показатель его отношения к своему клиенту.
                            </>,
                            <>
                                Наша гарантия на окна составляет:{" "}
                                <strong>
                                    3 года на изделие и 5 лет на монтажные
                                    работы
                                </strong>
                                . В течение этого периода «Тульские Окна»
                                обязуются бесплатно устранять любые неполадки,
                                выполнять все необходимые регулировки.
                            </>,
                            <>
                                Гарантия распространяется на дефекты, связанные
                                с механизмом фурнитуры, герметичностью
                                стеклопакетов, стабильностью цвета профиля,
                                работоспособностью резинового уплотнителя,
                                целостностью откосов из сэндвич-панелей.
                            </>,
                        ],
                        articlesAccordion: [
                            {
                                accordionTitle:
                                    "Откуда вообще берётся тонкий профиль?",
                                accordionParagraphs: [
                                    "Заводы выпускают облегчённый профиль для изготовления маленьких рам. Например, он хорошо подходит для изготовления шкафов-купе, окон раздачи в учреждениях питания и т.д.",
                                    "Однако, пользуясь тем, что потребитель не различает полновесный профиль от низкосортного, недобросовестные монтажнные организации применяют его буквально везде.",
                                    "В итоге потребитель платит немного меньше при заказе такой продукции, но через некоторое время сталкивается с негативными последствиями.",
                                ],
                            },
                        ],
                        articleImageJSX: (
                            <>
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
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
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
                            </>
                        ),
                    },
                ]}
            />

            <Container maxWidth="lg">
                <Grid container columnSpacing={8} rowSpacing={10}>
                    <Grid size={{ xs: 12 }}>
                        <Divider />
                    </Grid>

                    <Grid size={{ xs: 12 }} marginY={0}>
                        <ResponsiveHeader_H1
                            text={"Краткое сравнение нашей продукции"}
                        />

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

                    <Grid size={{ xs: 12 }}>
                        <Divider />
                    </Grid>

                    <Grid size={{ xs: 12 }} sx={{ my: 0 }}>
                        <ResponsiveHeader_H1 text={"Наши преимущества"} />
                    </Grid>

                    <AdvantagesContainer
                        advantages={[
                            {
                                icon: WorkOutlineOutlinedIcon,
                                title: "профессионально",
                                description: (
                                    <>
                                        Индивидуально подберем окна, подходящие
                                        к типу вашего помещения.
                                        <br />
                                        <strong>
                                            Доверьте подбор окон специалистам!
                                        </strong>
                                    </>
                                ),
                            },
                            {
                                icon: AddCardOutlinedIcon,
                                title: "Любая форма оплаты",
                                description: (
                                    <>
                                        Все варианты оплаты - наличными, картой,
                                        переводом на счёт. В офисе или удалённо.
                                        Работаем с НДС.
                                    </>
                                ),
                            },
                            {
                                icon: OtherHousesOutlinedIcon,
                                title: "договор на дому",
                                description: (
                                    <>
                                        Заключение договора на дому{" "}
                                        <strong>в удобное время</strong>.
                                        Разгрузку и подъем оконных конструкций к
                                        месту монтажа выполняют сотрудники нашей
                                        компании.
                                    </>
                                ),
                            },
                            {
                                icon: LocalShippingOutlinedIcon,
                                title: "надёжно",
                                description: (
                                    <>
                                        <strong>
                                            Доставка спецтранспортом
                                        </strong>
                                        . Надежное крепление и упаковка
                                        предотвращают повреждения.
                                        <br />
                                        Реальная долгосрочная гарантия.
                                    </>
                                ),
                            },
                            {
                                icon: CalculateOutlinedIcon,
                                title: "честно",
                                description: (
                                    <>
                                        Максимально точный расчет цены в день
                                        обращения. Перед подписанием договора Вы
                                        будете знать точную стоимость и
                                        конфигурацию заказа
                                    </>
                                ),
                            },
                            {
                                icon: ScheduleSendOutlinedIcon,
                                title: "быстро",
                                description: (
                                    <>
                                        От замера объекта до монтажа всех
                                        конструкций в соответствии с заказом
                                        пройдет не более 30 дней
                                    </>
                                ),
                            },
                            {
                                icon: WorkspacePremiumOutlinedIcon,
                                title: "качественно",
                                description: (
                                    <>
                                        Регулярная сертификация окон по ГОСТ.
                                        Монтаж производится квалифицированными
                                        бригадами в соответствии с нормами ГОСТ.
                                    </>
                                ),
                            },
                            {
                                icon: RecyclingOutlinedIcon,
                                title: "экологично",
                                description: (
                                    <>
                                        Наши окна не содержат в своём составе
                                        свинец! Они абсолютно безопасны для
                                        здоровья.
                                    </>
                                ),
                            },
                        ]}
                    />

                    <Grid size={{ xs: 12 }}>
                        <Divider />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
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

                    <Grid size={{ xs: 12 }}>
                        <Divider />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <ResponsiveHeader_H1
                            text={"Установка пластиковых окон"}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Typography>
                            Любой, даже самый качественный оконный блок потеряет
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
                                        sx={{
                                            display: "list-item",
                                            ml: { xs: 5, md: 10 },
                                        }}
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

                    <Grid size={{ xs: 12 }}>
                        <Divider />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography
                            variant="h1"
                            sx={{ typography: { xs: "h5", md: "h1" } }}
                        >
                            Как заказать окна Kaleva, Veka и Rehau в Туле и
                            области
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h2">
                            Установка окон &quot;под ключ&quot;
                        </Typography>
                        <Typography>
                            Для того чтобы заказать оконные блоки или остекление
                            балконов в Туле от нашей организации, выполните
                            несколько простых действий:
                        </Typography>
                        <Stepper orientation="vertical">
                            {[
                                {
                                    item_label:
                                        "Обратитесь к нам по телефону, WhatsApp или электронной почте",
                                    item_content:
                                        "Опишите вашу задачу, сообщите адрес, определите удобное время приезда монтажников для проведения замеров. Вы получите консультацию по нашей продукции, срокам исполнения, примерной стоимости, а также по другим вопросам. Ожидайте приезда наших монтажников",
                                },

                                {
                                    item_label:
                                        "Уточните детали заказа с монтажниками",
                                    item_content:
                                        "Они подскажут, какой тип оконного блока вам подойдет лучше всего. Окна для летнего дома, квартиры или коттеджа, не говоря уже о техническом помещениии, будут очень разные!",
                                },
                                {
                                    item_label:
                                        "Получите точный расчёт заказа от нашего офиса",
                                    item_content:
                                        "После замера мы подготовим точный расчёт стоимости и вышлем его на проверку с помощью любого средства связи по вашему выбору.",
                                },
                                {
                                    item_label:
                                        "Внесите необходимую предоплату",
                                    item_content:
                                        "Для заказов с нашим монтажом мы принимаем предоплату в размере 70% от всей суммы заказа. Деньги можно внести любым способом - через кассовый терминал в нашем офисе или удалённо - переводом. С момента внесения предоплаты наш договор считается подписанный и начинается работа по изготовлению изделий.",
                                },
                                {
                                    item_label: "Согласуйте дату монтажа",
                                    item_content:
                                        "За несколько дней до готовности изделий, мы свяжемся с вами чтобы согласовать дату монтажа. Этот день модно передвинуть по вашему желанию. В назначенный срок ожидайте приезда бригады специалистов-монтажников.",
                                },
                            ].map(({ item_label, item_content }, index) => {
                                return (
                                    <Step key={index} active>
                                        <StepLabel>
                                            <Typography variant="h5">
                                                {item_label}
                                            </Typography>
                                        </StepLabel>
                                        <StepContent>
                                            <Typography variant="subtitle1">
                                                {item_content}
                                            </Typography>
                                        </StepContent>
                                    </Step>
                                );
                            })}
                        </Stepper>

                        <Typography>
                            Хотите сделать свою квартиру максимально комфортной,
                            привлекательной, безопасной - выберите оконные блоки
                            от нашей Компании!
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h2">
                            Самостоятельная установка
                        </Typography>
                        <Typography>
                            Купить окна в Туле для самостоятельной установки
                            возможно у нас. Необходимый порядок действий:
                        </Typography>

                        <Stepper orientation="vertical">
                            {[
                                {
                                    item_label:
                                        "Снимите самостоятельно точные размеры оконного проема",
                                    item_content:
                                        "Не забудьте учесть отклонение сторон от вертикальности-горизонтальности (с помощью строительного уровня). Помните, что монтажный зазор между оконным блоком и проемом не может быть меньше 10мм, а также не желателен более 50мм. Зазор менее 10мм не обеспечит нужную теплоизоляцию оконной рамы - оконный блок будет промерзать!",
                                },

                                {
                                    item_label:
                                        "Перешлите нам эскизы окон на расчёт",
                                    item_content:
                                        "Подготовьте эскизы оконных и дверных блоков, сфотографируйте их и перешлите фотографию нам любым способом - через форму на сайте, на WhatsApp или по электронной почте",
                                },
                                {
                                    item_label:
                                        "Получите расчёт стоимости от нашего офиса",
                                    item_content:
                                        "Согласуйте конфигурацию изделий. Уточните возможность и стоимость доставки, срок изготовления ваших изделий. Всё легко сделать дистанционно - по WhatsApp или электронной почте. Также Всегда можно приехать к нам лично.",
                                },
                                {
                                    item_label:
                                        "Внесите необходимую предоплату",
                                    item_content:
                                        "Для заказов без нашего монтажа мы берём только 100% предоплату. Форма оплаты - любая! Возмодно оплатить как в офисе через терминал, так и дистанционно - переводом.",
                                },
                                {
                                    item_label: "Примите свой заказ на объекте",
                                    item_content:
                                        "За несколько дней до доставки заказа, с вами свяжется заводская служба логистики для утверждения даты доставки. В день доставки грузчики разгрузят оконные блоки у вас на объекте.",
                                },
                            ].map(({ item_label, item_content }, index) => {
                                return (
                                    <Step key={index} active>
                                        <StepLabel>
                                            <Typography variant="h5">
                                                {item_label}
                                            </Typography>
                                        </StepLabel>
                                        <StepContent>
                                            <Typography variant="subtitle1">
                                                {item_content}
                                            </Typography>
                                        </StepContent>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        <Typography>
                            Обязательно учитывайте то, что установка окон
                            требует профессиональных навыков! Прежде чем браться
                            за самостоятельный монтаж, обязательно изучите все
                            нюансы, оцените непредвзято свои возможности.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Divider />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <Typography
                            variant="h1"
                            sx={{ typography: { xs: "h5", md: "h1" } }}
                        >
                            Сертификаты соответствия ГОСТ Р
                        </Typography>
                    </Grid>

                    {[kaleva_sert_1, veka_sert_1, rehau_sert_1].map(
                        (item, index) => {
                            return (
                                <Grid size={{ xs: 12, md: 4 }} key={index}>
                                    <Image
                                        src={item}
                                        alt={"certificate"}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        unoptimized
                                    ></Image>
                                </Grid>
                            );
                        }
                    )}

                    {/* <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} marginY={0}>
                        <Typography variant="h1">
                            Как сэкономить на остеклении
                        </Typography>
                    </Grid> */}
                    {/* <Grid item xs={12}>
                        <Divider />
                    </Grid> */}

                    {/* <Grid item xs={12}>
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
                    {/* <Grid item xs={5}>
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
                    </Grid> */}
                </Grid>
            </Container>

            {/* <FirstPageComparement /> */}
        </>
    );
}
