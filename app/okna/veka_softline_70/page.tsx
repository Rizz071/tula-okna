import React from "react";
import slideImage from "@/public/images/slides/Artline-82-Interior-01.jpg";
import slide_1 from "@/public/images/Sofltine_crop.png";
import cut_1 from "@/public/images/sl_13.png";
import cut_2 from "@/public/images/sl_18.png";
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
                        profileSystemName: "VEKA SOFTLINE 70",
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
                                propertyName: "Ширина профиля",
                                propertyText: <>70 мм</>,
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
                                propertyName: "Количество камер",
                                propertyText: <>5</>,
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
                                propertyName: "Глубина посадки стеклопакета",
                                propertyText: <>16 мм</>,
                                additionalDescriptionText: [],
                            },
                            {
                                propertyName:
                                    "Сопротивление теплопередаче профиля с армированием",
                                propertyText: (
                                    <>
                                        0,79 м<sup>2</sup>°С/Вт
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
                                propertyName: "Сравнительная стоимость",
                                propertyText: <>Средняя</>,
                                additionalDescriptionText: [],
                            },
                        ],
                        recommendedUse: [
                            <>Загородные дома для круглогодичного проживания</>,
                            <>
                                Городские квартиры: на оживлённой улице, с
                                недостаточным отоплением, на высоких этажах
                            </>,
                            <>Крупногабаритные окна и двери</>,
                        ],
                        profileSections: [
                            {
                                name: "Рама арт.101208 - Створка арт.103232",
                                image: cut_1,
                            },
                            {
                                name: "Створка Z-образная арт.103232 - Импост арт.102214",
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
