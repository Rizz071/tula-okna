import { IDefaultConfigurationTable } from "@/app/lib/types";
import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TableBody,
    Box,
} from "@mui/material";
import Image from "next/image";

const DefaultConfigurationTemplate = ({
    sectionTitle,
    sections,
}: IDefaultConfigurationTable) => {
    return (
        <TableContainer component={Paper} elevation={12} sx={{ mt: 6 }}>
            <Table size="small" sx={{ tableLayout: "fixed" }}>
                <TableHead>
                    <TableRow sx={{ bgcolor: "#333" }}>
                        <TableCell>
                            <Typography
                                sx={{
                                    m: 1,
                                    p: 0,
                                    fontWeight: 400,
                                    textTransform: "uppercase",
                                    letterSpacing: "3px",
                                    textAlign: "center",
                                    bgcolor: "#333",
                                    color: "white",
                                }}
                            >
                                {sectionTitle}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sections.map((section) => {
                        return (
                            <TableRow sx={{ verticalAlign: "top" }}>
                                <TableCell sx={{ p: { xs: 2, md: 4 } }}>
                                    {section.image.width >=
                                    section.image.height ? (
                                        <Image
                                            src={section.image}
                                            width={section.image.width}
                                            height={section.image.height}
                                            sizes="50vw"
                                            alt={section.title}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                        />
                                    ) : (
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "300px",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Image
                                                src={section.image}
                                                width={section.image.width}
                                                height={section.image.height}
                                                alt={section.title}
                                                style={{
                                                    width: "auto",
                                                    height: "100%",
                                                    verticalAlign: "bottom",
                                                }}
                                            />
                                        </Box>
                                    )}

                                    <Typography
                                        gutterBottom
                                        sx={{
                                            textTransform: "uppercase",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {section.title}
                                    </Typography>
                                    <Box sx={{ ml: { xs: 0, md: 2 } }}>
                                        {section.description}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DefaultConfigurationTemplate;
