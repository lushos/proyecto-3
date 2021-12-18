import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BlankComponent } from './blank/blank.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { RecetasComponent} from './recetas/recetas.component';
import { LibrosComponent } from './libros/libros.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'fontawesome', component: FontawesomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'index', component: IndexComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'error404', component: Error404Component },
  { path: 'map-google', component: MapGoogleComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'libros', component: LibrosComponent},
  { path: '**', pathMatch:'full', redirectTo:'error404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }