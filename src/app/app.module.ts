import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule} from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillComponent } from './home/skill/skill.component';
import { MiniBioComponent } from './home/mini-bio/mini-bio.component';
import { SkillListComponent } from './home/skill/skill-list/skill-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { AddMiniBioComponent } from './home/mini-bio/add-mini-bio/add-mini-bio.component';
import { IdentityComponent } from './home/identity/identity.component';
import { IdentityListComponent } from './home/identity/identity-list/identity-list.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    MiniBioComponent,
    SkillListComponent,
    AddMiniBioComponent,
    IdentityComponent,
    IdentityListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatTabsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
