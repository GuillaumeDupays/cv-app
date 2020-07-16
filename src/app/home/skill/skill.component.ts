import { Component, OnInit } from '@angular/core';
import {Tile} from 'src/app/models/tile';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Titre du C.V', cols: 1, rows: 1, txtPlaceholder: 'Ex. Développeur'},
    {text: 'Nom', cols: 1, rows: 1, txtPlaceholder: 'Ex. De Blob'},
    {text: 'Prénom', cols: 1, rows: 1, txtPlaceholder: 'Ex. Bob'},
    {text: 'Age', cols: 1, rows: 1, txtPlaceholder: 'Ex. 101 ans'},
    {text: 'Ville', cols: 1, rows: 1, txtPlaceholder: 'Ex. Manchester'},
    {text: 'N° de téléphone', cols: 1, rows: 1, txtPlaceholder: 'Ex. 0760052580'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
