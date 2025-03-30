import image_steklopaket from "@/public/images/slides/steklopaket_1.jpg";
import image_profile_color from "@/public/images/lamination_1_crop.png";
import image_setka from "@/public/images/polotno_ms_2.png";
import podokonnik_1 from "@/public/images/podokonnik_1.png";
import otkosy_1 from "@/public/images/teplootkosy_1.png";
import DefaultConfigurationTemplate from "./DefaultConfigurationTemplate";

const StandartAcessoriesConfiguration = () => {
    return (
        <DefaultConfigurationTemplate
            sectionTitle={"Основные аксессуары"}
            sections={[
                {
                    media: image_setka,
                    mediaType: "IMAGE",
                    title: "Москитная сетка",
                    description: (
                        <>
                            <strong>
                                Стандартная москитная сетка всегда включена в
                                стоимость окна с открывающимися створками.
                            </strong>
                            <br />
                            <br />
                            По запросу изготавливаем сетку:
                            <br />
                            &emsp;&quot;Антикошка&quot;
                            <br />
                            &emsp;&quot;Антипыль&quot;
                            <br />
                            &emsp;&quot;Антипыльца&quot;
                            <br />
                            &emsp;&quot;CleanAir&quot;
                            <br />
                            <br />
                            <strong>
                                Ламинируем или окрашиваем рамку москитной сетки
                                в цвет окна.
                            </strong>
                        </>
                    ),
                },

                {
                    media: podokonnik_1,
                    mediaType: "IMAGE",
                    title: "Подоконники",
                    description: (
                        <>
                            В стандартном варианте расчёта применяем подоконник
                            ПДК (пр-во РФ).
                            <br />
                            <br />
                            По запросу поставляем подоконники:
                            <br />
                            &emsp;Moller (пр-во Германия/РФ)
                            <br />
                            &emsp;Кристаллит (пр-во РФ)
                            <br />
                            &emsp;Кристаллит Эстера (пр-во РФ) <br />
                            &emsp;Витраж (пр-во РФ)
                            <br />
                            &emsp;ПДК Премиум А (пр-во РФ).
                            <br />
                            <br />
                            <strong>
                                Большой выбор текстур и цветов покрытия &mdash;
                                от стандартного до устойчивого к царапинам и
                                температуре.
                            </strong>
                        </>
                    ),
                },

                {
                    media: otkosy_1,
                    mediaType: "IMAGE",
                    title: "Внутренние откосы",
                    description: (
                        <>
                            <strong>
                                Применяем только тёплую сэндвич-панель толщиной
                                9-10мм.
                            </strong>
                            <br />
                            Пропениваем пространство под панелью, чтобы откосы
                            &quot;не играл&quot;.
                            <br />
                            Никогда не применяем полые пластиковые панели,
                            потому что они просвечиваются и промерзают.
                            <br />
                            <br />
                            <strong>
                                По необходимости ламинируем откосную панель
                                оконной ламинационной плёнкой в тон окна.
                            </strong>
                        </>
                    ),
                },
            ]}
        />
    );
};

export default StandartAcessoriesConfiguration;
