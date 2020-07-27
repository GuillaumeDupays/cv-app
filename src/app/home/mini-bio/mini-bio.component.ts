import { Component, OnInit } from '@angular/core';
import {Tile} from 'src/app/models/tile';
import {SkillComponent} from 'src/app/home/skill/skill.component';
import {Bio} from 'src/app/models/bio';

@Component({
  selector: 'app-mini-bio',
  templateUrl: './mini-bio.component.html',
  styleUrls: ['./mini-bio.component.scss']
})
export class MiniBioComponent implements OnInit {
  bio : Bio[] = [
    {titreBio:'Bio', txtBio:'Je m\'appelle Guillaume et j\'ai des compétences de ouf !'}
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
