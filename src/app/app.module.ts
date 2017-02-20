import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { BannerComponent }  from './banner/banner.component';
import { ArticleComponent }  from './article/article.component';
import { ContainerComponent }  from './container/container.component';
// import { ListeArticleComponent }  from './article/listeArticle.component';

import {ArticleService} from './services/article.service';

import {AppRouter} from './router/app.router';

@NgModule({
  imports:      [ BrowserModule, AppRouter ],
  declarations: [ AppComponent,
                HeaderComponent,
                BannerComponent,
                ArticleComponent,
                ContainerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ArticleService]
})
export class AppModule { }
