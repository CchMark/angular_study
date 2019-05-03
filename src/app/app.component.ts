import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Mark';
  subtitle = 'A place to share your knowledge <u>in angular study!</u>';
  //list: any[];
  // constructor(private articlesService: ArticlesService) {
  //   this.list = this.articlesService.list;
  // }
  constructor(public articlesService: ArticlesService) {
    // this.list = this.articlesService.list;
  }
  ngOnInit() {
    this.articlesService.loadArticles();
  }
}
