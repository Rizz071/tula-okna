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

import image_profile from "@/public/images/profiles/veka_compare_2_800px.jpg";
import image_furniture from "@/public/images/uni-jet 2.0_42.png";
import image_steklopaket from "@/public/images/slides/steklopaket_1.jpg";
import image_profile_color from "@/public/images/lamination_1_crop.png";
import image_setka from "@/public/images/polotno_ms_2.png";
import DefaultConfigurationTemplate from "./DefaultConfigurationTemplate";

const StandartWindowsConfiguration = () => {
    return (
        <DefaultConfigurationTemplate
            sectionTitle={"Окна"}
            sections={[
                {
                    image: image_profile,
                    title: "Оконный профиль ПВХ",
                    description: (
                        <>
                            <strong>
                                Системы КАЛЕВА &mdash; толщина стенки по классу
                                Б (2,7мм)
                            </strong>
                            <br />
                            <strong>
                                Системы VEKA &mdash; толщина стенки по классу A
                                (3,0мм)
                            </strong>
                            <br />
                            <br />
                            По специальному запросу поставляем также окна Rehau
                            для ценителей бренда.
                            <br />
                            <br />
                            Во всех наших окнах применяется только
                            быстрозаменяемый уплотнитель не приклееный к
                            профилю.
                        </>
                    ),
                },

                {
                    image: image_furniture,
                    title: "Оконная фурнитура",
                    description: (
                        <>
                            <strong>
                                Только немецкие марки &mdash; G-U или ROTO на
                                выбор.
                            </strong>
                            <br />
                            На сегодняшний день мы рекомендуем по ряду причин
                            именно G-U.
                            <br />
                            <br />
                            <strong>
                                Микропроветривание на поворотно-откидные створки
                                всегда включено в стоимость.
                            </strong>
                        </>
                    ),
                },
            ]}
        />
    );
};

export default StandartWindowsConfiguration;
