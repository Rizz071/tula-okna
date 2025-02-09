"use client";

import { useState, useRef } from "react";
import {
    Grid2 as Grid,
    Stack,
    Typography,
    Box,
    InputAdornment,
    Button,
    TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SendIcon from "@mui/icons-material/Send";
import FileUploadOutlined from "@mui/icons-material/FileUploadOutlined";
import { sendMail } from "@/app/lib/mail";

const FormRequestOffer = () => {
    const [userName, setUserName] = useState<string>("");
    const [userPhone, setUserPhone] = useState<string>("");
    const [userMail, setUserMail] = useState<string>("");
    const [mailError, setMailError] = useState<boolean>(false);
    const [uploadFieldError, setUploadFieldError] = useState<boolean>(false);
    const [files, setFiles] = useState<File[] | undefined>(undefined);
    const [uploadErrorText, setUploadErrorText] = useState<string>("");

    const fileRef = useRef<HTMLInputElement | null>(null);

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

    return (
        <Grid container columnSpacing={2}>
            <Grid size={12}>
                <Stack
                    direction={"row"}
                    columnGap={1}
                    sx={{ alignItems: "center" }}
                >
                    <AttachEmailIcon color="primary" />
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "1.2rem",
                                md: "1.2rem",
                                lg: "1.5rem",
                            },
                            textAlign: "left",
                            m: 0,
                            fontWeight: 500,
                        }}
                    >
                        Отправьте заказ на расчёт!
                    </Typography>
                </Stack>
                <Typography
                    sx={{
                        textAlign: {
                            xs: "justify",
                            md: "left",
                        },
                        fontSize: {
                            xs: "0.9rem",
                            md: "1rem",
                        },
                        fontWeight: 400,
                        mt: 1,
                    }}
                >
                    Пришлём расчёт стоимости в течение рабочего дня. Не будем
                    беспокоить голосовыми звонками!
                </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <StyledTextField
                    fullWidth
                    type="text"
                    label={"Имя (не обязательно)"}
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                    size={"small"}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <StyledTextField
                    fullWidth
                    type="tel"
                    label={"Телефон (не обязательно)"}
                    value={userPhone}
                    onChange={(event) => setUserPhone(event.target.value)}
                    size={"small"}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <StyledTextField
                    fullWidth
                    required
                    type="email"
                    error={mailError}
                    label={"Электронная почта"}
                    value={userMail}
                    onChange={(event) => setUserMail(event.target.value)}
                    size={"small"}
                    helperText={
                        mailError &&
                        "Укажите, пожалуйста, вашу почту, чтобы мы могли ответить"
                    }
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Box width="100%">
                    <StyledTextField
                        inputRef={fileRef}
                        error={uploadFieldError}
                        onClick={() => fileRef.current?.click()}
                        fullWidth
                        type="file"
                        size="small"
                        slotProps={{
                            htmlInput: {
                                multiple: true,
                                style: {
                                    visibility: "hidden",
                                },
                            },
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FileUploadOutlined
                                            style={{
                                                fontWeight: 300,
                                                color: "black",
                                            }}
                                        />
                                        {!files ? (
                                            <Typography
                                                margin={0}
                                                color="black"
                                                fontWeight={400}
                                                fontSize={"medium"}
                                            >
                                                &nbsp;Приложить файлы
                                            </Typography>
                                        ) : files.length === 1 ? (
                                            <Typography
                                                fontSize={"1rem"}
                                                sx={{
                                                    m: 0,
                                                }}
                                            >
                                                &nbsp;
                                                {files[0].name.substring(0, 10)}
                                                ...
                                            </Typography>
                                        ) : files.length < 5 ? (
                                            <Typography
                                                fontSize={"1rem"}
                                                sx={{ m: 0 }}
                                            >
                                                &nbsp;
                                                {files.length} файла
                                            </Typography>
                                        ) : (
                                            <Typography
                                                fontSize={"1rem"}
                                                sx={{ m: 0 }}
                                            >
                                                &nbsp;
                                                {files.length} файлов
                                            </Typography>
                                        )}
                                    </InputAdornment>
                                ),
                            },
                        }}
                        onChange={() => {
                            const reference = fileRef.current;
                            if (!reference) return;

                            console.log(
                                "width: ",
                                (() => fileRef.current?.offsetWidth)()
                            );

                            const filesToSend: File[] = [
                                ...Array.from(reference.files || []),
                            ];

                            const totalSizeOfFiles = filesToSend.reduce(
                                (accumulator, currentValue) =>
                                    accumulator + currentValue.size / 1000000,
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
                        helperText={uploadFieldError && uploadErrorText}
                    />
                </Box>
            </Grid>

            <Grid size={12}>
                <Box marginTop={2}>
                    <Button
                        fullWidth
                        startIcon={<SendIcon />}
                        variant="contained"
                        onClick={handleSubmitSketch}
                    >
                        Отправить на расчёт
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

const StyledTextField = styled(TextField)({
    color: "primary",
    "& .MuiOutlinedInput-root": {
        backgroundColor: "white",
    },
    variant: "outlined",
    label: {
        color: "black",
        fontSize: "medium",
        fontWeight: 400,
    },
});

export default FormRequestOffer;
