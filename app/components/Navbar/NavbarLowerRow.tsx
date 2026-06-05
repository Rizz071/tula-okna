"use client"; // Обязательно добавляем директиву, так как появляется интерактивный onClick

import { IMainMenuItem } from "@/app/lib/types";
import { Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { reachMetrikaGoal } from "@/app/lib/metrika";

const NavbarLowerRow = ({ menuItems }: { menuItems: IMainMenuItem[] }) => {
    // Функция перехвата клика
    const handleItemClick = (item: IMainMenuItem) => {
        // Проверяем, что кликнули именно по контактам
        const isContacts = item.name.toLowerCase() === "контакты";

        if (isContacts) {
            // 2. Вызываем цель одной чистой строчкой
            reachMetrikaGoal("click_contacts");
        }
    };

    return (
        <Toolbar
            sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "row",
                justifyContent: "space-between",
                letterSpacing: { sm: ".2rem" },
                textAlign: "center",
                gap: { sm: 1, md: 4 },
                mb: { sm: 1, md: 2 },
            }}
        >
            {menuItems.map((item, index) => {
                return (
                    <Link
                        href={item.link}
                        style={{ textDecoration: "none" }}
                        key={index}
                        onClick={() => handleItemClick(item)} // Вешаем обработчик события клика счётчика Метрики
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    sm: "0.8rem",
                                    md: "1.0rem",
                                    lg: "1.1rem",
                                },
                                fontWeight: 400,
                                color: "black",
                                letterSpacing: { md: "3px" },
                                textTransform: "uppercase",
                            }}
                        >
                            {item.name}
                        </Typography>
                    </Link>
                );
            })}
        </Toolbar>
    );
};

export default NavbarLowerRow;
