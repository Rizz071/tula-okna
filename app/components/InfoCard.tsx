import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Grid2 as Grid,
    Stack,
} from "@mui/material";
import { IInfoCard } from "../lib/types";

const InfoCard = ({ infoCard }: { infoCard: IInfoCard }) => {
    return (
        <TableContainer component={Paper} elevation={12}>
            <Table size="small" style={{ tableLayout: "fixed" }}>
                <TableHead sx={{ bgcolor: "#333" }}>
                    <TableRow>
                        <TableCell>
                            <Typography
                                sx={{
                                    m: 1,
                                    p: 0,
                                    color: "white",
                                    fontWeight: 300,
                                    textTransform: "uppercase",
                                    letterSpacing: "3px",
                                    textAlign: "center",
                                }}
                            >
                                {infoCard.title}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {infoCard.infoCardLines.map((line, index) => {
                        return (
                            <TableRow sx={{ verticalAlign: "top" }} key={index}>
                                <TableCell
                                    sx={{
                                        height: "3.0rem",
                                        px: 2,
                                    }}
                                >
                                    <Grid
                                        container
                                        columnSpacing={2}
                                        direction={{ xs: "column", lg: "row" }}
                                        sx={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Grid size={{ xs: 12, lg: 6 }}>
                                            <Typography
                                                sx={{
                                                    typography: "overline",
                                                    textAlign: {
                                                        xs: "center",
                                                        lg: "left",
                                                    },
                                                    m: 0,
                                                    p: 0,
                                                }}
                                            >
                                                {line.leftProperty}
                                            </Typography>
                                        </Grid>

                                        <Grid size={{ xs: 12, lg: 6 }}>
                                            {line.rightProperty}
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default InfoCard;
