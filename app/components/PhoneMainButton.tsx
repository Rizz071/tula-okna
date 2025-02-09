import { Box, Button, Stack, Typography } from "@mui/material";

import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

interface Props {
    isContactsVisible: boolean;
    setIsContactsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhoneMailButton = ({
    isContactsVisible,
    setIsContactsVisible,
}: Props) => {
    return (
        <Box
            sx={{ display: { xs: "none", sm: "flex" } }}
            flexDirection={"column"}
            alignSelf={"center"}
            justifyContent={"flex-end"}
            textAlign={"right"}
        >
            <Button
                variant={"outlined"}
                sx={{
                    display: isContactsVisible ? "none" : "block",
                    mt: 0,
                    fontWeight: 400,
                    color: "primary",
                }}
                onClick={() => {
                    setIsContactsVisible(!isContactsVisible);
                }}
            >
                <Stack direction={"row"}>
                    <SupportAgentOutlinedIcon
                        sx={{
                            mr: 2,
                            fontSize: "2.5rem",
                            alignSelf: "center",
                        }}
                    />
                    <Stack
                        direction={"column"}
                        sx={{ justifyContent: "flex-start" }}
                    >
                        <Typography
                            variant="button"
                            sx={{ fontWeight: 700, textAlign: "left" }}
                        >
                            телефон и почта
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: 400,
                                fontSize: "0.6rem",
                                textAlign: "left",
                            }}
                        >
                            нажмите для просмотра
                        </Typography>
                    </Stack>
                </Stack>
            </Button>
            <Box
                sx={{
                    maxWidth: "300px",
                    mt: 1,
                    px: 1,
                    display: isContactsVisible ? "block" : "none",
                    border: "1px solid",
                    borderColor: "secondary.dark",
                    borderRadius: "6px",
                }}
            >
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <LocalPhoneIcon
                        sx={{
                            mr: 1,
                            alignSelf: "center",
                            color: "secondary.main",
                        }}
                    />
                    <Stack direction={"row"}>
                        <Typography
                            variant="h6"
                            sx={{
                                m: 0,
                                p: 0,
                                fontWeight: 400,
                                fontSize: "1rem",
                                color: "secondary.dark",
                                alignSelf: "center",
                            }}
                        >
                            +7 (4872)
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                ml: 1,
                                mt: 0,
                                mr: 0,
                                mb: 0,
                                p: 0,
                                color: "secondary.dark",
                                fontSize: "1.5rem",
                                alignSelf: "end",
                                letterSpacing: "0.05rem",
                            }}
                        >
                            38-55-50
                        </Typography>
                    </Stack>
                </Stack>

                <Stack direction={"row"} justifyContent={"space-between"}>
                    <MailIcon
                        sx={{
                            mr: 1,
                            alignSelf: "center",
                            color: "secondary.main",
                        }}
                    />
                    <Typography
                        sx={{
                            m: 0,
                            p: 0,
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "secondary.dark",
                            letterSpacing: "0.05rem",
                        }}
                    >
                        385391@mail.ru
                    </Typography>
                </Stack>

                <Stack direction={"row"} justifyContent={"space-between"}>
                    <WorkHistoryIcon
                        sx={{
                            mt: 1,
                            mr: 1,
                            alignSelf: "top",
                            color: "secondary.main",
                        }}
                    />
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: "0.9rem",
                            color: "secondary.dark",
                            textAlign: "left",
                            fontWeight: 400,
                        }}
                    >
                        Будни
                        <br />
                        Суббота
                    </Typography>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: "0.9rem",
                            color: "secondary.dark",
                            textAlign: "right",
                            fontWeight: 400,
                        }}
                    >
                        09:00 - 19:00
                        <br />
                        10.00 - 15.00
                    </Typography>
                </Stack>
                <Typography
                    sx={{
                        m: 0,
                        p: 0,
                        fontSize: "0.7rem",
                        color: "secondary.dark",
                        textAlign: "right",
                        fontWeight: 500,
                        borderTop: "dotted 1px",
                    }}
                >
                    По выходным дням принимаются
                    <br />
                    только звонки и почта, офис закрыт
                </Typography>
            </Box>
        </Box>
    );
};

export default PhoneMailButton;
