import Navbar from "./components/Navbar";
import HeroImageSlider from "./components/HeroImageSlider";
import ProductionCards from "./components/ProductionCards";
import {
    Container,
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import Image from "next/image";
import CertificateTN from "../public/images/certificates/tn/CertificateTN.webp";
import besedka from "../public/images/besedka.webp";

export default function Home() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <HeroImageSlider />
                <ProductionCards />
                <Container maxWidth="lg">
                    <Box display={"flex"} marginTop={6} columnGap={10}>
                        <Box>
                            <Typography
                                variant="h1"
                                sx={{ fontSize: "2rem" }}
                                fontWeight={"light"}
                                gutterBottom
                            >
                                Пластиковые окна в Туле
                            </Typography>

                            <Typography
                                fontSize={"17px"}
                                lineHeight={"21px"}
                                textAlign={"justify"}
                                fontWeight={"light"}
                                marginBottom={2}
                            >
                                «Тульские Окна» - один из старейших
                                производителей алюминиевых и пластиковых окон в
                                Туле, работающий на оконном рынке с 1998 года.
                            </Typography>
                            <Typography
                                fontSize={"17px"}
                                lineHeight={"21px"}
                                textAlign={"justify"}
                                fontWeight={"light"}
                                marginBottom={2}
                            >
                                Мы - производственное предприятие, и это наше
                                главное конкурентное преимущество. Часть
                                продукции мы изготавливаем сами, в собственных
                                производственных цехах, полностью контролируя
                                качество сборки и комплектующих, а часть -
                                закупаем по оптовым ценам на крупнейших заводах
                                России.
                            </Typography>
                            <Typography
                                fontSize={"17px"}
                                lineHeight={"21px"}
                                textAlign={"justify"}
                                fontWeight={"light"}
                                marginBottom={2}
                            >
                                Собственные средства производства,
                                профессиональные, увлеченные своим делом
                                сотрудники, а также близкие партнерские
                                отношения с клиентами – основа нашего успеха.
                            </Typography>

                            <Typography
                                fontSize={"17px"}
                                lineHeight={"21px"}
                                textAlign={"justify"}
                                fontWeight={"light"}
                            >
                                Своим клиентам мы предлагаем:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                lineHeight={"22px"}
                                                fontWeight={"light"}
                                            >
                                                <b>
                                                    широкий выбор конструкций
                                                    окон ПВХ под любые задачи:
                                                </b>{" "}
                                                профильные системы РЕХАУ и
                                                ВИНТЕК с безупречной репутацией
                                                для квартиры, дома, дачи,
                                                производственного помещения
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                lineHeight={"22px"}
                                                fontWeight={"light"}
                                            >
                                                <b>
                                                    гарантированное качество
                                                    сборки
                                                </b>{" "}
                                                продукции, подтвержденное
                                                протоколами государственных
                                                испытаний и специальным
                                                гарантийным сроком
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                lineHeight={"22px"}
                                                fontWeight={"light"}
                                            >
                                                <b>минимальные сроки</b>{" "}
                                                изготовления и монтажа, который
                                                выполняется специалистами с
                                                более чем 10-летним опытом
                                                работы
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                lineHeight={"22px"}
                                                fontWeight={"light"}
                                            >
                                                <b>качественный монтаж</b> c
                                                использованием самых современных
                                                материалов, соответствующих ГОСТ
                                                Р
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                lineHeight={"22px"}
                                                fontWeight={"light"}
                                            >
                                                <b>фурнитуру</b> от немецкого
                                                производителя{" "}
                                                <b>ROTO Frank Fenster</b> -
                                                новейшую линейку <b>ROTO NX</b>
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                lineHeight={"22px"}
                                                fontWeight={"light"}
                                            >
                                                <Box
                                                    component="span"
                                                    fontWeight="800"
                                                >
                                                    фурнитуру экономичного
                                                    ценового сегмента REZE
                                                </Box>{" "}
                                                - от ведущего производителя
                                                Турции
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Image
                                src={CertificateTN}
                                alt={"Certificate of production quality"}
                                style={{ border: "1px solid black" }}
                            />
                            <Typography variant="subtitle2">
                                Протокол испытания окон (увеличить)
                            </Typography>
                        </Box>
                    </Box>
                </Container>

                <Box width={"100%"}>
                    <Typography
                        variant="sliderFont"
                        fontSize={"30px"}
                        fontWeight={"light"}
                        textAlign={"center"}
                        marginTop={"10px"}
                        marginBottom={"0"}
                        paddingTop={"20px"}
                        lineHeight={"40px"}
                        bgcolor={"#f7f7f7"}
                    >
                        Мы используем только полновесное стальное армирование
                        профиля - от 1.5мм до 2.0мм
                        <br />
                        Для габаритных конструкций применяем современную
                        технологию вклейки стеклопакета в створку
                    </Typography>
                    <Typography
                        variant="sliderFont"
                        fontSize={"22px"}
                        marginTop={"0"}
                        marginBottom={"30px"}
                        paddingBottom={"20px"}
                        textAlign={"center"}
                        lineHeight={"30px"}
                        fontWeight={"light"}
                        bgcolor={"#f7f7f7"}
                    >
                        Створки не провисают. Рамы не деформируются на жаре.
                        Петли держатся надежно.
                    </Typography>

                    <Container maxWidth="lg">
                        <Box
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"center"}
                            columnGap={6}
                        >
                            <Box
                                bgcolor={"#f0f0f0"}
                                border={"1px solid"}
                                padding={1}
                            >
                                <Image
                                    src={besedka}
                                    alt={"Example of our work"}
                                />

                                <Typography
                                    variant="subtitle2"
                                    fontWeight={"light"}
                                >
                                    <strong>Остекление беседки</strong>
                                    <br />
                                    Образец нашей работы
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h1"
                                    sx={{ fontSize: "2rem" }}
                                    fontWeight={"light"}
                                    gutterBottom
                                >
                                    Эксклюзивная гарантия
                                </Typography>
                                <Typography
                                    fontSize="17px"
                                    fontWeight={"light"}
                                    lineHeight={"21px"}
                                    marginY={2}
                                >
                                    Гарантийный срок — это характеристика
                                    надежности производителя, показатель его
                                    отношения к своему клиенту.
                                </Typography>
                                <Typography
                                    fontSize="17px"
                                    fontWeight={"light"}
                                    lineHeight={"21px"}
                                    marginY={2}
                                >
                                    Наша гарантия на окна составляет от 3 до 6
                                    лет. В течение этого периода «Тульские Окна»
                                    обязуются бесплатно устранять любые
                                    неполадки, выполнять все необходимые
                                    регулировки.
                                </Typography>
                                <Typography
                                    fontSize="17px"
                                    fontWeight={"light"}
                                    lineHeight={"21px"}
                                    marginY={2}
                                >
                                    Гарантия распространяется на дефекты,
                                    связанные с механизмом фурнитуры,
                                    герметичностью стеклопакетов, стабильностью
                                    цвета профиля, работоспособностью резинового
                                    уплотнителя, целостностью откосов из
                                    сэндвич-панелей.
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </main>
        </>
    );
}
