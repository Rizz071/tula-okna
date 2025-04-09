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
import Image, { StaticImageData } from "next/image";
import VideoPlayerWrapper from "../VideoPlayerWrapper";

const DefaultConfigurationTemplate = ({
    sectionTitle,
    sections,
}: IDefaultConfigurationTable) => {
    return (
        <TableContainer
            component={Paper}
            elevation={12}
            sx={{ mt: 6, height: "100%" }}
        >
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
                    {sections.map((section, index) => {
                        return (
                            <TableRow
                                sx={{ verticalAlign: "top" }}
                                key={section.title}
                            >
                                <TableCell
                                    sx={{
                                        p: {
                                            xs: 2,
                                            md: 4,
                                            borderBottom:
                                                index + 1 == sections.length
                                                    ? 0
                                                    : "1px solid rgba(224, 224, 224, 1)",
                                        },
                                    }}
                                >
                                    {section.mediaType == "IMAGE" ? (
                                        (section.media as StaticImageData)
                                            .width >=
                                        (section.media as StaticImageData)
                                            .height ? (
                                            <Image
                                                src={
                                                    section.media as StaticImageData
                                                }
                                                width={
                                                    (
                                                        section.media as StaticImageData
                                                    ).width
                                                }
                                                height={
                                                    (
                                                        section.media as StaticImageData
                                                    ).height
                                                }
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
                                                    src={
                                                        section.media as StaticImageData
                                                    }
                                                    width={
                                                        (
                                                            section.media as StaticImageData
                                                        ).width
                                                    }
                                                    height={
                                                        (
                                                            section.media as StaticImageData
                                                        ).height
                                                    }
                                                    alt={section.title}
                                                    style={{
                                                        width: "auto",
                                                        height: "100%",
                                                        verticalAlign: "bottom",
                                                    }}
                                                />
                                            </Box>
                                        )
                                    ) : (
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "auto",
                                                border: "1px solid grey",
                                                p: 1,
                                            }}
                                        >
                                            <VideoPlayerWrapper
                                                videoSrc={
                                                    section.media as string
                                                }
                                                posterSrc={(
                                                    section.media as string
                                                ).replace("mp4", "jpg")}
                                            />
                                            {/* <Player
                                                src={section.media as string}
                                                poster={(
                                                    section.media as string
                                                ).replace("mp4", "jpg")}
                                            /> */}
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
