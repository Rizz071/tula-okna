import React from "react";
import slideImage from "@/public/images/slides/Artline-82-Interior-01.jpg";
import slide_1 from "@/public/images/standart_1.png";
import cut_1 from "@/public/images/klv_standart_cut_1.png";
import cut_2 from "@/public/images/klv_standart_cut_2.png";
import logo from "@/public/images/kaleva_logo_4_light.svg";

import { Container } from "@mui/material";
import HeaderSlider from "@/app/components/HeaderSlider";
import TemplateProfileSystem from "@/app/components/TemplateProfileSystem";
import KalevaUniqueAdvatages from "@/app/components/KalevaUniqueAdvatages";

export default function Page() {
    return (
        <>
            <HeaderSlider sliderImage={slideImage} isCardVisible={false} />

            <Container maxWidth={"lg"} sx={{ mt: 8 }}>
                <TemplateProfileSystem
                    profilePage={{
                        profileSystemName: "KALEVA STANDART 70",
                        profileMainImage: slide_1,
                        profileSystemLogo: logo,
                        profileSystemProperties: [
                            {
                                propertyName: "Ширина профиля",
                                propertyText: <>70 мм</>,
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
                                propertyName: "Количество камер",
                                propertyText: <>4</>,
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
                                        летом не пропускает жару (МФ)
                                    </>,
                                    <>
                                        СПД40 <wbr />
                                        (4МФ-14-4-14-4И)
                                        <br />
                                        СПД40 <wbr />
                                        (4И-14-4-14-4И)
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
                                propertyName: "Нахлест уплотнений снаружи",
                                propertyText: <>7 мм</>,
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
                                        0,74 м<sup>2</sup>°С/Вт
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
                                        1,15 м<sup>2</sup>°С/Вт
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
                                За счет увеличенной глубины профиля эти окна
                                обладают повышенной энергоэффективностью и
                                усиленной прочностью
                            </>,
                            <>
                                Подходят для остекления:
                                <br />
                                &emsp;•&emsp;квартир до 9 этажа включительно
                                <br />
                                &emsp;•&emsp;загородных домов
                                <br />
                                &emsp;•&emsp;отапливаемых балконов и лоджий
                                <br />
                                &emsp;•&emsp;офисных помещений
                            </>,
                        ],
                        profileSections: [
                            {
                                name: "Рама арт.701901 - Створка арт.703938",
                                image: cut_1,
                            },
                            {
                                name: "Створка арт.703938 - Импост арт.702903",
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
