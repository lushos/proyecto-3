import { Component, OnInit } from '@angular/core';
import { tableService } from '../services/basic-table.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {
  listaUsers : any[]=[];
  constructor(private _tableService: tableService){
    _tableService.getUsers().subscribe((data:any)=>{
      this.listaUsers = data;
      console.log(data);
    }
    );
  }
  ngOnInit(): void {
  }

}
