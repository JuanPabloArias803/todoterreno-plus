'use client'

import { Navbar } from "@/components/Navbar";
import { Box, Button, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { IClient } from "@/interfaces/clientInterface";
import { apiClients } from "@/services/apiClients";
import { useRouter } from "next/navigation";

const clientsMethods=new apiClients;

const initialState = {
    identification: '',
    name: '',
    email: '',
    phoneEnterprise: '',
    pageWeb: '',
    idCity: '',
    city:'',
    address: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    facebook: '' 
};

export default function CreateClient() {

    const router=useRouter();
    const [client, setClient] = useState<IClient>(initialState);

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setClient((prevClient) => ({
          ...prevClient,
          [e.target.name]: e.target.value
        }));
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await clientsMethods.createClient(client);
        alert(`Cliente ${client.name} creado satisfactoriamente`);
        router.push('/');
    };

    return (
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center'}}>
            <Navbar/>
            <Typography variant="h2" sx={{fontSize:'25px'}}>Crear Usuario</Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{display:'flex',flexDirection:'column',gap:'10px', alignItems:'center'}}>
                <TextField type="text" name='name' label='Nombre' required size="small" onChange={handleChange}></TextField>
                <TextField type="text" name='identification' label='Identificación' required size="small" onChange={handleChange}></TextField>
                <TextField type="email" name='email' label='Correo' required size="small" onChange={handleChange}></TextField>
                <TextField type="tel" name='phoneEnterprise' label='Teléfono' required size="small" onChange={handleChange}></TextField>
                <TextField type="text" name='address' label='Dirección' required size="small" onChange={handleChange}></TextField>
                <TextField type="url" name='pageWeb' label='Página web' size="small" onChange={handleChange}></TextField>
                <TextField type="text" name='twitter' label='Twitter' size="small" onChange={handleChange}></TextField>
                <TextField type="text" name='facebook' label='Facebook' size="small" onChange={handleChange}></TextField>
                <TextField type="text" name='instagram' label='Instagram' size="small" onChange={handleChange}></TextField>
                <TextField type="text" name='linkedin' label='LinkedIn' size="small" onChange={handleChange}></TextField>
                <Button type="submit" size="small" variant='contained' endIcon={<AddIcon />}>Crear</Button>
            </Box>
        </Box>
        
    );
}