import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './component/character-list/character-list.component';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';

const router: Routes = [];

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


