import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent, MovieDetailsComponent],
  imports: [CommonModule, HomeRoutingModule, MatDialogModule],
})
export class HomeModule {}
