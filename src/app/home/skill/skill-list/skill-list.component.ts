import { Component, OnInit } from '@angular/core';
import {Skill} from 'src/app/models/skill';
import {Observable} from 'rxjs';
import {SkillService} from 'src/app/services/skill.service';
import {Tile} from 'src/app/models/tile';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills: Skill[];
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data => {
      this.skills = data;
    });
  }

  getSkill() {

  }
}
