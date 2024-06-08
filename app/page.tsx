import HeroImageSlider from "./components/HeroImageSlider";
import ProductionCards from "./components/ProductionCards";
import { Container, Box, Typography, Grid, Divider } from "@mui/material";
import Image from "next/image";
import glassprom1 from "../public/images/glassprom1.jpg";
import besedka from "../public/images/besedka.webp";
import AllVsVeka from "../public/images/slides/AllVsVeka.png";
import FirstPageComparement from "./components/FirstPageComparement";
import worker_plant_1 from "../public/images/slides/worker_plant_1.jpg";
import veka_profil_ugol from "../public/images/slides/Softline_70_verh-niz_2.png";
import real_economy_1 from "../public/images/slides/real_economy_1.jpg";

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
                            Старейший производитель окон в Туле
                        </Typography>
                        {/* <Typography
                            // variant="sliderFont"
                            textAlign={"center"}
                            fontWeight={"light"}
                        >
                            Работаем с 1998 года
                        </Typography> */}
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
                                производстве c 1998 по 2019 г.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h2">
                            Раньше - своё производство
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
                    <Grid item xs={6}>
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
                                Производственный цех нашего партнёра сегодня
                            </Typography>
                        </Box>
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
                    от 1.5мм до 2.0мм
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
                    Устанавливаем только немецкую фурнитуру Gretsch-Unitas и
                    ROTO
                </Typography>
            </Box>

            <Container maxWidth="lg">
                <Grid container columnSpacing={8} rowSpacing={10}>
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
                        <Typography variant="h2">
                            Эксклюзивная гарантия
                        </Typography>
                        <Typography>
                            Гарантийный срок — это характеристика надежности
                            производителя, показатель его отношения к своему
                            клиенту.
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
                        <Typography variant="h1">
                            Почему мы работаем с окнами VEKA
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
