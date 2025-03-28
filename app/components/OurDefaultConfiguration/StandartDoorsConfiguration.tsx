import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Box,
} from "@mui/material";
import Image from "next/image";

import image_profile from "@/public/images/dveri/VEKA/veka_doors_collage_1.png";
import image_furniture_zamok from "@/public/images/dveri/zamok_dver_1.png";
import image_furniture_hinges from "@/public/images/dveri/wala_hinges_1.png";
import image_steklopaket from "@/public/images/slides/steklopaket_1.jpg";
import image_profile_color from "@/public/images/lamination_1_crop.png";
import image_setka from "@/public/images/polotno_ms_2.png";
import DefaultConfigurationTemplate from "./DefaultConfigurationTemplate";

const StandartDoorsConfiguration = () => {
    return (
        <DefaultConfigurationTemplate
            sectionTitle={"Двери"}
            sections={[
                {
                    image: image_profile,
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
                            быстрозаменяемый уплотнитель не приклееный к
                            профилю.
                        </>
                    ),
                },

                {
                    image: image_furniture_zamok,
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
                    image: image_furniture_hinges,
                    title: "Дверные петли",
                    description: (
                        <>
                            <strong>
                                Дверные петли &quot;WALA&quot; (Польша).
                            </strong>
                            <br />
                            <br />
                            Отличный запас прочности &mdash; допустимый вес
                            створки до 160кг, регулировка в трёх направлениях.
                            <br />
                            <br />
                            Устанавливаем всегда не меньше 3-х петель на
                            створку. С доводчиком &mdash; 4 петли.
                        </>
                    ),
                },
            ]}
        />
    );
};

export default StandartDoorsConfiguration;
