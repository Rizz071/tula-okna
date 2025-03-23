import React from "react";
import slideImage from "@/public/images/slides/Artline-82-Interior-01.jpg";
import slide_1 from "@/public/images/profi_10_1.png";
import cut_1 from "@/public/images/klv_profi_cut_1.png";
import cut_2 from "@/public/images/klv_profi_cut_2.png";
import logo from "@/public/images/kaleva_logo_4_light.svg";

import { Container } from "@mui/material";
import HeaderSlider from "@/app/components/HeaderSlider";
import TemplateProfileSystem from "@/app/components/TemplateProfileSystem";
import KalevaUniqueAdvatages from "@/app/components/KalevaUniqueAdvatages";
import Pricer from "@/app/components/PriceComponents/Pricer";

export default function Page() {
    return (
        <>
            <HeaderSlider sliderImage={slideImage} isCardVisible={false} />

            <Container maxWidth={"lg"} sx={{ mt: 8 }}>
                <TemplateProfileSystem
                    profilePage={{
                        profileSystemName: "КАЛЕВА 60",
                        profileMainImage: slide_1,
                        profileSystemLogo: logo,
                        profileSystemProperties: [
                            {
                                propertyName: "Ширина профиля",
                                propertyText: <>60 мм</>,
                                additionalDescriptionText: [<></>],
                            },
                            {
                                propertyName: "Толщина стенок",
                                propertyText: <>Класс Б по ГОСТ</>,
                                additionalDescriptionText: [
                                    <>не менее 2.7 мм</>,
                                ],
                            },
                            {
                                accent: true,
                                propertyName: "Количество камер",
                                propertyText: <>4</>,
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
                                    <>
                                        зимой сохраняет тепло,
                                        <br />
                                        защищает от конденсата,
                                        <br />
                                    </>,
                                    <>
                                        СПД32 <wbr />
                                        (4И-10-4-10-4И)
                                    </>,
                                ],
                            },
                            {
                                propertyName: "Армирование в раме",
                                propertyText: <>П-образное</>,
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
                                accent: true,
                                propertyName: "Нахлест уплотнений снаружи",
                                propertyText: <>8 мм</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName: "Нахлест уплотнений изнутри",
                                propertyText: <>8 мм</>,
                                additionalDescriptionText: [],
                            },
                            {
                                accent: true,
                                propertyName: "Глубина посадки стеклопакета",
                                propertyText: <>15 мм</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName:
                                    "Сопротивление теплопередаче профиля с армированием",
                                propertyText: (
                                    <>
                                        0,7 м<sup>2</sup>°С/Вт
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
                                        <br />
                                        <>ROTO (Германия)</>
                                    </>
                                ),
                                additionalDescriptionText: [],
                            },
                            {
                                accent: true,
                                propertyName: "Сравнительная стоимость",
                                propertyText: <>Низкая</>,
                                additionalDescriptionText: [],
                            },
                        ],
                        recommendedUse: [
                            <>
                                Самое доступное решение c современными
                                параметрами эксплуатации
                            </>,
                            <>
                                Подходит для остекления:
                                <br />
                                &emsp;•&emsp;квартир до 5 этажа включительно
                                <br />
                                &emsp;•&emsp;летних дач
                                <br />
                                &emsp;•&emsp;балконов и лоджий без отопления
                                <br />
                                &emsp;•&emsp;офисных и производственных
                                помещений
                            </>,
                        ],
                        profileSections: [
                            {
                                name: "Рама арт.701961 - Створка арт.703962",
                                image: cut_1,
                            },
                            {
                                name: "Створка арт.703962 - Импост арт.702963",
                                image: cut_2,
                            },
                        ],
                    }}
                />

                <KalevaUniqueAdvatages />
            </Container>
        </>
    );
}
