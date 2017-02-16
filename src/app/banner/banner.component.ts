import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: 'app/banner/banner.component.html',
})
export class BannerComponent  {

  banners: any[]=[
        {
            'id': '1',
            'image':'../../images/h1.jpg',
            'titre':`C'est le titre 1`
        },
        {
            'id': '2',
            'image':'../../images/h2.jpg',
            'titre':`C'est le titre 2`
        },
        {
            'id': '3',
            'image':'../../images/h3.jpg',
            'titre':`C'est le titre 3`
        }
    ]

}