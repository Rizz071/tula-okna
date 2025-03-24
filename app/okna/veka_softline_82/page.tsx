import React from "react";
import slideImage from "@/public/images/slides/Artline-82-Interior-01.jpg";
import slide_1 from "@/public/images/Softline 82_crop.png";
import cut_1 from "@/public/images/sl82_12.png";
import cut_2 from "@/public/images/sl82_17.png";
import veka_logo_light from "@/public/images/veka_logo_light.svg";

import { Container } from "@mui/material";
import HeaderSlider from "@/app/components/HeaderSlider";
import VekaUniqueAdvatages from "@/app/components/VekaUniqueAdvatages";
import TemplateProfileSystem from "@/app/components/TemplateProfileSystem";

export default function Page() {
    return (
        <>
            <HeaderSlider sliderImage={slideImage} isCardVisible={false} />

            <Container maxWidth={"lg"} sx={{ mt: 8 }}>
                <TemplateProfileSystem
                    profilePage={{
                        profileSystemName: "VEKA SOFTLINE 82",
                        profileMainImage: slide_1,
                        profileSystemLogo: veka_logo_light,
                        promoVideo: {
                            promoVideoSrc:
                                "/video/VEKA_gamme70_RU__VF_720p.mp4",
                            promoVideoPictureSrc:
                                "/video/VEKA_gamme70_RU__VF_720p.jpg",
                        },
                        profileSystemProperties: [
                            {
                                accent: true,
                                propertyName: "Ширина профиля",
                                propertyText: <>82 мм</>,
                                additionalDescriptionText: [<></>],
                            },
                            {
                                accent: true,
                                propertyName: "Толщина стенок",
                                propertyText: <>Класс А по RAL</>,
                                additionalDescriptionText: [
                                    <>не менее 3.0 мм</>,
                                ],
                            },
                            {
                                accent: true,
                                propertyName: "Количество камер",
                                propertyText: (
                                    <>
                                        Рама - 7<br />
                                        Створка/Импост - 6
                                    </>
                                ),
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName: "Стеклопакет",
                                propertyText: (
                                    <>
                                        Мульти
                                        <wbr />
                                        функциональный или энерго
                                        <wbr />
                                        сберегающий
                                    </>
                                ),
                                additionalDescriptionText: [
                                    <>
                                        зимой сохраняет тепло,
                                        <br />
                                        защищает от конденсата,
                                        <br />
                                        <br />
                                        летом не пропускает жару
                                    </>,
                                    <>
                                        СПД52 <wbr />
                                        (4МФ-20Ар-4-20Ар-4И)
                                    </>,
                                ],
                            },
                            {
                                accent: true,
                                propertyName: "Армирование в раме",
                                propertyText: <>Замкнутое</>,
                                additionalDescriptionText: [
                                    <>
                                        повышенная жесткость рамы,
                                        <br />
                                        надёжное крепление в проёме
                                    </>,
                                ],
                            },
                            {
                                accent: true,
                                propertyName: "Система уплотнений",
                                propertyText: <>3 контура</>,
                                additionalDescriptionText: [
                                    <>
                                        Даже при очень сильном ветре не
                                        продуваются верхние петли
                                    </>,
                                    <>
                                        Уплотнение вставлено в паз, допускает
                                        быструю замену
                                    </>,
                                ],
                            },
                            {
                                propertyName: "Нахлест уплотнений снаружи",
                                propertyText: <>6 мм</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName: "Нахлест уплотнений изнутри",
                                propertyText: <>8 мм</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName: "Глубина посадки стеклопакета",
                                propertyText: <>15 мм</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName:
                                    "Сопротивление теплопередаче профиля с армированием",
                                propertyText: (
                                    <>
                                        1,08 м<sup>2</sup>°С/Вт
                                    </>
                                ),
                                additionalDescriptionText: [
                                    <>ПВХ-профиль + армирование + уплотнение</>,
                                    <>
                                        Должно быть не менее 0,63 по СНиП
                                        23-02-2003
                                    </>,
                                ],
                            },
                            {
                                accent: true,
                                propertyName:
                                    "Сопротивление теплопередаче стеклопакета",
                                propertyText: (
                                    <>
                                        1,44 м<sup>2</sup>°С/Вт
                                    </>
                                ),
                                additionalDescriptionText: [
                                    <>
                                        Должно быть не менее 0,63 по СНиП
                                        23-02-2003
                                    </>,
                                ],
                            },
                            {
                                propertyName: "Степень глянца",
                                propertyText: <>Средняя</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName: "Фурнитура",
                                propertyText: (
                                    <>
                                        <>Gretsch-Unitas (Германия)</>
                                        <br />
                                        <>ROTO (Германия)</>
                                    </>
                                ),
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName: "Сравнительная стоимость",
                                propertyText: <>Высокая</>,
                                additionalDescriptionText: [],
                            },
                        ],
                        recommendedUse: [
                            <>
                                Пассивные дома со сверхмалым энергопотреблением
                            </>,
                            <>Городские квартиры выше 17 этажа</>,
                            <>Городские квартиры на очень шумной улице</>,
                            <>Крупногабаритные окна и двери</>,
                        ],
                        profileSections: [
                            {
                                name: "Рама арт.101290 - Створка арт.103341",
                                image: cut_1,
                            },
                            {
                                name: "Створка арт.103341 - Импост арт.102320",
                                image: cut_2,
                            },
                        ],
                    }}
                />

                <VekaUniqueAdvatages />
            </Container>
        </>
    );
}
