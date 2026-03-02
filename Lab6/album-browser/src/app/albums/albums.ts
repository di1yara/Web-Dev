import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Добавить это для *ngIf и *ngFor
import { RouterModule } from '@angular/router'; // Добавить это для [routerLink]
import { AlbumService } from '../services/album';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule], // Обязательно добавьте сюда!
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading: boolean = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}