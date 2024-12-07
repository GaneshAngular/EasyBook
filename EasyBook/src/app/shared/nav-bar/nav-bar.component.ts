import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import city from '../../core/constants/cities';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
       
  cities: string[] =city
   city:string =''
  constructor(){
   
  }

  setCity(){
      localStorage.setItem('city',this.city)
    }
}
