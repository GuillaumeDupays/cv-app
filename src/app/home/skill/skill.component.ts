import { Component, OnInit } from '@angular/core';
import {Tile} from 'src/app/models/tile';
import {skipUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {Skill} from 'src/app/models/skill';
import {SkillService} from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  form: FormGroup;

  tiles: Tile[] = [
    {text: 'Nom', cols: 1, rows: 1, txtPlaceholder: 'Ex. De Blob', formControlName: 'nom'},
    {text: 'Prénom', cols: 1, rows: 1, txtPlaceholder: 'Ex. Bob', formControlName: 'prenom'},
    {text: 'Age', cols: 1, rows: 1, txtPlaceholder: 'Ex. 101 ans', formControlName: 'age'},
    {text: 'Ville', cols: 1, rows: 1, txtPlaceholder: 'Ex. Manchester', formControlName: 'ville'},
    {text: 'N° de téléphone', cols: 1, rows: 1, txtPlaceholder: 'Ex. 0760052580', formControlName: 'tel'},
    {text: 'Email', cols: 1, rows: 1, txtPlaceholder: 'Ex. bob.leblob@gmail.com', formControlName: 'mail'}
  ];

  constructor(  private fb: FormBuilder, private skillService: SkillService) { }

  ngOnInit(): void {
    this.creationForm();
  }

  creationForm() {
    this.form = this.fb.group({
      nom: '',
      prenom: '',
      age: '',
      ville: '',
      tel: '',
      mail: ''
    });
  }

  addSkill(formDirective: FormGroupDirective) {
    if (this.form.valid) {
      console.log(this.form.value);
      this.skillService
          .addSkill(this.form.value)
          .subscribe(data=> this.handleSuccess(data, formDirective));
    }
  }


  deleteSkill(selectedOptions) {
    console.log('selected', selectedOptions);
  }

  handleSuccess(data, formDirective) {
    console.log('Nickel - skill ajoutée en Bdd !', data);
    this.form.reset();
    formDirective.resetForm();
    this.skillService.dispatchpostCreated(data._id);
  }

}
