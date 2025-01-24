import { Article } from "@/app/lib/types";
import { Typography } from "@mui/material";

const ArticleText = ({ article }: { article: Article }) => {
    return (
        <>
            <Typography
                variant={"h2"}
                sx={{
                    typography: { xs: "h3", md: "h2" },
                    mt: 0,
                    textAlign: { xs: "center", sm: "left" },
                }}
            >
                {article.articleTitle}
            </Typography>

            {article.articleParagraphsJSX.map((paragraph, index) => (
                <Typography
                    sx={{
                        typography: { xs: "body2", md: "body1" },
                    }}
                    key={index}
                >
                    {paragraph}
                </Typography>
            ))}
        </>
    );
};

export default ArticleText;
