import HeroImageSlider from "./components/HeroImageSlider";
import ProductionCards from "./components/ProductionCards";
import { Container, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import glassprom1 from "../public/images/glassprom1.jpg";
import besedka from "../public/images/besedka.webp";
import AllVsVeka from "../public/images/slides/AllVsVeka.png";
import FirstPageComparement from "./components/FirstPageComparement";
import worker_plant_1 from "../public/images/slides/worker_plant_1.jpg";

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
                    marginTop={0}
                    columnSpacing={6}
                    rowSpacing={12}
                    // rowGap={20}
                    direction="row"
                    alignItems={"flex-start"}
                    justifyContent={"space-between"}
                >
                    <Grid item xs={12} marginY={0}>
                        <Typography
                            variant="h3"
                            textAlign={"center"}
                            fontWeight={"light"}
                        >
                            Старейший производитель окон в Туле
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
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
                                    width: "550px",
                                    height: "auto",
                                }}
                                unoptimized
                            />
                            <Typography variant="subtitle2">
                                Мы собирали окна и двери на собственном
                                производстве много лет
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography
                            variant="h1"
                            sx={{ fontSize: "2rem" }}
                            fontWeight={"light"}
                            gutterBottom
                        >
                            Раньше - своё производство
                        </Typography>

                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            Мы начинали как производители. Первый
                            производственный цех был открыт нами в 1998 году.
                        </Typography>
                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            Сначала мы изготавливали деревянные окна, затем
                            евроокна из сосны, потом алюминиевые раздвижки, а
                            после этого открыли производство окон и дверей ПВХ.
                            Позже у нас в ассортименте появился фасадный
                            алюминий с окнами и входными группами.
                        </Typography>
                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            В своих цехах мы наладили полный техпроцесс
                            производства, за исключением стеклопакетов.
                        </Typography>
                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            Высокого качества продукции мы добились тем, что не
                            экономили на комлектующих.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography
                            variant="h1"
                            sx={{ fontSize: "2rem" }}
                            fontWeight={"light"}
                            gutterBottom
                        >
                            Сейчас - автоматизированное производство в Москве
                        </Typography>
                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            С 2019 года мы начали работать с заводами ЗАО
                            &quot;ГЛАССПРОМ&quot; и АО &quot;СОФОС&quot; на
                            партнёрских условиях. Своё производство стало не
                            актуально.
                        </Typography>
                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            Сейчас мы как и раньше проектируем окна и двери
                            сами, а затем отправляем заказ напрямую на
                            производство нашего партнёра.
                        </Typography>
                        {/* <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            Крупный завод обладает автоматизированным
                            производством и широким ассортиментом продукции.
                        </Typography> */}
                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            Там наш проект дополнительно проверяется
                            технологами, а готовая продукция на выходе
                            проверяется отделом технического контроля.
                        </Typography>

                        <Typography
                            fontSize={"17px"}
                            textAlign={"justify"}
                            fontWeight={"light"}
                            marginBottom={2}
                        >
                            Благодаря бесценному опыту собственного
                            производства, мы общаемся с заводскими специалистами
                            "на равных", можем настоять на своих технических
                            решениям и предложить качествуенную продукцию
                            клиентам.
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
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
                                    border: "1px solid black",
                                    width: "550px",
                                    height: "auto",
                                }}
                                unoptimized
                            />
                            <Typography variant="subtitle2">
                                Производственный цех нашего партнёра
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Box width={"100%"} bgcolor="#f7f7f7" paddingY={2} marginY={10}>
                <Typography
                    variant="sliderFont"
                    fontSize={{ xs: "1.7rem", sm: "30px" }}
                    fontWeight={"light"}
                    textAlign={"center"}
                    bgcolor={"#f7f7f7"}
                    gutterBottom
                >
                    Используем только полновесное стальное армирование профиля -
                    от 1.5мм до 2.0мм
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
                    fontSize={{ xs: "1.7rem", sm: "30px" }}
                    fontWeight={"light"}
                    textAlign={"center"}
                    bgcolor={"#f7f7f7"}
                    gutterBottom
                >
                    Устанавливаем только немецкую фурнитуру Gretsch-Unitas и
                    ROTO
                </Typography>
            </Box>

            <Container maxWidth="lg">
                <Grid
                    container
                    alignItems={"center"}
                    columnSpacing={8}
                    rowSpacing={6}
                >
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
                            Наша гарантия на окна составляет:{" "}
                            <strong>
                                3 года на иделие и 5 лет на монтажные работы
                            </strong>
                            . В течение этого периода «Тульские Окна» обязуются
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
                    <Grid item xs={12} marginY={8}>
                        <Typography
                            variant="h3"
                            textAlign={"center"}
                            fontWeight={"light"}
                        >
                            Почему мы работаем с окнами VEKA
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h1"
                            sx={{ fontSize: "2rem" }}
                            fontWeight={"light"}
                            gutterBottom
                        >
                            Надёжное закрепление в проёме
                        </Typography>
                        <Typography
                            fontSize="17px"
                            fontWeight={"light"}
                            marginY={2}
                            textAlign={"justify"}
                        >
                            Важнейшее преимущество оконных систем VEKA и WHS -
                            замкнутое армирование в раме.
                        </Typography>
                        <Typography
                            fontSize="17px"
                            fontWeight={"light"}
                            marginY={2}
                            textAlign={"justify"}
                        >
                            К сожалению, крепление оконного блока за тонкую
                            пластиковую стенку - самый распространённый способ
                            монтажа в РФ. Вызвано это тем, что так закрепить
                            окно легче всего.
                        </Typography>
                        <Typography
                            fontSize="17px"
                            fontWeight={"light"}
                            marginY={2}
                            textAlign={"justify"}
                        >
                            <strong>
                                Окна VEKA просто не получится закрепить
                                неправильно
                            </strong>{" "}
                            - этого не позволит сделать сама конструкция окна.
                        </Typography>
                        <Typography
                            fontSize="17px"
                            fontWeight={"light"}
                            marginY={2}
                            textAlign={"justify"}
                        >
                            Вы всегда можете быть уверены, что окна VEKA и WHS
                            установлены надёжно.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        padding={2}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            display="flex"
                            flexDirection={"column"}
                            alignItems="center"
                            justifyContent="center"
                            // bgcolor={"#f0f0f0"}
                            border={"1px solid"}
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
                </Grid>
            </Container>

            <FirstPageComparement />
        </>
    );
}
