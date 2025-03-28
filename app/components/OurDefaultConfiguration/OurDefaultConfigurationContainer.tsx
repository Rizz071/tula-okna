import { Typography, Grid2 as Grid } from "@mui/material";
import ResponsiveHeader_H1 from "../Article/ResponsiveHeader_H1";
import StandartWindowsConfiguration from "./StandartWindowsConfiguration";
import StandartDoorsConfiguration from "./StandartDoorsConfiguration";
import StandartAccessoriesConfiguration from "./StandartAccessoriesConfiguration";
import StandartInstallationConfiguration from "./StandartInstallationConfiguration";

const OurDefaultConfigurationContainer = () => {
    return (
        <>
            <ResponsiveHeader_H1
                text={"Стандартная комплектация окон и дверей"}
            />
            <Typography sx={{ textAlign: "center" }}>
                Для нас очень важно донести до клиента подробную информацию о
                нашей продукции.
                <br />
                Каждая отдельная деталь &mdash; это результат искусственного
                отбора, который мы ведём более 20 лет.
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
                Указанная комплектация применяется при первоначальном расчёте
                всех наших заказов и в 90% случаев переходит в итоговый договор.
            </Typography>

            <Grid container size={12} spacing={6}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StandartWindowsConfiguration />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StandartDoorsConfiguration />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StandartAccessoriesConfiguration />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <StandartInstallationConfiguration />
                </Grid>
            </Grid>
        </>
    );
};

export default OurDefaultConfigurationContainer;
