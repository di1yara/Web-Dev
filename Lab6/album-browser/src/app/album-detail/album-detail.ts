import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AlbumService } from '../services/album';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetail implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute, 
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
    });
  }

  saveTitle(): void {
    
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Изменения сохранены (имитация)');
    });
  }
}