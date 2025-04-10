import { Article, ArticleImage } from "@/app/lib/types";
import { Stack, Box, Typography } from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";

function isArticleImage(
    object: ArticleImage | ReactElement
): object is ArticleImage {
    return (object as ArticleImage).imageSrc !== undefined;
}

const ArticleMedia = ({ article }: { article: Article }) => {
    return (
        <Stack direction={"column"}>
            <Box
                id={article.anchor}
                alignSelf={"center"}
                sx={{ m: 0, p: 0, width: "100%", height: "100%" }}
            >
                {isArticleImage(article.articleMedia) ? (
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                            p: article.articleMedia.border ? "10px" : 0,
                            border: article.articleMedia.border
                                ? "solid 1px #333"
                                : "none",
                        }}
                    >
                        <Image
                            src={article.articleMedia.imageSrc}
                            sizes="(max-width: 700px) 100vw, 50vw"
                            style={{
                                verticalAlign: "bottom",
                                width: "100%",
                                height: "auto",
                            }}
                            alt={""}
                        />
                    </Box>
                ) : (
                    article.articleMedia
                )}
            </Box>

            {isArticleImage(article.articleMedia) &&
                article.articleMedia.imageCaption && (
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: "center",
                            fontWeight: 500,
                            mt: 2,
                        }}
                    >
                        {article.articleMedia.imageCaption}
                    </Typography>
                )}
        </Stack>
    );
};

export default ArticleMedia;
