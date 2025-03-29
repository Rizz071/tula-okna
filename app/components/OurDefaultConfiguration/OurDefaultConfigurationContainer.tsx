import { Typography, Grid2 as Grid } from "@mui/material";
import ResponsiveHeader_H1 from "../Article/ResponsiveHeader_H1";
import StandartWindowsConfiguration from "./StandartWindowsConfiguration";
import StandartDoorsConfiguration from "./StandartDoorsConfiguration";
import StandartCommonConfiguration from "./StandartCommonConfiguration";
import StandartAcessoriesConfiguration from "./StandartAcessoriesConfiguration";

const OurDefaultConfigurationContainer = () => {
    return (
        <>
            <ResponsiveHeader_H1
                text={"Стандартная комплектация окон и дверей"}
            />
            <Typography sx={{ textAlign: "center" }}>
                Для нас очень важно донести до клиента детальную информацию о
                нашей продукции. Как иначе можно отличить одно окно от другого?
                Сравнивая только цену легко сделать неверный выбор.
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
                Указанная комплектация применяется при первоначальном расчёте
                всех наших заказов и в 90% случаев переходит в итоговый договор.
                Каждая отдельная деталь &mdash; это результат искусственного
                отбора, который мы ведём более 20 лет.
            </Typography>

            <Grid container size={12} spacing={6}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StandartWindowsConfiguration />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StandartDoorsConfiguration />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StandartCommonConfiguration />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StandartAcessoriesConfiguration />
                </Grid>
            </Grid>
        </>
    );
};

export default OurDefaultConfigurationContainer;
