'use client'

import { apiClients } from "@/services/apiClients";
import { useEffect, useState } from "react";
import { IClient } from '@/interfaces/clientInterface';
import {ClientCard} from "@/components/ClientCard";
import { apiCountries } from "@/services/apiCountries";
import { Navbar } from "@/components/Navbar";
import { Box } from "@mui/material";

const clientsMethods=new apiClients;
const countryMethods=new apiCountries;

export default function Home() {

  const [clientsArray,setArray]=useState<IClient[]|undefined>([]);

  useEffect(() => {
    (async () => {
      const apiResponse=await clientsMethods.getAllClients();
      for (const element of apiResponse!) {
        const city = await countryMethods.getCityById(element.idCity);
        element["city"] = city!.name;
      }
      setArray(apiResponse);
    })();
  },[]);

  return (
    <main>
      <Navbar/>
      <Box component="section" sx={{padding:'10px',display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'center'}}>
        {clientsArray?.map((item)=>{
          return (
            <ClientCard key={item.id} id={item.id} name={item.name} email={item.email} phone={item.phoneEnterprise} city={item.city} address={item.address}></ClientCard>
          );
        })}
      </Box>
    </main>
  );
}
