import { Component, OnInit } from '@angular/core';
import {Tile} from 'src/app/models/tile';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {BioService} from 'src/app/services/bio.service';

@Component({
  selector: 'app-add-mini-bio',
  templateUrl: './add-mini-bio.component.html',
  styleUrls: ['./add-mini-bio.component.scss']
})
export class AddMiniBioComponent implements OnInit {
  form: FormGroup;
  tiles: Tile[] = [
    {text: 'Titre', cols: 1, rows: 1, txtPlaceholder: 'Ex. Bla bla bla', formControlName: 'presentation'}
  ]
  constructor(private fb: FormBuilder, private bioService : BioService) { }

  ngOnInit(): void {
    this.creationFormBio();
  }

  creationFormBio() {
    this.form = this.fb.group({
      titreBio: '',
      presentation: '',
    })
  }

  addBio(fgDirective: FormGroupDirective) {
    if(this.form.valid) {
      console.log(this.form.value);
      this.bioService
          .addBio(this.form.value)
          .subscribe(data=> this.handleSuccess(data, fgDirective))
    }
  }

  handleSuccess(data, fgDirective) {
    console.log('Nickel - Identité ajoutée en Bdd !', data);
    confirm('Votre Bio a bien été enregistrée !');
    this.form.reset();
    fgDirective.resetForm();
    this.bioService.dispatchpostCreated(data._id);
  }
}
