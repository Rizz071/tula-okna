import { Typography } from "@mui/material";

const ResponsiveHeader_H2 = ({ text }: { text: string }) => {
    return (
        <Typography
            variant={"h2"}
            sx={{
                typography: { xs: "h3", md: "h2" },
                mt: 0,
                textAlign: { xs: "center", sm: "left" },
            }}
        >
            {text}
        </Typography>
    );
};

export default ResponsiveHeader_H2;
