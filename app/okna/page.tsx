import React from "react";
import apartmentsImg from "@/public/images/Softline-70-Exterior-01.png";
import cottageImg from "@/public/images/Artline-82-Exterior-01.png";
import dachaImg from "@/public/images/okna/oknodom_1.png";
import WayFinderContainer from "../components/WayFinder/WayFinderContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Выбор окон",
    description: "Выбор окон ПВХ - Тульские Окна",
    alternates: {
        canonical: "https://тульские-окна.рф/okna/",
    },
};

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
                            Защита от промерзания на высоких этажах.
                            <br />
                            Глушение уличного шума.
                            <br />
                            Максимальное пропускание света.
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
                            Экономия денег на отоплении зимой.
                            <br />
                            Ограждение от жары летом.
                            <br />
                            Прочная конструкция.
                            <br />
                            Противовзломноть.
                        </>
                    ),
                },

                {
                    caption: "Окна на дачу",
                    subCaption: "перейти в раздел",
                    image: dachaImg,
                    link: "/okna/dacha",
                    description: (
                        <>
                            Без лишних переплат &mdash; только для летнего
                            проживания.
                        </>
                    ),
                },
            ]}
        />
    );
}
