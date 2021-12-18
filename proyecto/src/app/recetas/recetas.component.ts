import { Component, OnInit } from '@angular/core';
import {recipesService } from '../services/recetas.service';
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  listaRecipes : any[] = [];

  constructor(private _recipesService: recipesService) { 
    _recipesService.getRecipes().subscribe((data:any)=>{
      this.listaRecipes = data;
      console.log(data);
    }
    );
  }

  ngOnInit(): void {
  }

}
