import { useState } from "react";
import { Card, CardContent, CardHeader, Button, TextField, Grid, Typography } from "@mui/material";

const colors = {
    darkBlue: "#05668D",
    mediumBlue: "#028090",
    teal: "#00A896",
    lightTeal: "#02C39A",
    white: "#FFFFFF",
};

export default function FinancialDashboard() {
    const [financialData, setFinancialData] = useState({
        ingresos: "",
        costos: "",
        gastos: "",
        activos: "",
        pasivos: "",
        capital: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        // Permitir solo números y punto decimal
        if (/^\d*\.?\d*$/.test(value)) {
        setFinancialData({ ...financialData, [e.target.name]: value });
        }
    };

    const ingresosNum = parseFloat(financialData.ingresos) || 0;
    const costosNum = parseFloat(financialData.costos) || 0;
    const gastosNum = parseFloat(financialData.gastos) || 0;
    const activosNum = parseFloat(financialData.activos) || 0;
    const pasivosNum = parseFloat(financialData.pasivos) || 0;
    const capitalNum = parseFloat(financialData.capital) || 0;

    const utilidadNeta = ingresosNum - costosNum - gastosNum;
    const razonCorriente = pasivosNum !== 0 ? (activosNum / pasivosNum).toFixed(2) : "N/A";
    const roe = capitalNum !== 0 ? ((utilidadNeta / capitalNum) * 100).toFixed(2) : "N/A";

    return (
        <Grid
        container
        spacing={4}
        padding={4}
        sx={{ minHeight: "100vh", backgroundColor: colors.white, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        justifyContent="center"
        >
        <Grid item xs={12} md={6} lg={4}>
            <Card
            elevation={8}
            sx={{
                borderRadius: 3,
                boxShadow: `0 8px 16px ${colors.teal}66`,
            }}
            >
            <CardHeader
                title="Estado de Resultados"
                sx={{
                backgroundColor: colors.darkBlue,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                }}
            />
            <CardContent>
                {["ingresos", "costos", "gastos"].map((field) => (
                <TextField
                    key={field}
                    fullWidth
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    value={financialData[field]}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    sx={{
                    "& label.Mui-focused": { color: colors.mediumBlue },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: colors.teal },
                        "&:hover fieldset": { borderColor: colors.mediumBlue },
                        "&.Mui-focused fieldset": { borderColor: colors.darkBlue },
                    },
                    }}
                    inputProps={{ inputMode: "decimal" }}
                />
                ))}
                <Typography
                sx={{
                    mt: 2,
                    fontWeight: "600",
                    fontSize: 18,
                    color: utilidadNeta < 0 ? "red" : colors.darkBlue,
                    textAlign: "center",
                }}
                >
                Utilidad Neta: ${utilidadNeta.toLocaleString()}
                </Typography>
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
            <Card
            elevation={8}
            sx={{
                borderRadius: 3,
                boxShadow: `0 8px 16px ${colors.teal}66`,
            }}
            >
            <CardHeader
                title="Balance General"
                sx={{
                backgroundColor: colors.darkBlue,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                }}
            />
            <CardContent>
                {["activos", "pasivos", "capital"].map((field) => (
                <TextField
                    key={field}
                    fullWidth
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    name={field}
                    value={financialData[field]}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    sx={{
                    "& label.Mui-focused": { color: colors.mediumBlue },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: colors.teal },
                        "&:hover fieldset": { borderColor: colors.mediumBlue },
                        "&.Mui-focused fieldset": { borderColor: colors.darkBlue },
                    },
                    }}
                    inputProps={{ inputMode: "decimal" }}
                />
                ))}
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
            <Card
            elevation={8}
            sx={{
                borderRadius: 3,
                boxShadow: `0 8px 16px ${colors.teal}66`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
            >
            <CardHeader
                title="Indicadores Financieros"
                sx={{
                backgroundColor: colors.darkBlue,
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                }}
            />
            <CardContent>
                <Typography
                variant="h6"
                sx={{ color: colors.mediumBlue, mb: 2, textAlign: "center", fontWeight: 600 }}
                >
                Razón Corriente
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 18, textAlign: "center", mb: 3 }}>
                {razonCorriente}
                </Typography>
                <Typography
                variant="h6"
                sx={{ color: colors.mediumBlue, mb: 2, textAlign: "center", fontWeight: 600 }}
                >
                ROE
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 18, textAlign: "center" }}>
                {roe}%
                </Typography>
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
            variant="contained"
            size="large"
            sx={{
                backgroundColor: colors.teal,
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                px: 6,
                py: 1.5,
                borderRadius: 3,
                boxShadow: `0 6px 12px ${colors.mediumBlue}88`,
                "&:hover": {
                backgroundColor: colors.darkBlue,
                boxShadow: `0 8px 16px ${colors.darkBlue}cc`,
                },
            }}
            onClick={() => console.log("Enviar datos al backend:", financialData)}
            >
            Enviar Datos
            </Button>
        </Grid>
        </Grid>
    );
}
