import React from "react";
import { Box, Typography, Link } from "@mui/material";

const colors = {
    darkBlue: "#05668D",
    mediumBlue: "#028090",
    teal: "#00A896",
    white: "#FFFFFF",
};

export default function Footer() {
    return (
        <Box
        component="footer"
        sx={{
            backgroundColor: colors.darkBlue,
            color: colors.white,
            py: 3,
            px: 2,
            mt: "auto",
            textAlign: "center",
            fontSize: 14,
        }}
        >
        <Typography>
            © {new Date().getFullYear()} Balance360. Todos los derechos reservados.
        </Typography>
        <Typography sx={{ mt: 1 }}>
            <Link href="#nosotros" sx={{ color: colors.white, mx: 1, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            Nosotros
            </Link>
            |
            <Link href="#contactanos" sx={{ color: colors.white, mx: 1, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            Contáctanos
            </Link>
        </Typography>
        </Box>
    );
}
