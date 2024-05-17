import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';
import { AnimeListComponent } from './anime-list/anime-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimeListComponent],
  exports: [AnimeListComponent]
})
export class AnimeModule { }
