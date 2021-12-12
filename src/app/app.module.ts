import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './component/video-player/video-player.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent, MoviesComponent, TvShowsComponent, PremiumComponent, RegisterComponent } from './module/export';
import { RestUrlService } from './rest-url/rest-url.service';
import { HttpModule } from '@angular/http';
import { PopupComponent } from './component/popup/popup.component';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatGridListModule} from '@angular/material/grid-list';
import { ModalModule,BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MustMatchDirective } from './common/must-match.directive';
import { ProcessingIconComponent } from './component/processing-icon/processing-icon.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { IndexComponent } from './module/index/index.component';
import { AuthComponent } from './module/auth/auth.component';
 
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

 

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'tv-shows', component: TvShowsComponent},
  { path: 'premium', component: PremiumComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'video', component: VideoPlayerComponent},
  { path: 'index', component: IndexComponent},
  { path: 'auth', component: AuthComponent}
  ];
  
  
@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    HomeComponent,
    TvShowsComponent,
    PremiumComponent,
    RegisterComponent,
    PopupComponent,
    MustMatchDirective,
    ProcessingIconComponent,
    IndexComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatCardModule,
    CarouselModule.forRoot(),
    MatGridListModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [RestUrlService,BsModalService, BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
