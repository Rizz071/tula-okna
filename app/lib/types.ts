import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface IProductionCard {
    image: StaticImageData;
    caption: string;
    link: string;
}

export interface IButtonImage {
    caption: string;
    image: StaticImageData;
    link?: string;
    description?: ReactElement;
}