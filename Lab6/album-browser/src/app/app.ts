import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 1. Импортируем RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { // Проверьте, что здесь написано AppComponent
  title = 'album-browser';
}