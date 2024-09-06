'use client'

import { Navbar } from "@/components/Navbar";
import { Box, Button, TextField, Typography } from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';
import { useEffect, useState } from "react";
import { IClient } from "@/interfaces/clientInterface";
import { apiClients } from "@/services/apiClients";
import { useRouter, useSearchParams } from "next/navigation";

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

export default function EditClient() {

    const router=useRouter();
    const searchParams = useSearchParams();
    const clientId = searchParams.get('clientId')
    const [client, setClient] = useState<IClient>(initialState);

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setClient((prevClient) => ({
          ...prevClient,
          [e.target.name]: e.target.value
        }));
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await clientsMethods.updateClient(clientId!,client);
        alert(`Cliente ${client.name} actualizado satisfactoriamente`);
        router.push('/');
    };

    useEffect(() => {
        (async () => {
          const apiResponse=await clientsMethods.getClientById(clientId!);
          setClient(apiResponse);
        })();
      },[]);

    return (
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center'}}>
            <Navbar/>
            <Typography variant="h2" sx={{fontSize:'25px'}}>Crear Usuario</Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{display:'flex',flexDirection:'column',gap:'10px', alignItems:'center'}}>
                <TextField type="text" name='name' disabled defaultValue={client.name} label='Nombre' required size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <TextField type="text" name='identification' disabled defaultValue={client.identification} label='Identificación' required size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <TextField type="email" name='email' defaultValue={client.email} label='Correo' required size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <TextField type="tel" name='phoneEnterprise' defaultValue={client.phoneEnterprise} label='Teléfono' required size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <TextField type="text" name='address' defaultValue={client.address} label='Dirección' required size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <TextField type="text" name='pageWeb' defaultValue={client.pageWeb} label='Página web' size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <TextField type="text" name='twitter' defaultValue={client.twitter} label='Twitter' size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <TextField type="text" name='facebook' defaultValue={client.facebook} label='Facebook' size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <TextField type="text" name='instagram' defaultValue={client.instagram} label='Instagram' size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <TextField type="text" name='linkedin' defaultValue={client.linkedin} label='LinkedIn' size="small" onChange={handleChange} InputLabelProps={{ shrink: true }}></TextField>
                <Button type="submit" size="small" variant='contained' endIcon={<UpdateIcon />}>Actualizar</Button>
            </Box>
        </Box>
        
    );
}