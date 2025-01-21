import { Article } from "@/app/lib/types";
import { Typography } from "@mui/material";

const ArticleText = ({ article }: { article: Article }) => {
    return (
        <>
            <Typography variant="h2">{article.articleTitle}</Typography>

            {article.articleParagraphsJSX.map((paragraph, index) => (
                <Typography key={index}>{paragraph}</Typography>
            ))}
        </>
    );
};

export default ArticleText;
