import image_profile from "@/public/images/dveri/VEKA/veka_doors_collage_1.png";
import image_furniture_zamok from "@/public/images/dveri/zamok_dver_1.png";
import image_furniture_hinges from "@/public/images/dveri/wala_hinges_1.png";
import DefaultConfigurationTemplate from "./DefaultConfigurationTemplate";

const StandartDoorsConfiguration = () => {
    return (
        <DefaultConfigurationTemplate
            sectionTitle={"Двери"}
            sections={[
                {
                    media: image_profile,
                    mediaType: "IMAGE",
                    title: "Дверной профиль ПВХ",
                    description: (
                        <>
                            <strong>
                                Дверная система VEKA &mdash; толщина стенки по
                                классу A (3,0мм)
                            </strong>
                            <br />
                            <br />
                            Для входных дверей мы используем только специальный
                            дверной профиль. Мы принципиально не собираем двери
                            на оконном профиле из-за их недолговечности
                            (исключение - небольшие межкомнатные двери).
                            <br />
                            <br />
                            Во всех наших дверях применяется только
                            быстрозаменяемый уплотнитель (не приклееный к
                            профилю).
                        </>
                    ),
                },

                {
                    media: image_furniture_zamok,
                    mediaType: "IMAGE",
                    title: "Дверные замки",
                    description: (
                        <>
                            <strong>
                                <strong>
                                    Многозапорные замки G-U (Германия).
                                </strong>
                                <br />
                                Полная фурнитурная обвязка дверной створки
                                (прижимы со всех сторон).
                            </strong>
                            <br />
                            <br />
                            Все дверные створки с простыми однозапорными замками
                            имеют прижим только в районе замка, поэтому
                            продуваюся по углам. Из-за этого мы никогда не
                            используем однозапорные замки в наших входных
                            дверях.
                        </>
                    ),
                },

                {
                    media: image_furniture_hinges,
                    mediaType: "IMAGE",
                    title: "Дверные петли",
                    description: (
                        <>
                            <strong>
                                Дверные петли &quot;WALA&quot; (Польша).
                            </strong>
                            <br />
                            Эти петли имеют отличный запас прочности &mdash;
                            допустимый вес створки до 160кг. Возможна
                            регулировка в трёх направлениях.
                            <br />
                            <br />
                            Устанавливаем всегда не меньше 3-х петель на
                            створку.
                            <br />С доводчиком &mdash; обязательно 4 петли.
                        </>
                    ),
                },
            ]}
        />
    );
};

export default StandartDoorsConfiguration;
