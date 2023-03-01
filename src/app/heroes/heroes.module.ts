import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroHomeComponent } from './pages/hero-home/hero-home.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroRoutingModule } from './hero-routing.module';



@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HeroComponent,
    HeroHomeComponent,
    HeroListComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule
  ]
})
export class HeroesModule { }
