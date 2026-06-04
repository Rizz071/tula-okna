import {
    Container,
    Typography,
    Grid,
    Box,
    Stack,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import image_404 from "@/public/images/404_image.jpg";
import { Height } from "@mui/icons-material";

export default function NotFound() {
    return (
        <Container maxWidth={"lg"}>
            <Grid container size={12} sx={{ my: 10 }}>
                <Grid size={6}>
                    <Image
                        src={image_404}
                        alt={"Ошибка 404"}
                        width={image_404.width}
                        height={image_404.height}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Grid>
                <Grid size={6}>
                    <Stack
                        sx={{
                            height: "100%",
                            direction: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h2">
                            Страница не найдена
                        </Typography>
                        <Link href="/">
                            <Typography variant="body1">
                                Вернуться на главную страницу
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}
