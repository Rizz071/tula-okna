import { Article } from "@/app/lib/types";
import { Typography } from "@mui/material";

const ArticleText = ({ article }: { article: Article }) => {
    return (
        <>
            {article.articleParagraphsJSX.map((paragraph, index) => (
                <Typography variant="body1" key={index}>
                    {paragraph}
                </Typography>
            ))}
        </>
    );
};

export default ArticleText;
