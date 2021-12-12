import { Component, OnInit } from '@angular/core';
import { RestUrlService } from '../../rest-url/rest-url.service';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

  export class MoviesComponent implements OnInit {
    itemsPerSlide = 3;
    itemsPerSlideBanner = 1;
    singleSlideOffset = false;
    noWrap = false;
    selectedSrc:any='';
    slidesChangeMessage:any = '';
    showMovieScreen:boolean=false;
    activeSlideIndex = 0;
    options:any={};
    slides = [
      {image: 'assets/img/slider.png'},
      {image: 'assets/img/slider2.png'},
      {image: 'assets/img/slider3.png'},
      {image: 'assets/img/slider.png'},
      {image: 'assets/img/slider2.png'},
      {image: 'assets/img/slider3.png'},
      {image: 'assets/img/slider.png'},
      {image: 'assets/img/slider2.png'},
      {image: 'assets/img/slider3.png'}
    ];
   
    onSlideRangeChange(indexes: number[]): void {
      this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
    }
    latestMovieList:any=[];
    constructor(private route: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
      if(localStorage.getItem('userLoggedIn') == undefined || (localStorage.getItem('userLoggedIn') != undefined && localStorage.getItem('userLoggedIn') == 'false')){
        this.router.navigate(['index']);
      }
    }
  
    showMovie(src){
      this.options={ autoplay: true, controls: true, sources: [{ src: src, type: 'application/x-mpegURL' }]}
      this.showMovieScreen=true;
    }
  
    cancel(event){
  if(event=='false'){
   this.showMovieScreen=false;
    }
  }
  
  navigateTopage(page){
    this.router.navigate([page]);
  }
  
  }