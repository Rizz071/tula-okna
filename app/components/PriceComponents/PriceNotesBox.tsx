import { Box, Typography } from "@mui/material";

const PriceNotesBox = () => {
    const notesText = (
        <>
            {" "}
            <strong>1. Монтаж выполняется по ГОСТ</strong> (ПСУЛ снаружи + лента
            полнобутиловой пароизоляции изнутри)
            <br />
            2. При установке откосов из сэндвич-панели пароизоляция не
            обязательна, но при этом монтаж будет по ТУ, а не по ГОСТ.
            <br />
            3. Стеклопакет всегда 3 стекла энергосберегающий (2 покрытия). Для
            балконного блока при застеклённом балконе можно оставить стеклопакет
            в 2 стекла.
            <br />
            4. Одна москитная сетка всегда включена в стоимость (кроме балконных
            блоков).
            <br />
            5. Микропроветривание (&quot;зимнее проветривание&quot;) всегда
            включено в стоимость.
        </>
    );

    return (
        <>
            <Box
                sx={{
                    display: "block",
                    displayPrint: "none",
                    m: 0,
                    p: 2,
                    bgcolor: "lightyellow",
                    border: "1px solid black",
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 500,
                        lineHeight: "1.5rem",
                    }}
                >
                    ПРИМЕЧАНИЯ:
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ ml: 2, lineHeight: "1.5rem" }}
                >
                    {notesText}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "none",
                    displayPrint: "block",
                    m: 0,
                    p: 0,
                    bgcolor: "lightyellow",
                    border: "1px solid black",
                    maxHeight: "300px",
                }}
            >
                <Typography
                    sx={{
                        p: 1,
                        m: 0,
                        typography: "subtitle1",
                        fontWeight: 400,
                        lineHeight: "1.2rem",
                    }}
                >
                    ПРИМЕЧАНИЯ:
                </Typography>
                <Typography
                    sx={{
                        m: 0,
                        ml: 2,
                        p: 1,
                        pb: 1,
                        typography: "subtitle2",
                        fontSize: "x-small",
                        lineHeight: "1rem",
                        fontWeight: 300,
                    }}
                >
                    {notesText}
                </Typography>
            </Box>
        </>
    );
};

export default PriceNotesBox;
