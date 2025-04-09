import {
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

import Pricer from "./PriceComponents/Pricer";
import VideoPlayerWrapper from "./VideoPlayerWrapper";

const TemplateProfileSystem = ({
    profilePage,
}: {
    profilePage: IProfilePage;
}) => {
    return (
        <Grid container columnSpacing={10} rowSpacing={6}>
            <Grid
                size={{ xs: 12, sm: 6, md: 6 }}
                order={{ xs: 1, sm: 0 }}
                sx={{
                    position: "relative",
                    mt: {
                        sm: -25,
                        md: -50,
                        lg: -48,
                    },
                }}
            >
                <Grid
                    container
                    direction="column"
                    rowSpacing={6}
                    sx={{
                        height: "100%",
                        justifyContent: {
                            xs: "flex-end",
                            sm: "center",
                            md: "flex-end",
                        },
                    }}
                >
                    <Grid
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                textAlign: "center",
                            }}
                        >
                            <Image
                                src={profilePage.profileMainImage}
                                alt={`${profilePage.profileSystemName} image`}
                                // sizes={"50vw"}
                                width={0}
                                height={0}
                                quality={90}
                                priority
                                style={{
                                    maxWidth: "100%",
                                    width: profilePage.profileMainImage.width,
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid sx={{ verticalAlign: "bottom" }}>
                        <TableContainer component={Paper} elevation={12}>
                            <Table
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
                                            {profilePage.recommendedUse.map(
                                                (useCase, index) => {
                                                    return (
                                                        <Typography
                                                            sx={{
                                                                mx: {
                                                                    xs: 2,
                                                                    md: 4,
                                                                },
                                                                my: 2,
                                                                typography:
                                                                    "button",
                                                                lineHeight:
                                                                    "1.5rem",
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                            key={index}
                                                        >
                                                            {useCase}
                                                        </Typography>
                                                    );
                                                }
                                            )}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 6 }} order={{ xs: 0, sm: 1 }}>
                <TableContainer
                    component={Paper}
                    elevation={12}
                    sx={{
                        position: "relative",
                        mt: { xs: -13, sm: -15, md: -15, lg: -15 },
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
                                                    // mr: 4,
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
                                                        lg: "1.8rem",
                                                    },
                                                    letterSpacing: {
                                                        xs: "1px",
                                                        lg: "2px",
                                                    },
                                                    textAlign: {
                                                        xs: "right",
                                                        md: "right",
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
                                                        md: "right",
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
                                                sx={{
                                                    height: "3.0rem",
                                                    boxShadow:
                                                        propertyTableLine.accent
                                                            ? "inset 6px 0px 0px 0px #00A36C"
                                                            : "inset 0px 0px 0px 0px white",
                                                }}
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

                                            <TableCell align="left">
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

            <Grid size={{ xs: 12 }} sx={{ mt: 6 }} order={{ xs: 3 }}>
                <ResponsiveHeader_H1
                    text={`Стоимость типовых конструкций ${profilePage.profileSystemName}`}
                />
            </Grid>
            <Grid order={{ xs: 4 }}>
                <Pricer filterByProductName={profilePage.profileSystemName} />
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: 6 }} order={{ xs: 4 }}>
                <ResponsiveHeader_H1 text={`О профильной системе`} />
            </Grid>
            <Grid order={{ xs: 5 }}>
                <Box sx={{ width: "100%", border: "1px solid grey", p: 1 }}>
                    <VideoPlayerWrapper
                        videoSrc={profilePage.promoVideo.promoVideoSrc}
                        posterSrc={profilePage.promoVideo.promoVideoPictureSrc}
                        isAutoPlaying={true}
                    />
                </Box>
            </Grid>

            <Grid size={{ xs: 12 }} sx={{ mt: 6 }} order={{ xs: 6 }}>
                <ResponsiveHeader_H1 text={"Комбинация профилей"} />
            </Grid>

            {profilePage.profileSections.map((section, index) => {
                return (
                    <Grid
                        size={{ xs: 12, sm: 6 }}
                        key={index}
                        order={{ xs: 6 + index }}
                    >
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
