import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { InfoService } from './services/info.service';
import { CinemaService } from './services/cinema.service';

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './pages/my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './pages/my-movie-component/my-movie-component.component';


const myRoutes: Routes = [
    // "path" is the URL
    { path: '', component: MyHomeComponentComponent }, // -> /
    { path: 'movie/:id', component: MyMovieComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [InfoService, CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
