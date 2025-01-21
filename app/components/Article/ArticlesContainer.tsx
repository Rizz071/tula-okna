import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Fragment } from "react";
import { articlesContainer, ImageSide } from "@/app/lib/types";
import ArticleText from "./ArticleText";
import ArticleDetails from "./ArticleDetails";
import ArticleImage from "./ArticleImage";

const ArticlesContainer = ({ mainTitle, articles }: articlesContainer) => {
    return (
        <Container maxWidth={"lg"}>
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
                    sx={{
                        justifyContent: "space-around",
                        mt: 2,
                    }}
                    columnSpacing={6}
                    rowSpacing={10}
                >
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="h1">{mainTitle}</Typography>
                    </Grid>

                    {articles.map((article, index) => (
                        <Grid
                            container
                            columnSpacing={6}
                            rowSpacing={10}
                            key={index}
                        >
                            <Grid
                                size={{ xs: 12, md: 6 }}
                                sx={{ alignSelf: "center" }}
                                order={{
                                    xs: 2,
                                    md:
                                        article.imageSide == ImageSide.RIGHT
                                            ? 1
                                            : 2,
                                }}
                            >
                                <ArticleText article={article} />
                                <ArticleDetails article={article} />
                            </Grid>

                            <Grid
                                size={{ xs: 12, md: 6 }}
                                order={{
                                    xs: 1,
                                    md:
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
            </Box>
        </Container>
    );
};

export default ArticlesContainer;
