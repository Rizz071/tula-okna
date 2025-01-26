import React from "react";
import coldImg from "@/public/images/balkoni/5_balcon_11_1.jpg";
import warmImg from "@/public/images/balkoni/warm_glazing_tmblr_2.jpg";
import otdelkaImg from "@/public/images/balkoni/otdelka_tmblr_1.jpg";
import WayFinderContainer from "../components/WayFinder/WayFinderContainer";

export default function Page() {
    return (
        <WayFinderContainer
            mainTitle={"Выберите цель остекления"}
            mainTitleDescription={
                "Остекление балкона бывает быть холодным и тёплым. Внутреннее пространство можно оставить как есть или же превратить в дополнительную комнату. Туда можно установить шкафы-купе, лиану для сушки белья, а также провести свет."
            }
            buttonsArray={[
                {
                    caption: "Холодное остекление",
                    image: coldImg,
                    link: "/balkony/cold",
                    description: (
                        <>
                            Холодное раздвижное остекление защитит от осадков,
                            ветра, пыли, уличного шума.
                        </>
                    ),
                },

                {
                    caption: "Тёплое остекление",
                    image: warmImg,
                    link: "/balkony/warm",
                    description: (
                        <>
                            Пластиковая рама позволит превратить лоджию или
                            балкон в тёплое помещение.
                        </>
                    ),
                },

                {
                    caption: "Внутренняя отделка",
                    image: otdelkaImg,
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
