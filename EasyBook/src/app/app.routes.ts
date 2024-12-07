import { Routes } from '@angular/router';
import { MoviesComponent } from './home/movies/movies.component';
import { MovieComponent } from './shared/movie/movie.component';
import { TheaterComponent } from './home/theater/theater.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'movies',
        pathMatch: 'full'
    },{
        path:'movies',
        component:MoviesComponent
    },
    {
        path:'movies/:id',
        component:MovieComponent
    },{
        path:'theater',
        component:TheaterComponent
    }
];
