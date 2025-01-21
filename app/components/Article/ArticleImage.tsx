import { Article } from "@/app/lib/types";

const ArticleImage = ({ article }: { article: Article }) => {
    return article.articleImageJSX;
};

export default ArticleImage;
