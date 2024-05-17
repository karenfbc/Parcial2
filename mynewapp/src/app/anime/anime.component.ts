import { Component, OnInit } from '@angular/core';
import { Anime } from './anime';
import { dataAnimes } from './dataAnime';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  constructor(private animeService: AnimeService) { }
  animes: Array<Anime> = [];

  getAnimes() {
    this.animeService.getAnimes().subscribe(animes => {
      this.animes = animes;
    });
  }

  ngOnInit() {
   this.getAnimes();
  }

}
