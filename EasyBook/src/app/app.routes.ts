import { Routes } from '@angular/router';
import { MoviesComponent } from './home/movies/movies.component';
import { MovieComponent } from './shared/movie/movie.component';
import { TheaterComponent } from './home/theater/theater.component';
import { ShowsComponent } from './home/shows/shows.component';
import { UserComponent } from './home/user/user.component';
import { AdminComponent } from './home/Admin/admin/admin.component';
import { AdminMovieComponent } from './home/Admin/admin-movie/admin-movie.component';
import { AdminShowsComponent } from './home/Admin/admin-shows/admin-shows.component';
import { SeatsComponent } from './shared/seats/seats.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'user',
        pathMatch: 'full'
    },{
        path:'user',
        component:UserComponent,
        children:[
            {
                path:'',
                redirectTo:'movies',
                pathMatch: 'full'
            },{
                path:'movies',
                component:MoviesComponent
            },{
                path:'movies/:id',
                component:MovieComponent
            },{
                path:'shows/:id',
                component:ShowsComponent
            },
            {
                path:'seats/:tid/:mid/:time',
                component:SeatsComponent
            }
        ]
    },
    {
        path:'admin',
        component:AdminComponent,
        children:[
            {
                path:'movie',
                component:AdminMovieComponent
            },{
                path:'shows',
                component:AdminShowsComponent
            },{
                path:'theater',
                component:TheaterComponent
            }
        ]
    
    },
    {
        path:'movies/:id',
        component:MovieComponent
    }
];
