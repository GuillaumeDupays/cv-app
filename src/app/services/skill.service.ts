import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Skill} from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url = 'http://localhost:1337';
  private skillCreated = new Subject<string>();

  constructor(private httpClient: HttpClient) { }

  getSkill(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.url}/cv-skills`);
  }

  addSkill(skill: Skill[]) {
    return this.httpClient.post<Skill[]>(`${this.url}/cv-skills`, skill);
  }

  deleteSkill(id: string) {
    return this.httpClient.delete(`${this.url}/cv-skills/${id}`);
  }

  dispatchpostCreated(id: string) {
    this.skillCreated.next(id);
  }
}

