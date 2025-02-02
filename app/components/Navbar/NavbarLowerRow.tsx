import { IMainMenuItem } from "@/app/lib/types";
import { Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const NavbarLowerRow = ({ menuItems }: { menuItems: IMainMenuItem[] }) => {
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
                    >
                        <Typography
                            fontSize={{
                                sm: "0.8rem",
                                md: "1.0rem",
                                lg: "1.1rem",
                            }}
                            sx={{
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
