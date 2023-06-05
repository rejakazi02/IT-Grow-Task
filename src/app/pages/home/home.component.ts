import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/common/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  moviesData: any;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getAllMoviesList();
  }

  getAllMoviesList() {
    this.movieService.getAllMoviesList().subscribe((res) => {
      this.moviesData = res;

      console.log('first,', this.moviesData);
      console.log('first,---', res);
    });
  }
}
