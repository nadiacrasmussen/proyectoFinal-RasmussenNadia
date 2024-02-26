import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { loadingService } from '../../../../core/service/loading.service';


@Component({
  selector: 'app-pages-details',
  templateUrl: './pages-details.component.html',
  styleUrl: './pages-details.component.scss'
})
export class PagesDetailsComponent {
  constructor( private loadingService :loadingService){

    this.getUsuarios();
      }
      getUsuarios() : void{
        const obs = new Observable((Subscriber)=>{
          setTimeout(()=>{ Subscriber.next(['nadia,micaela,sofia'])
        Subscriber.complete();
        },2000)
          });

    this.loadingService.setIsLoading(true);
         obs.subscribe({
          next: (usuarios) => console.log(usuarios),
          complete:()=>{
            this.loadingService.setIsLoading(false)
          },
         })

}}
