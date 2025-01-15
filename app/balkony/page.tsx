import React from "react";
import coldImg from "@/public/images/balkoni/5_balcon_11_1.jpg";
import dachaImg from "@/public/images/dacha1_tmblr.jpeg";
import ContainerButtonImages from "../components/ContainerButtonImages";

export default function Page() {
    return (
        <ContainerButtonImages
            mainTitle={"Выберите цель остекления"}
            mainTitleDescription={
                "Для каждого объекта мы предлагаем свои варианты оконных блоков"
            }
            buttonsArray={[
                {
                    caption: "Холодное остекление балкона",
                    image: coldImg,
                    link: "/okna/apartments",
                    description: (
                        <>
                            Холодное раздвижное остекление защитит от осадков,
                            ветра, пыли, уличного шума.
                        </>
                    ),
                },

                {
                    caption: "Тёплое остекление балкона",
                    image: coldImg,
                    link: "/okna/cottage",
                    description: (
                        <>
                            Пластиковая рама позволит превратить лоджию или
                            балкон в тёплое помещение.
                        </>
                    ),
                },

                {
                    caption: "Внутренняя отделка",
                    image: dachaImg,
                    link: "/okna/apartments",
                    description: (
                        <>
                            Обшивка панелями/вагонкой, настил пола, потолок,
                            светильники, шкафы-купе, лиана.
                        </>
                    ),
                },
            ]}
        />
    );
}
