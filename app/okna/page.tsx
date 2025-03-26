import React from "react";
import apartmentsImg from "@/public/images/Softline-70-Exterior-01.png";
import cottageImg from "@/public/images/Artline-82-Exterior-01.png";
import dachaImg from "@/public/images/okna/oknodom_1.png";
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
                    subCaption: "перейти в раздел",
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
                    subCaption: "перейти в раздел",
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
                    subCaption: "перейти в раздел",
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
