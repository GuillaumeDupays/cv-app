import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Bio} from '../models/bio';


@Injectable({
  providedIn: 'root'
})
export class BioService {
  url = 'http://localhost:1337';
  private bioCreated = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  addBio(bio: Bio[]) {
    return this.httpClient.post<Bio[]>(`${this.url}/bios`, bio);
  }

  dispatchpostCreated(id: string) {
    this.bioCreated.next(id);
  }
}
