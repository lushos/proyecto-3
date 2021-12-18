import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';


@Injectable()

//Servicios para basic-table

export class tableService {

    constructor(private http: HttpClient) { 
        console.log("Servicio dashboard listo...")
    }

    getUsers(){
        return this.http.get('http://localhost:8091/users');
    }
}

