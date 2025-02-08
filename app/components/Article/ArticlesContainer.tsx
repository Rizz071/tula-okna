import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Fragment } from "react";
import { articlesContainer, ImageSide } from "@/app/lib/types";
import ArticleText from "./ArticleText";
import ArticleDetails from "./ArticleDetails";
import ArticleImage from "./ArticleImage";
import ResponsiveHeader_H1 from "./ResponsiveHeader_H1";
import ResponsiveHeader_H2 from "./ResponsiveHeader_H2";

const ArticlesContainer = ({ mainTitle, articles }: articlesContainer) => {
    return (
        <Container maxWidth={"lg"}>
            <Grid
                container
                sx={{
                    justifyContent: "space-around",
                    mt: { xs: 6, sm: 10 },
                }}
                columnSpacing={6}
                rowSpacing={{ xs: 4, sm: 10 }}
            >
                <Grid size={{ xs: 12 }}>
                    <ResponsiveHeader_H1 text={mainTitle} />
                </Grid>

                {articles.map((article, index) => (
                    <Grid
                        container
                        columnSpacing={6}
                        rowSpacing={{ xs: 8, sm: 8 }}
                        key={index}
                    >
                        <Grid
                            size={{ xs: 12, sm: 7, md: 6 }}
                            order={{
                                xs: 2,
                                sm:
                                    article.imageSide == ImageSide.RIGHT
                                        ? 1
                                        : 2,
                            }}
                        >
                            <ResponsiveHeader_H2 text={article.articleTitle} />
                            <ArticleText article={article} />
                            <ArticleDetails article={article} />
                        </Grid>

                        <Grid
                            size={{ xs: 12, sm: 5, md: 6 }}
                            order={{
                                xs: 1,
                                sm:
                                    article.imageSide == ImageSide.RIGHT
                                        ? 2
                                        : 1,
                            }}
                        >
                            <Box sx={{ alignSelf: "center" }}>
                                <ArticleImage article={article} />
                            </Box>
                        </Grid>

                        {articles.length !== index && index !== 0 && (
                            <Grid size={{ xs: 12 }}>
                                <Divider />
                            </Grid>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ArticlesContainer;
