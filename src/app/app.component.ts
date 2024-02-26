
import { Component } from '@angular/core';
import { loadingService } from './core/service/loading.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
 export class AppComponent {
  title = 'proyectoFinal';

  isLoading = false;
 constructor( public LoadingService: loadingService)  {
    this.LoadingService.isLoading$.subscribe({
      next:(v)=> (
        this.isLoading = v),
    });
  }
}
