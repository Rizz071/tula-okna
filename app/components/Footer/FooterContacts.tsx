"use client";

import { useState } from "react";
import { Typography, Box } from "@mui/material";

import PhoneMailButton from "../PhoneMainButton";

const FooterContacts = () => {
    const [isContactsVisible, setContactsVisible] = useState<boolean>(false);

    return (
        <>
            <Typography
                sx={{
                    fontSize: { xs: "1.2rem", md: "1.2rem", lg: "1.5rem" },
                    m: 0,
                }}
            >
                <i>
                    Работаем для Вас вот уже более{" "}
                    {new Date().getFullYear() - 1998} лет
                </i>
            </Typography>
            <Typography
                sx={{
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    lineHeight: "1.5rem",
                }}
            >
                Звоните или пишите! Мы отвечаем на все запросы:
            </Typography>
            <Box sx={{ my: 1 }}>
                <PhoneMailButton
                    isContactsVisible={isContactsVisible}
                    setIsContactsVisible={setContactsVisible}
                />
            </Box>
        </>
    );
};

export default FooterContacts;
