"use client";

import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Theme,
    Typography,
    InputAdornment,
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
import FileUploadOutlined from "@mui/icons-material/FileUploadOutlined";

import { useState, useRef } from "react";
import { sendMail } from "../lib/mail";
import { UploadFileOutlined } from "@mui/icons-material";

const OfferRequest = () => {
    const [isContactsVisible, setContactsVisible] = useState<boolean>(false);

    const [userName, setUserName] = useState<string>("");
    const [userPhone, setUserPhone] = useState<string>("");
    const [userMail, setUserMail] = useState<string>("");
    const [mailError, setMailError] = useState<boolean>(false);
    const [uploadFieldError, setUploadFieldError] = useState<boolean>(false);
    const [files, setFiles] = useState<File[] | undefined>(undefined);
    const [uploadErrorText, setUploadErrorText] = useState<string>("");

    const theme = useTheme();
    const fileRef = useRef<HTMLInputElement | null>(null);

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
        setFiles(undefined);

        alert("Файлы отправлены успешно");
    };

    //TODO Add text message field
    //TODO Add progress bar for uploading

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
                            <Grid container columnSpacing={2}>
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
                                            margin={0}
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
                                        ... и мы пришлём стоимость в течение 1-2
                                        дней!
                                    </Typography>
                                </Grid>

                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    rowGap={2}
                                    order={{ xs: 3, md: 2 }}
                                >
                                    {/* <form onSubmit={handleSubmitSketch}> */}
                                    <Box>
                                        <StyledTextField
                                            fullWidth
                                            type="text"
                                            label={"Имя (не обязательно)"}
                                            value={userName}
                                            onChange={(event) =>
                                                setUserName(event.target.value)
                                            }
                                            size={"small"}
                                        />
                                    </Box>
                                    <Box width="100%">
                                        <StyledTextField
                                            inputRef={fileRef}
                                            error={uploadFieldError}
                                            onClick={() =>
                                                fileRef.current?.click()
                                            }
                                            fullWidth
                                            type="file"
                                            size="small"
                                            inputProps={{
                                                multiple: true,
                                                style: {
                                                    visibility: "hidden",
                                                },
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <FileUploadOutlined />
                                                        {!files ? (
                                                            <Typography
                                                                sx={{ m: 0 }}
                                                            >
                                                                &nbsp;Приложить
                                                                файлы
                                                            </Typography>
                                                        ) : files.length ===
                                                          1 ? (
                                                            <Typography
                                                                fontSize={
                                                                    "1rem"
                                                                }
                                                                sx={{
                                                                    m: 0,
                                                                }}
                                                            >
                                                                &nbsp;
                                                                {files[0].name.substring(
                                                                    0,
                                                                    10
                                                                )}
                                                                ...
                                                            </Typography>
                                                        ) : files.length < 5 ? (
                                                            <Typography
                                                                fontSize={
                                                                    "1rem"
                                                                }
                                                                sx={{ m: 0 }}
                                                            >
                                                                &nbsp;
                                                                {
                                                                    files.length
                                                                }{" "}
                                                                файла
                                                            </Typography>
                                                        ) : (
                                                            <Typography
                                                                fontSize={
                                                                    "1rem"
                                                                }
                                                                sx={{ m: 0 }}
                                                            >
                                                                &nbsp;
                                                                {
                                                                    files.length
                                                                }{" "}
                                                                файлов
                                                            </Typography>
                                                        )}
                                                    </InputAdornment>
                                                ),
                                            }}
                                            onChange={() => {
                                                const reference =
                                                    fileRef.current;
                                                if (!reference) return;

                                                console.log(
                                                    "width: ",
                                                    (() =>
                                                        fileRef.current
                                                            ?.offsetWidth)()
                                                );

                                                const filesToSend: File[] = [
                                                    ...Array.from(
                                                        reference.files || []
                                                    ),
                                                ];

                                                const totalSizeOfFiles =
                                                    filesToSend.reduce(
                                                        (
                                                            accumulator,
                                                            currentValue
                                                        ) =>
                                                            accumulator +
                                                            currentValue.size /
                                                                1000000,
                                                        0
                                                    );

                                                if (totalSizeOfFiles > 20) {
                                                    setUploadFieldError(true);
                                                    setUploadErrorText(
                                                        "Размер файлов превышает допустимый в 20МБ. Пожалуйста, уменьшите размер файлов. Если это невозможно - отправьте ссылку в текстовой форме на эти файлы в облачном хранилище."
                                                    );
                                                    return;
                                                }

                                                setFiles(filesToSend);
                                                setUploadFieldError(false);
                                                setUploadErrorText("");
                                            }}
                                            helperText={
                                                uploadFieldError &&
                                                uploadErrorText
                                            }
                                        />
                                    </Box>
                                    <Box marginTop={2}>
                                        <Button
                                            fullWidth
                                            // type="submit"
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

                                        <Box>
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
                                margin={0}
                            >
                                Работаем для Вас вот уже более{" "}
                                {new Date().getFullYear() - 1998} лет
                            </Typography>
                            <Typography
                                fontSize={{
                                    xs: "0.9rem",
                                    md: "1rem",
                                }}
                                lineHeight={"1.5rem"}
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
                                    mt: 2,
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
