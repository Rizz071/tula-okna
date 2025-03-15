import React from "react";
import slideImage from "@/public/images/slides/Artline-82-Interior-01.jpg";
import slide_1 from "@/public/images/Euroline_crop.png";
import cut_1 from "@/public/images/el_10.png";
import cut_2 from "@/public/images/el_15.png";
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
                        profileSystemName: "VEKA EUROLINE 58",
                        profileMainImage: slide_1,
                        profileSystemLogo: veka_logo_light,
                        profileSystemProperties: [
                            {
                                accent: true,
                                propertyName: "Толщина стенок",
                                propertyText: <>Класс А по RAL</>,
                                additionalDescriptionText: [
                                    <>не менее 3.0 мм</>,
                                ],
                            },
                            {
                                propertyName: "Количество камер",
                                propertyText: <>3</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName: "Стеклопакет",
                                propertyText: (
                                    <>
                                        Энерго
                                        <wbr />
                                        сберегающий
                                    </>
                                ),
                                additionalDescriptionText: [
                                    <>зимой сохраняет тепло</>,
                                    <>защищает о конденсата</>,
                                    <>
                                        СПД32 <wbr />
                                        (4И-10-4-10-4И)
                                    </>,
                                ],
                            },
                            {
                                accent: true,
                                propertyName: "Армирование в раме",
                                propertyText: <>Замкнутое</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName: "Система уплотнений",
                                propertyText: <>2 контура</>,
                                additionalDescriptionText: [
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
                                propertyText: <>13 мм</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName:
                                    "Сопротивление теплопередаче профиля с армированием",
                                propertyText: (
                                    <>
                                        0,64 м<sup>2</sup>°С/Вт
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
                                propertyName:
                                    "Сопротивление теплопередаче стеклопакета",
                                propertyText: (
                                    <>
                                        0,95 м<sup>2</sup>°С/Вт
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
                                name: "Рама арт.101213 - Створка арт.103213",
                                image: cut_1,
                            },
                            {
                                name: "Створка арт.103213 - Импост арт.102103",
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
