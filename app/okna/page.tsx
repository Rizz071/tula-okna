import React from "react";
import apartmentsImg from "@/public/images/apartmements2_tmblr.jpeg";
import cottageImg from "@/public/images/dom3_tmblr.jpg";
import dachaImg from "@/public/images/dacha1_tmblr.jpeg";
import WayFinderContainer from "../components/WayFinder/WayFinderContainer";

export default function Page() {
    return (
        <WayFinderContainer
            mainTitle={"Выберите цель остекления"}
            mainTitleDescription={
                "Для каждого объекта мы предлагаем свои варианты оконных блоков"
            }
            buttonsArray={[
                {
                    caption: "Окна в квартиру",
                    image: apartmentsImg,
                    link: "/okna/apartments",
                    description: (
                        <>
                            Защищают от продувания на высоких этажах.
                            <br />
                            Глушат шум улицы.
                            <br />
                            Впускают много света.
                        </>
                    ),
                },

                {
                    caption: "Окна в коттедж",
                    image: cottageImg,
                    link: "/okna/cottage",
                    description: (
                        <>
                            Экономят деньги на отоплении зимой и сохраняют
                            прохладу летом при круглогодичное проживании.
                        </>
                    ),
                },

                {
                    caption: "Окна на дачу",
                    image: dachaImg,
                    link: "/okna/apartments",
                    description: (
                        <>Без лишних переплат, только для летнего проживания.</>
                    ),
                },
            ]}
        />
    );
}
