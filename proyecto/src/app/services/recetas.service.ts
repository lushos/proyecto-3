import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class recipesService {
  //Users: User[];

  constructor(private http: HttpClient) { 
    console.log("Servicio recetas listo...")
    //this.Users = []
  }

  //async getUsers(): Promise<Observable<User[]>> {
  //  const url = 'http://localhost:8091/users'
  //  let resp= await this.http.get(url).toPromise();
  // return of(this.Users);
  //}

  getRecipes(){
    return this.http.get('http://localhost:8091/recipes');
  }
}
