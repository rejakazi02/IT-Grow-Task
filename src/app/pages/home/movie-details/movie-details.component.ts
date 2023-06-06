import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/common/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  id?: any;
  moviesData: any;
  movieDetails: any;
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');

      if (this.id) {
        this.getAllMoviesList();
      }
    });
  }

  getAllMoviesList() {
    this.movieService.getAllMoviesList().subscribe((res) => {
      this.moviesData = res;

      this.movieDetails = this.moviesData.find(
        (m: { id: any }) => m.id === this.id
      );
    });
  }

  getSafeUrl(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
