import { Component, OnInit } from '@angular/core';
import { librosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  listaLibros : any[]=[];

  constructor(private _librosService: librosService) { 
    _librosService.getLibros().subscribe((data:any)=>{
      this.listaLibros = data;
      console.log(data);
    }
    );
  }

  ngOnInit(): void {
  }

}
