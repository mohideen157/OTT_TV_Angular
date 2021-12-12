import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  trendingMovieList:any=[];
  ngOnInit(): void {
    if(localStorage.getItem('userLoggedIn') == undefined || (localStorage.getItem('userLoggedIn') != undefined && localStorage.getItem('userLoggedIn') == 'false')){
      this.router.navigate(['index']);
    }

    this.trendingMovieList=[{"id":1,"movie_name":"Asuran"},{"id":2,"movie_name":"Petta"},{"id":3,"movie_name":"Boss"}];
 
  }

  showMovie(src){
    this.options={ autoplay: true, controls: true, sources: [{ src: src, type: 'application/x-mpegURL'  }]}
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
