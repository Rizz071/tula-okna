import { Typography } from "@mui/material";

const ResponsiveHeader_H1 = ({ text }: { text: string }) => {
    return (
        <Typography
            variant={"h1"}
            sx={{
                typography: { xs: "h2", md: "h1" },
                textAlign: { xs: "center" },
            }}
        >
            {text}
        </Typography>
    );
};

export default ResponsiveHeader_H1;
