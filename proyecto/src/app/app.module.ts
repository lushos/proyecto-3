import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Routas
import { AppRoutingModule } from './app-routing.module';
//Servicios
import { dashboardService } from './services/dashboard.service';
import { tableService } from './services/basic-table.service';
import { librosService } from './services/libros.service';
import { HttpClient,HttpClientModule } from '@angular/common/http';



//Componentes
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BlankComponent } from './blank/blank.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { RecetasComponent } from './recetas/recetas.component';
import { LibrosComponent } from './libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Error404Component,
    BasicTableComponent,
    BlankComponent,
    FontawesomeComponent,
    IndexComponent,
    ProfileComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    MapGoogleComponent,
    RecetasComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    dashboardService,
    tableService,
    librosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
