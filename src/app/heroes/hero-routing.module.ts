import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroHomeComponent } from './pages/hero-home/hero-home.component';

const routes: Routes = [
  {
    path: '',
    component: HeroHomeComponent,  // Ahora las ruts que estan en children son hijas de este componente y hay que hacer un route-outlet en el html del home para renderizarlas
    children: [
      {
        path: 'list',
        component: HeroListComponent
      },
      {
        path: 'add',
        component: AddHeroComponent
      },
      {
        path: 'update',
        component: AddHeroComponent
      },
      {
        path: 'search',
        component: SearchHeroComponent
      },
      {
        path: ':id',
        component: HeroComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }
