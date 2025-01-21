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

export interface Article {
    articleTitle: string;
    articleParagraphsJSX: ReactElement[];
    articlesAccordion: ArticleDetailsAccordion[];
    articleImageJSX: ReactElement;
    imageSide: ImageSide;
}

export interface ArticleDetailsAccordion {
    accordionTitle: string;
    accordionParagraphs: string[];
}

export interface articlesContainer {
    mainTitle: string;
    articles: Article[];
}

export enum ImageSide {
    LEFT,
    RIGHT,
}