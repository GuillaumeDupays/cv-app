import { Component, OnInit } from '@angular/core';
import {Identity} from 'src/app/models/identity';
import {SkillService} from 'src/app/services/skill.service';

@Component({
  selector: 'app-identity-list',
  templateUrl: './identity-list.component.html',
  styleUrls: ['./identity-list.component.scss']
})
export class IdentityListComponent implements OnInit {

  identity: Identity[];
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getIdentity().subscribe(data => {
      this.identity = data;
    });
  }
}
