import { ICity } from "@/interfaces/countryInterface";

export class apiCountries{

    readonly domain="http://localhost:3001";

    async getCityById(cityId:string):Promise<ICity|undefined> {
        try {
          const response: Response = await fetch(`${this.domain}/cities/${cityId}`);
          const data = await response.json();
          if (!data) {
            throw new Error('Network Fail');
          } else {
            return data;
          }
        } catch {
          alert('Error inesperado.');
        }
    }
}