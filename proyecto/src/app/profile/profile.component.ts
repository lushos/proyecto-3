import { Component, OnInit } from '@angular/core';
import { profileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  listaProfiles:any [] = [];

  constructor(private _profileService: profileService) {
    _profileService.getProfiles().subscribe((data:any)=>{
      this.listaProfiles = data;
      console.log(data);
    }
    )
  }

 

  ngOnInit(): void {
    
  }

}
