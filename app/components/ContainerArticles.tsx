import {
    Box,
    Grid,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import { Fragment, ReactElement } from "react";
import Image from "next/image";

import polnoves_provedal from "@/public/images/balkoni/Polnoves_provedal.jpg";

enum ImageSide {
    LEFT,
    RIGHT,
}

/*
    Each article cocnsists of:
    1. TEXT PART => array of ReactElements
    2. ACCORDION with details => array of AccordionArticles
    3. IMAGE PART => ReactElement with Image from nextjs and comments
    4. Side of Image => enum ImageSide in LEFT or RIGHT
*/
interface Article {
    articleTitle: string;
    articleParagraphsJSX: ReactElement[];
    articlesAccordion: ArticleDetailsAccordion[];
    articleImageJSX: ReactElement;
    imageSide: ImageSide;
}

interface ArticleDetailsAccordion {
    accordionTitle: string;
    accordionParagraphs: string[];
}

interface articlesContainer {
    mainTitle: string;
    articles: Article[];
}

const testContainer: articlesContainer = {
    mainTitle: "Холодное остекление балконов",
    articles: [
        {
            imageSide: ImageSide.RIGHT,
            articleTitle: "Особенность наших холодных раздвижных балконных рам",
            articleParagraphsJSX: [
                <>
                    <strong>Кратко: на надёжности нельзя экономить.</strong>
                </>,
                <>
                    Алюминиевые рамы не подпадают под действие ни одного ГОСТа.
                    Из-за этого рынок наводнён низкокачественной продукцией.
                </>,
                <>
                    Главное отличие качественной рамы &ndash; толщина стенок
                    алюминиевого профиля.
                </>,
                <>
                    Настоящий алюминиевый профиль имеет толщину стенки &ndash;
                    не менее 1мм, в нём также присутствуют все рёбра жесткости,
                    предусмотренные авторами системы.
                </>,
                <>
                    Цель использования тонкого профиля одна &ndash; сэкономить
                    деньги на стоимости рамы, то есть предложить потребителю
                    более низкую цену.
                </>,
                <>
                    Последствия установки таких &quot;хлипких&quot; рам хорошо
                    известны - лёгкие створки выпадают от сильного ветра, рамы
                    гнутся от малейшей нагрузки.
                </>,
                <>
                    <strong>
                        Мы производим наши алюминиевые рамы на мощностях АО
                        СОФОС только из полновесного профиля.
                    </strong>
                </>,
            ],
            articlesAccordion: [
                {
                    accordionTitle: "Откуда вообще берётся тонкий профиль?",
                    accordionParagraphs: [
                        "Заводы выпускают облегчённый профиль для изготовления маленьких рам. Например, он хорошо подходит для изготовления шкафов-купе, окон раздачи в учреждениях питания и т.д.",
                        "Однако, пользуясь тем, что потребитель не различает полновесный профиль от низкосортного, недобросовестные монтажнные организации применяют его буквально везде.",
                        "В итоге потребитель платит немного меньше при заказе такой продукции, но через некоторое время сталкивается с негативными последствиями.",
                    ],
                },
            ],
            articleImageJSX: (
                <Image
                    src={polnoves_provedal}
                    sizes={"30vw"}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                    alt={"Полновесный профиль Provedal"}
                />
            ),
        },
    ],
};

const ContainerArticles = ({ mainTitle, articles }: articlesContainer) => {
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingY: 6,
        }}
    >
        <Grid
            container
            spacing={{ xs: 0, md: 6 }}
            rowGap={{ xs: 0, sm: 0 }}
            justifyContent={"space-around"}
        >
            <Grid item xs={12} marginY={0}>
                <Typography variant="h1">{mainTitle}</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                alignSelf={"center"}
                order={{ xs: 2, md: 1 }}
            >
                {/* Showing each article: paragraphs, accordion, image */}
                {articles.map((article, index) => {
                    return (
                        <Fragment key={index}>
                            <Typography variant="h2">
                                {article.articleTitle}
                            </Typography>

                            {/* Showing article's title and paragraphs */}
                            {article.articleParagraphsJSX.map(
                                (paragraph, index) => (
                                    <Typography key={index}>
                                        {paragraph}
                                    </Typography>
                                )
                            )}

                            {/* Showing article's details in Accodion */}
                            <Accordion
                                elevation={0}
                                key={Math.round(Math.random())}
                            >
                                <AccordionSummary
                                    sx={{ pl: 0 }}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography
                                        fontSize={"1rem"}
                                        variant="button"
                                        color="error"
                                    >
                                        <ImportContactsTwoToneIcon fontSize="medium" />{" "}
                                        ПОДРОБНЕЕ
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box bgcolor={"lightyellow"} padding={2}>
                                        {article.articlesAccordion.map(
                                            (accordionArticle) => (
                                                <>
                                                    {/* Title of accordion's each small article */}
                                                    <Typography
                                                        variant="h6"
                                                        sx={{ mt: 2 }}
                                                        gutterBottom
                                                    >
                                                        {
                                                            accordionArticle.accordionTitle
                                                        }
                                                    </Typography>

                                                    {/* Looping through each accordion's article's paragraph */}
                                                    {accordionArticle.accordionParagraphs.map(
                                                        (
                                                            accordionParagraph,
                                                            index
                                                        ) => (
                                                            <Typography
                                                                variant="subtitle1"
                                                                key={index}
                                                                gutterBottom
                                                            >
                                                                {
                                                                    accordionParagraph
                                                                }
                                                            </Typography>
                                                        )
                                                    )}
                                                </>
                                            )
                                        )}
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Fragment>
                    );
                })}
            </Grid>
        </Grid>
    </Box>;
};

export default ContainerArticles;
