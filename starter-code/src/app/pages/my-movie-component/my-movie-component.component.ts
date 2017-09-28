import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movieInfo: any = {};

  constructor(
    private cinemaThang: CinemaService,
    private activatedThang: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe(
      (params) => {
        const id = Number(params.id);
        this.movieInfo = this.cinemaThang.getMovie(id);
      }
    )
  }

}
