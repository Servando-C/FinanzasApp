import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const colors = {
    darkBlue: "#05668D",
    mediumBlue: "#028090",
    teal: "#00A896",
    white: "#FFFFFF",
};

export default function Navbar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: colors.darkBlue }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                    src="/Finance Logo.png" 
                    alt="Balance360 Logo" 
                    style={{ height: 50, width: 50, objectFit: "contain" }} 
                />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: "bold",
                        color: "white",
                        fontFamily: "'Nunito Sans', sans-serif"
                    }}>
                Balance 360
                </Typography>
            </Box>
            
            <Box>
            {["Iniciar Sesión", "Nosotros", "Contáctanos"].map((text) => (
                <Button
                key={text}
                sx={{
                    color: "white",
                    mx: 1,
                    fontWeight: "600",
                    textTransform: "none",
                    transition: "color 0.3s ease, border-bottom 0.3s ease",
                    borderBottom: "2px solid transparent",
                    fontFamily: "'Nunito Sans', sans-serif",
                    "&:hover": {
                    color: colors.white,
                    borderBottom: `2px solid ${colors.white}`,
                    backgroundColor: "transparent",
                    transform: "scale(1.05)"
                    },
                }}
                href={`#${text.toLowerCase().replace(/\s/g, "-")}`}
                >
                {text}
                </Button>
            ))}
            </Box>
        </Toolbar>
        </AppBar>
    );
}
