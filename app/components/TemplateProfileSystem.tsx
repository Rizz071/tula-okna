import {
    Container,
    Grid2 as Grid,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Box,
    Typography,
    TableBody,
} from "@mui/material";
import Image from "next/image";
import ResponsiveHeader_H1 from "./Article/ResponsiveHeader_H1";
import { IProfilePage } from "../lib/types";

const TemplateProfileSystem = ({
    profilePage,
}: {
    profilePage: IProfilePage;
}) => {
    return (
        <Grid container columnSpacing={10} rowSpacing={6}>
            <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                sx={{
                    position: "relative",
                    display: { xs: "none", sm: "block" },
                }}
            >
                <Image
                    src={profilePage.profileMainImage}
                    alt={`${profilePage.profileSystemName} image`}
                    sizes={"50vw"}
                    width={0}
                    height={0}
                    quality={85}
                    priority
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <TableContainer
                    component={Paper}
                    elevation={12}
                    sx={{
                        position: "relative",
                        mt: { xs: -13, sm: -15 },
                    }}
                >
                    <Table
                        aria-label={`Profile ${profilePage.profileSystemName} properies table`}
                        size="small"
                        style={{ tableLayout: "fixed" }}
                    >
                        <TableHead sx={{ bgcolor: "#333" }}>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <Grid container sx={{ width: "100%" }}>
                                        <Grid size={{ xs: 3 }}>
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    height: "100%",
                                                }}
                                            >
                                                <Image
                                                    src={
                                                        profilePage.profileSystemLogo
                                                    }
                                                    alt={`${profilePage.profileSystemName} logo`}
                                                    fill
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid size={"grow"}>
                                            <Typography
                                                variant="h1"
                                                sx={{
                                                    px: 0,
                                                    py: 1,
                                                    color: "white",
                                                    fontSize: {
                                                        xs: "1.2rem",
                                                        md: "1.5rem",
                                                        lg: "2.0rem",
                                                    },
                                                    letterSpacing: {
                                                        xs: "1px",
                                                        lg: "2px",
                                                    },
                                                    textAlign: {
                                                        xs: "right",
                                                        md: "center",
                                                    },
                                                    fontWeight: {
                                                        xs: 400,
                                                        sm: 300,
                                                    },
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {profilePage.profileSystemName}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    fontSize: {
                                                        xs: "0.7rem",
                                                        md: "0.9rem",
                                                        lg: "1rem",
                                                    },
                                                    m: 0,
                                                    pb: 1,
                                                    color: "white",
                                                    fontWeight: 300,
                                                    textTransform: "uppercase",
                                                    letterSpacing: {
                                                        xs: "1px",
                                                        lg: "2px",
                                                    },
                                                    textAlign: {
                                                        xs: "right",
                                                        md: "center",
                                                    },
                                                }}
                                            >
                                                Особенности нашей сборки
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell
                                    colSpan={2}
                                    sx={{
                                        display: {
                                            xs: "table-cell",
                                            sm: "none",
                                        },
                                    }}
                                >
                                    <Image
                                        src={profilePage.profileMainImage}
                                        alt={`${profilePage.profileSystemName} image`}
                                        sizes={"50vw"}
                                        width={0}
                                        height={0}
                                        quality={85}
                                        priority
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </TableCell>
                            </TableRow>

                            {profilePage.profileSystemProperties.map(
                                (propertyTableLine, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell
                                                sx={{ height: "3.0rem" }}
                                            >
                                                <Typography
                                                    variant="overline"
                                                    sx={{
                                                        lineHeight: "1.2rem",
                                                    }}
                                                >
                                                    {
                                                        propertyTableLine.propertyName
                                                    }
                                                </Typography>
                                            </TableCell>

                                            <TableCell
                                                align="left"
                                                sx={{
                                                    bgcolor:
                                                        propertyTableLine.accent
                                                            ? "lightgreen"
                                                            : "white",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        typography: "overline",
                                                        m: 0,
                                                        p: 0,
                                                        fontSize: {
                                                            xs: "0.7rem",
                                                            md: "0.8rem",
                                                        },
                                                        fontWeight: 500,
                                                        lineHeight: "1.2rem",
                                                    }}
                                                    key={index}
                                                >
                                                    {
                                                        propertyTableLine.propertyText
                                                    }
                                                </Typography>

                                                {propertyTableLine.additionalDescriptionText &&
                                                    propertyTableLine.additionalDescriptionText.map(
                                                        (
                                                            additionalDescription,
                                                            index
                                                        ) => {
                                                            return (
                                                                <Typography
                                                                    sx={{
                                                                        typography:
                                                                            "overline",
                                                                        mt: 1,
                                                                        p: 0,
                                                                        fontSize:
                                                                            {
                                                                                xs: "0.5rem",
                                                                                sm: "0.6rem",
                                                                            },
                                                                        lineHeight:
                                                                            "1rem",
                                                                    }}
                                                                    key={index}
                                                                >
                                                                    {
                                                                        additionalDescription
                                                                    }
                                                                </Typography>
                                                            );
                                                        }
                                                    )}
                                            </TableCell>
                                        </TableRow>
                                    );
                                }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}></Grid>
            <Grid
                size={{ xs: 12, lg: 6 }}
                sx={{
                    position: "relative",
                    mt: { xs: 0, lg: -6 },
                }}
            >
                <TableContainer component={Paper} elevation={12}>
                    <Table
                        // sx={{ minWidth: 650 }}
                        aria-label="Profile comapament table"
                        size="small"
                        style={{ tableLayout: "fixed" }}
                    >
                        <TableHead sx={{ bgcolor: "#333" }}>
                            <TableRow>
                                <TableCell colSpan={2}>
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
                                        Рекомендованное применение
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ verticalAlign: "top" }}>
                                <TableCell colSpan={2}>
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            textTransform: "uppercase",
                                            letterSpacing: "3px",
                                            textAlign: "center",
                                        }}
                                    ></Typography>
                                    <Typography
                                        sx={{
                                            mx: { xs: 2, md: 4 },
                                            my: 2,
                                            typography: "button",
                                            lineHeight: "1.5rem",
                                        }}
                                    >
                                        Загородные дома для круглогодичного
                                        проживания
                                    </Typography>
                                    <Typography
                                        sx={{
                                            mx: { xs: 2, md: 4 },
                                            my: 2,
                                            typography: "button",
                                            lineHeight: "1.5rem",
                                        }}
                                    >
                                        Городские квартиры: на оживлённой улице,
                                        с недостаточным отоплением, на высоких
                                        этажах
                                    </Typography>
                                    <Typography
                                        sx={{
                                            mx: { xs: 2, md: 4 },
                                            my: 2,
                                            typography: "button",
                                            lineHeight: "1.5rem",
                                        }}
                                    >
                                        Крупногабаритные окна и двери
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: 6 }}>
                <ResponsiveHeader_H1 text={"Комбинация профилей"} />
            </Grid>

            {profilePage.profileSections.map((section, index) => {
                return (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <TableContainer component={Paper} elevation={12}>
                            <Table
                                aria-label="Profile comapament table"
                                size="small"
                                style={{ tableLayout: "fixed" }}
                            >
                                <TableHead sx={{ bgcolor: "#333" }}>
                                    <TableRow>
                                        <TableCell colSpan={2}>
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
                                                {section.name}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ verticalAlign: "top" }}>
                                        <TableCell colSpan={2}>
                                            <Image
                                                src={section.image}
                                                alt={`${section.name}`}
                                                sizes={"50vw"}
                                                width={0}
                                                height={0}
                                                quality={85}
                                                priority
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default TemplateProfileSystem;
