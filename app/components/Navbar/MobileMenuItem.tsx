import { Stack, Box, Typography, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Link from "next/link";

interface Props {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    text: string;
    link: string;
}

const MobileMenuItem = ({ Icon, text, link }: Props) => {
    return (
        <Link
            href={link}
            style={{
                textDecoration: "none",
                color: "white",
                width: "100%",
            }}
        >
            <Stack
                direction={"row"}
                sx={{
                    width: "auto",
                    m: 2,
                }}
            >
                <Icon
                    sx={{
                        mr: 2,
                        alignSelf: "center",
                        height: "35px",
                        width: "auto",
                    }}
                />
                <Typography sx={{ alignSelf: "center", m: 0, p: 0 }}>
                    {text}
                </Typography>
            </Stack>
        </Link>
    );
};

export default MobileMenuItem;
