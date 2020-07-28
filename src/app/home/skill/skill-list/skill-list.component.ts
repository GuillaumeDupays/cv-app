import { Component, OnInit } from '@angular/core';
import {Identity} from 'src/app/models/identity';
import {Observable} from 'rxjs';
import {SkillService} from 'src/app/services/skill.service';
import {Tile} from 'src/app/models/tile';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  getSkill() {

  }
}
