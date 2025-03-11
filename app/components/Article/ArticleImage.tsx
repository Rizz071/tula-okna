import { Article } from "@/app/lib/types";

const ArticleImage = ({ article }: { article: Article }) => {
    // return article.articleImageJSX;

    return (
        <Stack direction={"column"}>
            <Box alignSelf={"center"}>
                <Box padding={0}>
                    <Image
                        src={otkos_1}
                        sizes={"50vw"}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        alt={"Light in apartments"}
                    />
                </Box>
                <Typography
                    variant="body2"
                    sx={{
                        textAlign: "center",
                        fontWeight: 500,
                        mt: 4,
                    }}
                >
                    Оптимальное обустройство тёплого откоса в квартирах с
                    использованием сэндвич-панели
                </Typography>
            </Box>
        </Stack>
    );
};

export default ArticleImage;
