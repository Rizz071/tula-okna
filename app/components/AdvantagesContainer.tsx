import { Grid2 as Grid, Typography, Stack } from "@mui/material";
import { ReactElement } from "react";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IAdvantage {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    title: string;
    description: ReactElement;
}

const AdvantagesContainer = ({ advantages }: { advantages: IAdvantage[] }) => {
    return advantages.map((advantages, index) => {
        return (
            <Grid size={{ xs: 6, md: 4, lg: 3 }} key={index}>
                <Stack direction={"column"}>
                    <advantages.icon
                        sx={{
                            height: "auto",
                            maxHeight: "150px",
                            width: "auto",
                            color: "primary.main",
                        }}
                    />
                    <Typography
                        sx={{
                            fontWeight: 500,
                            letterSpacing: { md: 2 },
                            textAlign: "left",
                            textTransform: "uppercase",
                            mt: 2,
                            mb: 0,
                            fontSize: {
                                xs: "medium",
                                sm: "medium",
                                md: "medium",
                            },
                        }}
                    >
                        {advantages.title}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 300,
                            lineHeight: "normal",
                            fontSize: {
                                xs: "small",
                                sm: "medium",
                                md: "medium",
                                lg: "large",
                            },
                            my: 1,
                        }}
                    >
                        {advantages.description}
                    </Typography>
                </Stack>
            </Grid>
        );
    });
};

export default AdvantagesContainer;
