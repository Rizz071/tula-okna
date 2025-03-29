import image_steklopaket from "@/public/images/steklopaket_2.png";
import image_profile_color from "@/public/images/lamination_1_crop.png";
import DefaultConfigurationTemplate from "./DefaultConfigurationTemplate";

const StandartCommonConfiguration = () => {
    return (
        <DefaultConfigurationTemplate
            sectionTitle={"Общие комплектующие"}
            sections={[
                {
                    media: image_steklopaket,
                    mediaType: "IMAGE",
                    title: "Стеклопакет в окна и двери",
                    description: (
                        <>
                            <strong>Для отапливаемых помещений:</strong>
                            <br />
                            всегда только 3 стекла с двумя энергосберегающими
                            покрытиями (типа &quot;И-стекло&quot;, либо
                            &quot;Мульти&quot; + &quot;И-стекло&quot;),
                            <br />
                            <br />
                            <strong>
                                Для неотапливаемых холодных помещений:
                            </strong>
                            <br />2 стекла с одним энергосберегающим покрытием
                            (типа &quot;И-стекло&quot;).
                            <br />
                            <br />
                            Крупногабаритные и нестандартные стеклопакеты мы
                            заказываем только на специализированном производстве
                            ФОТОТЕХ (г.Клин).
                            <br />
                            <br />
                            <strong>
                                Вклейка стеклопакета &mdash; это очень важно!
                            </strong>
                            <br />
                            Она применяется нами для значительного повышения
                            прочности крупногабаритных и цветных створок.
                            <br />
                            <br />
                            <strong>
                                Мы вклеиваем стеклопакет в створку в
                                обязательном порядке:
                            </strong>
                            <br />
                            &emsp;в особо больших оконных створках &mdash; при
                            ширине более 900мм
                            <br />
                            &emsp;в дверных створках белого цвета &mdash; при
                            ширине от 900мм
                            <br />
                            &emsp;в цветных дверных створках &mdash; при ширине
                            уже от 800мм
                        </>
                    ),
                },

                {
                    media: image_profile_color,
                    mediaType: "IMAGE",
                    title: "Декорирование профиля ПВХ",
                    description: (
                        <>
                            <strong>
                                Ламинационная плёнка LX Hausys (бывший LG
                                Hausys, Корея).
                            </strong>
                            <br />
                            Ламинационная плёнка очень устойчива к повреждениям.
                            Она наклеивается на профиль в заводских условиях и
                            не уменьшает максимальный срок службы профиля ПВХ.
                            <br />В настоящее время доступно около 80 различных
                            текстур.
                            <br />
                            <br />
                            <strong>
                                Окраска в любой простой цвет по таблице RAL.
                            </strong>
                            <br />В настоящий момент применяем российскую краску
                            ENAMERU. Окраска возможна как с уличной стороны, так
                            и с обеих сторон окна. С помощью окраски легко
                            подобрать точный цвет оконного профиля, но краска по
                            нашему опыту менее стойкая, чем ламинационная
                            плёнка.
                        </>
                    ),
                },
            ]}
        />
    );
};

export default StandartCommonConfiguration;
