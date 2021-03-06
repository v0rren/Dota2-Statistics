import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {HttpClientModule} from "@angular/common/http";
import {FilterBarComponent} from "./components/filter-bar/filter-bar.component";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { MatOptionModule} from "@angular/material/core";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MatchupComponent } from './matchup/matchup.component';
import {RouterModule} from "@angular/router";
import { WinrateHeroesComponent } from './winrate-heroes/winrate-heroes.component';
import { MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {NgxSpinnerModule} from "ngx-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { TeamMatcherComponent } from './components/team-matcher/team-matcher.component';
import { HeroesSuggestionComponent } from './components/heroes-suggestion/heroes-suggestion.component';
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    FilterBarComponent,
    MatchupComponent,
    WinrateHeroesComponent,
    TeamMatcherComponent,
    HeroesSuggestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    NgxSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
