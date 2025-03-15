import { Article } from "@/app/lib/types";
import { Stack, Box, Typography } from "@mui/material";
import Image from "next/image";

const ArticleImage = ({ article }: { article: Article }) => {
    return (
        <Stack direction={"column"}>
            <Box
                alignSelf={"center"}
                sx={{ m: 0, p: 0, width: "100%", height: "100%" }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        p: article.articleImage.border ? "10px" : 0,
                        border: article.articleImage.border
                            ? "solid 1px #333"
                            : "none",
                    }}
                >
                    <Image
                        src={article.articleImage.imageSrc}
                        sizes={"50vw"}
                        style={{
                            verticalAlign: "bottom",
                            width: "100%",
                            height: "auto",
                        }}
                        alt={""}
                    />
                </Box>
            </Box>
            {article.articleImage.imageCaption && (
                <Typography
                    variant="body2"
                    sx={{
                        textAlign: "center",
                        fontWeight: 500,
                        mt: 2,
                    }}
                >
                    {article.articleImage.imageCaption}
                </Typography>
            )}
        </Stack>
    );
};

export default ArticleImage;
