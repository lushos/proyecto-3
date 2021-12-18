import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class profileService {
  //Users: User[];

  constructor(private http: HttpClient) { 
    console.log("Servicio profile listo...")
    //this.Users = []
  }

  //async getUsers(): Promise<Observable<User[]>> {
  //  const url = 'http://localhost:8091/users'
  //  let resp= await this.http.get(url).toPromise();
  // return of(this.Users);
  //}

  getProfiles(){
    return this.http.get('http://localhost:8091/profiles');
  }
}
