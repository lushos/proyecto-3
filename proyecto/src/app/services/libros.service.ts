import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';


@Injectable()

//Servicios para basic-table

export class librosService {

    constructor(private http: HttpClient) { 
        console.log("Servicio libros listo...")
    }

    getLibros(){
        return this.http.get('http://localhost:8091/libros');
    }
}

