import { Stack, Box, Typography } from "@mui/material";
import Image from "next/image";
import { ImageSide } from "../lib/types";
import ArticlesContainer from "./Article/ArticlesContainer";

import veka_thickness from "@/public/images/veka_thickness_croped_2.jpg";
import veka_armir from "@/public/images/veka_armir.jpg";
import veka_armir_2 from "@/public/images/slides/AllVsVeka.png";

const VekaUniqueAdvatages = () => {
    return (
        <ArticlesContainer
            mainTitle={"Уникальные отличия VEKA"}
            articles={[
                {
                    imageSide: ImageSide.RIGHT,
                    articleTitle: "Толщина стенки по евро стандарту",
                    articleParagraphsJSX: [
                        <>
                            Чем толще стенки, тем прочнее получается
                            конструкция.
                        </>,
                        <>
                            Все профили VEKA относят к классу «А» — высшему
                            классу для оконных конструкций по немецкому
                            стандарту RAL. Этот стандарт превосходит наш ГОСТ
                            30673—2013 по требованиям к толщине стенок.
                        </>,
                        <>
                            У всех без исключения систем VEKA толщина лицевой
                            поверхности составляет 3 мм. Внутренние стенки также
                            значительно толще, чем у других систем.
                        </>,

                        <>
                            <strong>Выгода потребителя:</strong>
                            <br />
                            Высокая прочность сварного шва на углах. Нет трещин.
                            <br />
                            Створки не провисают, все режимы открывания,
                            откидывания и закрывания функционируют исправно.
                        </>,
                    ],
                    articlesAccordion: [
                        {
                            accordionTitle:
                                "Почему важно то, что все профили VEKA производятся по единому стандарту?",
                            accordionParagraphs: [
                                "На рынке много оконных брендов, однако, из каких именно профилей будут изготовлены окна, которые попадутся потребителю - никто сказать не может. Это уж как повезет.",
                                "Почему? Потому что на практике – более 80% всех окон в России производятся из профилей класса Б. Оптимизированных, адаптированных, урезанных и сокращенных. Под звучными немецкими названиями – но класса Б. С хлипкой наружной стенкой, низким сроком службы и высокими эксплуатационными рисками.",
                                "С окнами VEKA такая ситуация не возможна. Покупая  VEKA, потребитель точно знает, какой уровень качества получит в итоге.",
                            ],
                        },
                    ],
                    articleImageJSX: (
                        <Stack direction={"column"} rowGap={6}>
                            <Box alignSelf={"center"}>
                                <Box padding={0}>
                                    <Image
                                        src={veka_thickness}
                                        sizes={"50vw"}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        alt={"Thickness of VEKA windows"}
                                    />
                                </Box>
                                <Typography
                                    align={"center"}
                                    variant="body2"
                                    fontWeight={500}
                                >
                                    Профиль VEKA Euroline 58 в разрезе. Обратите
                                    внимание на толщину стенок.
                                </Typography>
                            </Box>
                        </Stack>
                    ),
                },

                {
                    imageSide: ImageSide.LEFT,
                    articleTitle: "Замкнутое армирование",
                    articleParagraphsJSX: [
                        <>
                            Важнейшее преимущество оконных систем VEKA-
                            замкнутое армирование в раме уже в стандартной
                            комплектации.
                        </>,
                        <>
                            Выше жесткость конструкции — профиль лучше
                            удерживает форму.
                        </>,
                        <>
                            Надежная фиксация в проеме — рама крепится насквозь
                            через квадратный металлический профиль.
                        </>,
                        <>
                            Крепить оконный блок за тонкую пластиковую стенку
                            запрещено по нормам ГОСТ. К сожалению, это самый
                            распространённый способ монтажа в РФ. Вызвано это
                            тем, что так закрепить окно в проёме легче всего.
                            Оконная рама прижимается нагелем в пластиковую
                            стенку профиля, а не в металл.
                        </>,
                        <>
                            Окна VEKA и WHS просто не получится закрепить
                            неправильно - этого не позволит сделать сама
                            конструкция окна.
                        </>,
                        <>
                            Такой подход делает конструкцию долговечной.
                            Долговечность профилей VEKA — более 60 лет.
                        </>,
                        <>
                            <strong>Выгода потребителя:</strong>
                            <br />
                            Окна VEKA и WHS by VEKA всегда закреплены по ГОСТ.
                            <br />
                            При установке окон на монтажную пластину исключён
                            люфт профиля.
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
                        <Stack direction={"column"} rowGap={6}>
                            <Box alignSelf={"center"}>
                                <Box padding={0}>
                                    <Image
                                        src={veka_armir_2}
                                        alt={"Example of our work"}
                                        width={0}
                                        height={0}
                                        sizes="50vw"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                        unoptimized
                                    />
                                </Box>
                            </Box>

                            <Box alignSelf={"center"}>
                                <Box padding={0} sx={{ textAlign: "center" }}>
                                    <Image
                                        src={veka_armir}
                                        sizes={"30vw"}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            maxWidth: "300px",
                                        }}
                                        alt={"Light in apartments"}
                                    />
                                </Box>
                                <Typography
                                    align={"center"}
                                    variant="body2"
                                    fontWeight={500}
                                >
                                    Профиль VEKA Euroline 58 в разрезе. В рамном
                                    профиле видно квадратное армирование.
                                </Typography>
                            </Box>
                        </Stack>
                    ),
                },
            ]}
        />
    );
};

export default VekaUniqueAdvatages;
