import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Asset } from "next-video/dist/cjs/assets.js";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface IProductionCard {
    image: StaticImageData;
    caption: ReactElement;
    link: string;
}

export interface IButtonImage {
    caption: string;
    subCaption?: string;
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
    articleMedia: ArticleImage | ReactElement;
    imageSide: ImageSide;
    anchor?: string;
}

export interface ArticleDetailsAccordion {
    accordionTitle: ReactElement;
    accordionParagraphs: ReactElement[];
}

export interface ArticleImage {
    imageSrc: StaticImageData;
    imageCaption?: ReactElement;
    border?: boolean;
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

    recommendedUse: ReactElement[];
    profileSections: ProfileDrawSection[];

    promoVideo: {
        promoVideoSrc: string;
        promoVideoPictureSrc: string;
    }
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

export interface IInfoCard {
    title: string;
    infoCardLines: IInfoCardLine[];
}

interface IInfoCardLine {
    leftProperty: string;
    rightProperty: ReactElement;
}


export interface IDefaultConfigurationTable {
    sectionTitle: string;
    sections: IDefaultConfigurationSubsection[];

}

interface IDefaultConfigurationSubsection {
    media: StaticImageData | string;
    mediaType: "IMAGE" | "VIDEO";
    title: string;
    description: ReactElement;
}
