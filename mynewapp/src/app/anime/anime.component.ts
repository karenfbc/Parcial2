import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { dataAnimes } from './dataAnime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  animes: Array<Anime> = [];
  constructor() { }
  getAnimeList(): Array<Anime> {
    return dataAnimes;
  }
  ngOnInit() {
    this.animes = this.getAnimeList();
  }

}
