import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Piece } from '../model/piece';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  private url: string = "http://localhost:8080/api/pieces";

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Piece[]> {

    return this.httpClient.get<Piece[]>(this.url);
  }
}