import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  
  getAlbums(): Observable<Album[]> { 
    return this.http.get<Album[]>(this.baseUrl); 
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/${id}`);
  }

 
  updateAlbum(album: Album): Observable<Album> { 
    return this.http.put<Album>(`${this.baseUrl}/${album.id}`, album); 
  }

 
  
  deleteAlbum(id: number): Observable<void> { 
    return this.http.delete<void>(`${this.baseUrl}/${id}`); 
  }
}