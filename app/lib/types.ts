import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
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

export interface IMainMenuItem {
    name: string;
    link: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
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

export interface IProfilePage {
    profileSystemName: string;
    profileMainImage: StaticImageData;
    profileSystemLogo: StaticImageData;

    profileSystemProperties: ProfileTableLine[];

    recommendedUse: ReactElement;
    profileSections: ProfileDrawSection[];
}

interface ProfileTableLine {
    propertyName: string;
    propertyText: ReactElement;
    additionalDescriptionText: ReactElement[];
    accent?: boolean,
}

interface ProfileDrawSection {
    name: string;
    image: StaticImageData;
}