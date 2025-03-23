import { Box, Typography } from "@mui/material";

const PriceNotesBox = () => {
    return (
        <Box
            sx={{
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
            <Typography variant="body2" sx={{ ml: 2, lineHeight: "1.5rem" }}>
                <strong>1. Монтаж выполняется по ГОСТ</strong> (ПСУЛ снаружи +
                лента полнобутиловой пароизоляции изнутри)
                <br />
                2. При установке откосов из сэндвич-панели пароизоляция не
                обязательна, но при этом монтаж будет по ТУ, а не по ГОСТ.
                <br />
                3. Стеклопакет всегда 3 стекла энергосберегающий (2 покрытия).
                Для балконного блока при застеклённом балконе можно оставить
                стеклопакет в 2 стекла.
                <br />
                4. Одна москитная сетка всегда включена в стоимость (кроме
                балконных блоков).
                <br />
                5. Микропроветривание (&quot;зимнее проветривание&quot;) всегда
                включено в стоимость.
            </Typography>
        </Box>
    );
};

export default PriceNotesBox;
