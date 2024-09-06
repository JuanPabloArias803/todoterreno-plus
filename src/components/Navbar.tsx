import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

export const Navbar:React.FC=()=>{
    return (
        <AppBar position="static">
            <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant="h1" sx={{ fontSize: 20 }}>
                    TODOTERRENO
                </Typography>
                <Box sx={{display:'flex',gap:'10px'}}>
                    <Link href="/" underline="hover" sx={{color:'white'}}>
                        Home
                    </Link>
                    <Link href="/create-client" underline="hover" sx={{color:'white'}}>
                        Crear cliente
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}