import { Component, OnInit } from '@angular/core';
import {dashboardService } from '../services/dashboard.service'; //import charla

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listaComentarios : any[] = [];
  listaCharlas: any[] = [];
  listaVentas: any[] = [];

  constructor(private _dashboardService: dashboardService) { 
    
    _dashboardService.getCharlas().subscribe((data:any)=>{
      this.listaCharlas = data;
      console.log(data);
    }
    );
    _dashboardService.getVentas().subscribe((data:any)=>{
      this.listaVentas = data;
      console.log(data);
    }
    );
    _dashboardService.getComentarios().subscribe((data:any)=>{
      this.listaComentarios = data;
      console.log(data);
    }
    );
    };
  

  ngOnInit(): void {
  }

}
