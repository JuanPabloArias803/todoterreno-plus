import { IClient } from "@/interfaces/clientInterface";

export class apiClients{

    readonly domain="http://localhost:3001";

    async getAllClients():Promise<IClient[]|undefined> {
        try {
          const response: Response = await fetch(`${this.domain}/clients`);
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

    async getClientById(clientId:string):Promise<IClient|undefined> {
        try {
          const response: Response = await fetch(`${this.domain}/clients/${clientId}`);
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

    async deleteClient(clientId:string) {
        const options = {
          method: 'DELETE',
        };
        try {
          const response: Response = await fetch(`${this.domain}/clients/${clientId}`, options);
          if (!response.ok) {
            throw new Error('Network Fail');
          }
        } catch {
          alert('Error inesperado.');
        }
    }
      
    async createClient(client: IClient) {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(client),
        };
        try {
          const response: Response = await fetch(`${this.domain}/clients`, options);
          if (!response.ok) {
            throw new Error('Network Fail');
          }
        } catch {
          alert('Error inesperado.');
        }
      }
      
    async updateClient(clientId:string,client: IClient) {
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(client),
        };
        try {
          const response: Response = await fetch(`${this.domain}/clients/${client.id}`, options);
          if (!response.ok) {
            throw new Error('Network Fail');
          }
        } catch {
          alert('Error inesperado.');
        }
      }
}