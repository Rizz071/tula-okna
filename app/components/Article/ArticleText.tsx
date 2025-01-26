import { Article } from "@/app/lib/types";
import { Typography } from "@mui/material";
import ResponsiveHeader_H2 from "./ResponsiveHeader_H2";

const ArticleText = ({ article }: { article: Article }) => {
    return (
        <>
            <ResponsiveHeader_H2 text={article.articleTitle} />

            {article.articleParagraphsJSX.map((paragraph, index) => (
                <Typography
                    variant="body1"
                    // sx={{
                    //     typography: { xs: "body2", md: "body1" },
                    // }}
                    key={index}
                >
                    {paragraph}
                </Typography>
            ))}
        </>
    );
};

export default ArticleText;
