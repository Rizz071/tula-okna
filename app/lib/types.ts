import { StaticImageData } from "next/image";

export interface IProductionCard {
    image: StaticImageData;
    caption: string;
    link: string;
}