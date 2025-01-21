import {
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Box,
} from "@mui/material";
import { Article } from "@/app/lib/types";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import { Fragment } from "react";

const ArticleDetails = ({ article }: { article: Article }) => {
    return (
        <Accordion elevation={0} key={Math.round(Math.random())}>
            <AccordionSummary
                sx={{ pl: 0 }}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography fontSize={"1rem"} variant="button" color="error">
                    <ImportContactsTwoToneIcon fontSize="medium" /> ПОДРОБНЕЕ
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box bgcolor={"lightyellow"} padding={2}>
                    {article.articlesAccordion.map(
                        (accordionArticle, index) => (
                            <Fragment key={index}>
                                <Typography
                                    variant="h6"
                                    sx={{ mt: 2 }}
                                    gutterBottom
                                >
                                    {accordionArticle.accordionTitle}
                                </Typography>

                                {accordionArticle.accordionParagraphs.map(
                                    (accordionParagraph, index) => (
                                        <Typography
                                            variant="subtitle1"
                                            key={index}
                                            gutterBottom
                                        >
                                            {accordionParagraph}
                                        </Typography>
                                    )
                                )}
                            </Fragment>
                        )
                    )}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default ArticleDetails;
