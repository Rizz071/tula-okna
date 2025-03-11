import { Article } from "@/app/lib/types";
import { Stack, Box, Typography } from "@mui/material";
import Image from "next/image";

const ArticleImage = ({ article }: { article: Article }) => {
    // return article.articleImageJSX;

    return (
        <Stack direction={"column"}>
            <Box alignSelf={"center"} sx={{ m: 0, p: 0 }}>
                <Box
                    sx={{
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
                        alt={"Light in apartments"}
                    />
                </Box>
                {article.articleImage.imageCaption && (
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: "center",
                            fontWeight: 500,
                            mt: 2,
                            // mb: article.articleImage.border ? 1 : 0,
                        }}
                    >
                        {article.articleImage.imageCaption}
                    </Typography>
                )}
            </Box>
        </Stack>
    );
};

export default ArticleImage;
