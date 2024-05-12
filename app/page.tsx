import HeroImageSlider from "./components/HeroImageSlider";
import ProductionCards from "./components/ProductionCards";
import { Container, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import glassprom1 from "../public/images/glassprom1.jpg";
import besedka from "../public/images/besedka.webp";
import FirstPageComparement from "./components/FirstPageComparement";

import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";

export default function Home() {
    return (
        <>
            <HeroImageSlider />
            <ProductionCards />
            <Container maxWidth="lg">
                <Grid
                    container
                    marginTop={6}
                    spacing={6}
                    direction="row"
                    alignItems={"flex-start"}
                    justifyContent={"space-between"}
                >
                    <Grid item xs>
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
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            «Тульские Окна» - один из старейших производителей
                            алюминиевых и пластиковых окон в Туле, работающий на
                            оконном рынке с 1998 года.
                        </Typography>
                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            Мы - производственно-монтажное предприятие с
                            огромным опытом работы, и это наше главное
                            конкурентное преимущество. Часть продукции мы
                            изготавливаем сами, в собственных производственных
                            цехах, полностью контролируя качество сборки и
                            комплектующих, а часть - закупаем по оптовым ценам
                            на одном из крупнейших заводов России. Почему именно
                            этот завод? Объясняем ниже.
                        </Typography>
                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            Собственные средства производства, надежные
                            поставщики, профессиональные, увлеченные своим делом
                            сотрудники, а также партнерские отношения с
                            клиентами – основа нашего успеха.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={"auto"}>
                        <Box
                            display={"flex"}
                            flexDirection="column"
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Image
                                src={glassprom1}
                                alt={"Window plant"}
                                style={{
                                    border: "1px solid black",
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                            <Typography variant="subtitle2">
                                Производственный цех нашего основного поставщика
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Box width={"100%"} bgcolor="#f7f7f7" paddingY={2} marginY={4}>
                <Typography
                    variant="sliderFont"
                    fontSize={{ xs: "1.7rem", sm: "30px" }}
                    fontWeight={"light"}
                    textAlign={"center"}
                    bgcolor={"#f7f7f7"}
                    gutterBottom
                >
                    Мы используем только полновесное стальное армирование
                    профиля - от 1.5мм до 2.0мм
                </Typography>
                <Typography
                    variant="sliderFont"
                    fontSize={{ xs: "1.7rem", sm: "30px" }}
                    fontWeight={"light"}
                    textAlign={"center"}
                    bgcolor={"#f7f7f7"}
                    gutterBottom
                >
                    Для габаритных конструкций применяем современную технологию
                    вклейки стеклопакета в створку
                </Typography>
                <Typography
                    variant="sliderFont"
                    fontSize={"large"}
                    textAlign={"center"}
                    fontWeight={"light"}
                    bgcolor={"#f7f7f7"}
                >
                    Створки не провисают. Рамы не деформируются на жаре. Петли
                    держатся надежно.
                </Typography>
            </Box>

            <Container maxWidth="lg">
                <Grid container alignItems={"center"} columnGap={6}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        bgcolor={"#f0f0f0"}
                        border={"1px solid"}
                        padding={2}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            display="flex"
                            flexDirection={"column"}
                            alignItems="center"
                            justifyContent="center"
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
                    <Grid item xs>
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
                            marginY={2}
                            textAlign={"justify"}
                        >
                            Гарантийный срок — это характеристика надежности
                            производителя, показатель его отношения к своему
                            клиенту.
                        </Typography>
                        <Typography
                            fontSize="17px"
                            fontWeight={"light"}
                            marginY={2}
                            textAlign={"justify"}
                        >
                            Наша гарантия на окна составляет от 3 до 6 лет. В
                            течение этого периода «Тульские Окна» обязуются
                            бесплатно устранять любые неполадки, выполнять все
                            необходимые регулировки.
                        </Typography>
                        <Typography
                            fontSize="17px"
                            fontWeight={"light"}
                            marginY={2}
                            textAlign={"justify"}
                        >
                            Гарантия распространяется на дефекты, связанные с
                            механизмом фурнитуры, герметичностью стеклопакетов,
                            стабильностью цвета профиля, работоспособностью
                            резинового уплотнителя, целостностью откосов из
                            сэндвич-панелей.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            <FirstPageComparement />
        </>
    );
}
