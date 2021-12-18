import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable()

//Servicio dashboard

export class dashboardService {

   
    constructor(private http: HttpClient) { 
        console.log("Servicio dashboard listo...")
        //this.Users = []
    }
    

    getCharlas(){
        return this.http.get('http://localhost:8091/charlas');
    }

    getVentas(){
        return this.http.get('http://localhost:8091/ventas');
    }

    getComentarios(){
        return this.http.get('http://localhost:8091/comentarios');
    }
}


