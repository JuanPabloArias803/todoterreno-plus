import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { apiClients } from '@/services/apiClients';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/navigation';
import { CardProps } from './ComponentsInterfaces';

const clientsMethods=new apiClients;

export const ClientCard:React.FC<CardProps>=({id,name,email,phone,city,address})=>{
    
    const router=useRouter();

    async function handleDelete(clientId:string): Promise<void>{
        await clientsMethods.deleteClient(clientId);
        window.location.reload();
    }

    return (
        <Card variant='outlined' sx={{ width: '300px',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                {name}
                </Typography>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {city+" "+address}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{"Correo: "+email+" Número:"+phone}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' startIcon={<DeleteIcon />} onClick={()=>{handleDelete(id!)}}>Eliminar</Button>
                <Button size="small" variant='contained' startIcon={<EditIcon />} onClick={()=>router.push(`/edit-client?clientId=${id}`)}>Actualizar</Button>
            </CardActions>
        </Card>
    );
}