import { Component, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'news-page',
  styleUrl: 'news-page.scss'
})
export class NewsPage {

  @Prop() match: any;
  @Prop() history: RouterHistory;

  @State() page: number;

  componentWillLoad() {
    if (this.match.params.pageNum) {
      this.page = parseInt(this.match.params.pageNum);
    } else {
      this.page = 1;
    }
  }

  forward() {
    this.page = this.page + 1;
    this.history.push(`/news/${this.page}`, {});
  }

  back() {
    this.page = this.page - 1;
    this.history.push(`/news/${this.page}`, {});
  }

  render() {
    return (
      <ion-page class='show-page'>
        <ion-content>
          <list-container pageNum={this.page} type='news'></list-container>
        </ion-content>
        <ion-footer>
          <ion-toolbar>
            <ion-buttons slot='start'>
              <ion-button  onClick={() => this.back()} clear color='primary'>
                Prev
              </ion-button>
            </ion-buttons>

            <span class='page-number'>
              page {this.page}
            </span>
            
            <ion-buttons slot='end'>
              <ion-button onClick={() => this.forward()} clear color='primary'>
                Next
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-footer>
      </ion-page>
    );
  }
}