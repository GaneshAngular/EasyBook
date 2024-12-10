import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowsComponent } from '../../home/shows/shows.component';
import { ShowsService } from '../../core/services/shows/shows.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seats',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './seats.component.html',
  styleUrl: './seats.component.css'
})
export class SeatsComponent {

show:any
selectedSeats:any[]=[]
       constructor(private router:Router,private showsService:ShowsService){
           const url= this.router.url.split('/')
           const tid=url[url.length-3]
           const mid=url[url.length-2]
           const time=url[url.length-1]
           
           this.showsService.getShowByTimeAndMovieAndTheater(`book/${tid}/${mid}/${time}`).subscribe(show=>{
            this.show=show
            console.log(this.show);
           
          })
            
       }


       isSeatFilled(row: string, seat: string): boolean {
        const seatId = row + seat;  // Generate seat ID (e.g., 'A1', 'B2')
        return this.show[0].seatsFilled.includes(seatId);  // Check if the seat is in the filled list
      }
    
      // Toggle seat between filled and unfilled
      toggleSeat(seatId: string) {
               document.getElementById(seatId)?.classList.toggle('selected')
               if(this.selectedSeats.includes(seatId))
                {
                  this.selectedSeats=this.selectedSeats.filter(s=>s!=seatId)
                }else{
                  this.selectedSeats.push(seatId)
                }
        // const seatIndex = this.show[0].seatsFilled.indexOf(seatId);
        // if (seatIndex > -1) {
        //   // Remove the seat from seatsFilled if it's already occupied
        //   this.show[0].seatsFilled.splice(seatIndex, 1);

        // } else {
        //   // Add the seat to seatsFilled if it's not occupied
        //   this.show[0].seatsFilled.push(seatId);
        // }
      }

      confirmSeats(){
          
         this.showsService.updateShow(this.show[0]._id,{"seatsFilled":this.show[0].seatsFilled.concat(this.selectedSeats)}).subscribe(res=>{
         alert("Seats booked successfully")
         location.reload()
         })
      }
}
