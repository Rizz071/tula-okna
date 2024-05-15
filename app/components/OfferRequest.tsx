"use client";

import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Theme,
    Typography,
} from "@mui/material";
import Image from "next/image";

import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import background from "../../public/images/stoimost-fon.png";
import man_image from "../../public/images/stoimost-img.webp";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import { sendMail } from "../lib/mail";

import { MuiFileInput } from "mui-file-input";

const OfferRequest = () => {
    const [isContactsVisible, setContactsVisible] = useState<boolean>(false);

    const [userName, setUserName] = useState<string>("");
    const [userPhone, setUserPhone] = useState<string>("");
    const [userMail, setUserMail] = useState<string>("");
    const [mailError, setMailError] = useState<boolean>(false);
    const [uploadFieldError, setUploadFieldError] = useState<boolean>(false);
    const [files, setFiles] = useState<File[] | undefined>(undefined);

    const theme = useTheme();

    const isSmallScreen = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down("md")
    );

    const handleChangeFiles = (newFiles: File[]) => {
        setFiles(newFiles);
    };

    const handleSubmitSketch = async () => {
        if (!userMail) {
            setMailError(true);
            return;
        }

        if (!files || files.length === 0) {
            setUploadFieldError(true);
            return;
        }

        setMailError(false);
        setUploadFieldError(false);

        if (!files) return;

        //TODO CHeck for: 1.Too big files

        const formData = new FormData();

        files.forEach((file) => formData.append("files", file));

        const sendingResult = await sendMail({
            to: `iburykin071@gmail.com`,
            from: `info@тульские-окна.рф`,
            subject: "Получены эскизы на расчёт",
            html: ` <h1>Информация о клиенте:</h1>
                    <ul>
                        <li><span style="font-size: 1.2rem">Почта:&nbsp;${userMail}</span></li>
                        <li><span style="font-size: 1.2rem">Имя:&nbsp;${
                            userName ? userName : "Не указано"
                        }</span></li>
                        <li><span style="font-size: 1.2rem">Телефон:&nbsp;${
                            userPhone ? userPhone : "Не указан"
                        }</span></li>
                    </ul>`,
            filesData: formData,
        });

        console.log(sendingResult);

        setUserName("");
        setUserPhone("");
        setUserMail("");

        alert("success");
    };

    return (
        <Box sx={{ backgroundImage: `url(${background.src})` }}>
            <Container>
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    marginTop={6}
                >
                    <Grid container spacing={4} marginTop={1}>
                        <Grid item xs={12} sm={7}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} order={{ xs: 1 }}>
                                    <Box display={"flex"} alignItems={"center"}>
                                        <AttachEmailIcon color="primary" />
                                        <Typography
                                            fontSize={{
                                                xs: "1rem",
                                                md: "1.2rem",
                                                lg: "1.5rem",
                                            }}
                                            textAlign={"left"}
                                        >
                                            &nbsp;Отправьте заказ на расчёт
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant={"subtitle1"}
                                        textAlign={{
                                            xs: "justify",
                                            md: "left",
                                        }}
                                        fontWeight={"light"}
                                        fontSize={{
                                            xs: "0.9rem",
                                            md: "1rem",
                                        }}
                                    >
                                        Мы пришлём в ответ стоимость изделий и
                                        работ
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    rowGap={2}
                                    order={{ xs: 3, md: 2 }}
                                >
                                    <form onSubmit={handleSubmitSketch}>
                                        <Box>
                                            <StyledTextField
                                                fullWidth
                                                type="text"
                                                label={"Имя (не обязательно)"}
                                                value={userName}
                                                onChange={(event) =>
                                                    setUserName(
                                                        event.target.value
                                                    )
                                                }
                                                size={"small"}
                                            />
                                        </Box>
                                        <Box marginTop={2} width="100%">
                                            <MuiFileInput
                                                error={uploadFieldError}
                                                // label="Загрузить эскизы"
                                                required
                                                helperText="Нажмите, чтобы загрузить эскизы"
                                                value={files}
                                                size="small"
                                                variant="outlined"
                                                multiple
                                                onChange={handleChangeFiles}
                                                // label="Нажмите, чтобы загрузить эскизы"
                                                // InputLabelProps={{
                                                //     style: {
                                                //         textOverflow:
                                                //             "ellipsis",
                                                //         whiteSpace: "nowrap",
                                                //         overflow: "hidden",
                                                //         color: "red",
                                                //     },
                                                // }}
                                                sx={{
                                                    color: "success",
                                                    "& .MuiOutlinedInput-root":
                                                        {
                                                            backgroundColor:
                                                                "white",
                                                        },
                                                }}
                                                clearIconButtonProps={{
                                                    title: "Remove",
                                                    children: (
                                                        <CloseIcon fontSize="small" />
                                                    ),
                                                }}
                                                InputProps={{
                                                    inputProps: {},
                                                    startAdornment: (
                                                        <AttachFileIcon />
                                                    ),
                                                }}
                                            />
                                        </Box>
                                    </form>

                                    <Box marginTop={2}>
                                        <Button
                                            fullWidth
                                            type="submit"
                                            startIcon={<SendIcon />}
                                            variant="contained"
                                            onClick={handleSubmitSketch}
                                        >
                                            Отправить заявку
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    order={{ xs: 2, md: 3 }}
                                >
                                    <Box
                                        display={"flex"}
                                        flexDirection={"column"}
                                        alignContent={"center"}
                                    >
                                        <Box>
                                            <StyledTextField
                                                fullWidth
                                                type="tel"
                                                label={
                                                    "Телефон (не обязательно)"
                                                }
                                                value={userPhone}
                                                onChange={(event) =>
                                                    setUserPhone(
                                                        event.target.value
                                                    )
                                                }
                                                size={"small"}
                                            />
                                        </Box>

                                        <Box marginTop={2}>
                                            <StyledTextField
                                                fullWidth
                                                required
                                                type="email"
                                                error={mailError}
                                                label={"Электронная почта"}
                                                value={userMail}
                                                onChange={(event) =>
                                                    setUserMail(
                                                        event.target.value
                                                    )
                                                }
                                                size={"small"}
                                                helperText={
                                                    mailError &&
                                                    "Укажите, пожалуйста, вашу почту, чтобы мы могли ответить"
                                                }
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={5}>
                            {/* <Box display={"flex"} flexDirection={"column"}> */}
                            <Typography
                                fontSize={{
                                    xs: "1rem",
                                    md: "1.2rem",
                                    lg: "1.5rem",
                                }}
                                gutterBottom
                            >
                                Работаем для Вас вот уже более{" "}
                                {new Date().getFullYear() - 1998} лет!
                            </Typography>
                            <Typography
                                fontWeight={"light"}
                                align="justify"
                                fontSize={{
                                    xs: "0.9rem",
                                    md: "1rem",
                                }}
                                gutterBottom
                            >
                                Вы всегда можете пообщаться с нашим специалистом
                                или написать нам письмо (мы отвечаем на все
                                запросы):
                            </Typography>
                            <Button
                                fullWidth={isSmallScreen}
                                variant={"contained"}
                                color="success"
                                sx={{
                                    display: isContactsVisible
                                        ? "none"
                                        : "block",
                                }}
                                onClick={() => {
                                    setContactsVisible(!isContactsVisible);
                                }}
                            >
                                Показать телефон и почту
                            </Button>
                            <Box
                                sx={{
                                    display: isContactsVisible
                                        ? "block"
                                        : "none",
                                }}
                            >
                                <Typography
                                    fontSize={{
                                        xs: "1rem",
                                        sm: "1.2rem",
                                        md: "1.3rem",
                                        xl: "1.5rem",
                                    }}
                                    align="right"
                                >
                                    +7 (4872) 38-55-50
                                </Typography>
                                <Typography
                                    align="right"
                                    variant={"subtitle1"}
                                    fontSize={{
                                        xs: "0.8rem",
                                    }}
                                >
                                    Ежедневно с 9.00 до 19:00
                                </Typography>
                                <Typography
                                    align="right"
                                    variant={"subtitle1"}
                                    fontSize={{
                                        xs: "0.8rem",
                                    }}
                                >
                                    Почта:{" "}
                                    <a href="mailto:385391@mail.ru">
                                        385391@mail.ru
                                    </a>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box
                        marginTop={-5}
                        display={"flex"}
                        alignItems={"flex-end"}
                        sx={{ position: "relative" }}
                    >
                        <Image
                            src={man_image}
                            alt="worker image"
                            style={{
                                display: isSmallScreen ? "none" : "block",
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default OfferRequest;

const StyledTextField = styled(TextField)({
    color: "primary",
    "& .MuiOutlinedInput-root": {
        backgroundColor: "white",
    },
    variant: "outlined",
    label: {
        fontWeight: 300,
    },
});
