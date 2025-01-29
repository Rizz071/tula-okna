import { Toolbar, Slide, useScrollTrigger, Fade } from "@mui/material";
import Link from "next/link";
import Hamburger from "./Hamburger";
import logoImage from "@/public/images/logo_horiz_thin_mobile_1.svg";
import Image from "next/image";
import { IMainMenuItem } from "@/app/lib/types";

const ThinMobileMenu = ({ menuItems }: { menuItems: IMainMenuItem[] }) => {
    const trigger = useScrollTrigger();

    const THIN_MOBILE_HIGH_ROW_HEIGHT = "40px";

    return (
        <Slide in={trigger} timeout={{ enter: 1000, exit: 1000 }}>
            <Toolbar
                sx={{
                    position: "fixed",
                    width: "100%",
                    fontWeight: "light",
                    bgcolor: "#333",
                    color: "white",
                    height: THIN_MOBILE_HIGH_ROW_HEIGHT,
                    py: 1,
                }}
            >
                <Link href={"/"} style={{ width: "100%", height: "100%" }}>
                    <Image
                        src={logoImage}
                        width={0}
                        height={0}
                        style={{
                            width: "auto",
                            height: "100%",
                        }}
                        alt="Company logo"
                    />
                </Link>
                <Hamburger menuItems={menuItems} />
            </Toolbar>
        </Slide>
    );
};

export default ThinMobileMenu;
