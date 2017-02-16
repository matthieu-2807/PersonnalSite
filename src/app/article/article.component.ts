import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'app/article/article.component.html',
})
export class ArticleComponent  {

    articles: any[]=[
      {
        'titre':'Lorem Ipsum is simply',
        'description':'centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'thump':'../../images/h5.jpg'
      },
      {
        'titre':'Lorem Ipsum is simply',
        'description':'centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'thump':'../../images/h6.jpg'
      },
      {
        'titre':'Lorem Ipsum is simply',
        'description':'centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'thump':'../../images/h7.jpg'
      },
      {
        'titre':'Lorem Ipsum is simply',
        'description':'centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'thump':'../../images/h8.jpg'
      },
    ]

}