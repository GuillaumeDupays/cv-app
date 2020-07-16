import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component';
import {SkillComponent} from 'src/app/home/skill/skill.component';
import {MiniBioComponent} from 'src/app/home/mini-bio/mini-bio.component';

const route : Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'mini-bio', component: MiniBioComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
