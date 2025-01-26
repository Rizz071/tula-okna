import { Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const NavbarLowerRow = () => {
    return (
        <Toolbar
            sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "row",
                justifyContent: "space-between",
                letterSpacing: { sm: ".2rem" },
                textAlign: "center",
                gap: { sm: 2, md: 4 },
                mb: 2,
            }}
        >
            <Link href={"/okna"} style={{ textDecoration: "none" }}>
                <Typography fontWeight={400} color="black" letterSpacing={1.5}>
                    ОКНА
                </Typography>
            </Link>
            <Typography fontWeight={400} color="black" letterSpacing={1.5}>
                ДВЕРИ
            </Typography>
            <Link href={"/balkony"} style={{ textDecoration: "none" }}>
                <Typography fontWeight={400} color="black" letterSpacing={1.5}>
                    БАЛКОНЫ
                </Typography>
            </Link>
            <Typography fontWeight={400} color="black" letterSpacing={1.5}>
                ПОРТАЛЫ
            </Typography>
            <Typography fontWeight={400} color="black" letterSpacing={1.5}>
                ФАСАДНОЕ ОСТЕКЛЕНИЕ
            </Typography>
            <Typography fontWeight={400} color="black">
                ПОРТФОЛИО
            </Typography>
        </Toolbar>
    );
};

export default NavbarLowerRow;
