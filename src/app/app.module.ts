import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { BannerComponent }  from './banner/banner.component';
import { ArticleComponent }  from './article/article.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                HeaderComponent,
                BannerComponent,
                ArticleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
