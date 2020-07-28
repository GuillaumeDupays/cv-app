import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Identity} from 'src/app/models/identity';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url = 'http://localhost:1337';
  private skillCreated = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  getIdentity(): Observable<Identity[]> {
    return this.httpClient.get<Identity[]>(`${this.url}/identities`);
  }

  addIdendity(skill: Identity[]) {
    return this.httpClient.post<Identity[]>(`${this.url}/identities`, skill);
  }

  deleteSkill(id: string) {
    return this.httpClient.delete(`${this.url}/cv-skills/${id}`);
  }

  dispatchpostCreated(id: string) {
    this.skillCreated.next(id);
  }
}

