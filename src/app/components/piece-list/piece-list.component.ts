import { Component, OnInit } from '@angular/core';
import { PieceService } from 'src/app/services/piece.service';
import { Piece } from 'src/app/model/piece';

@Component({
  selector: 'app-piece-list',
  templateUrl: './piece-list.component.html',
  styleUrls: ['./piece-list.component.css']
})
export class PieceListComponent implements OnInit {

  private pieces: Piece[];

  constructor(private pieceService: PieceService) { }

  ngOnInit() {


    this.pieceService.findAll().subscribe(pieces => {
      this.pieces = pieces;
    })
  }
}
