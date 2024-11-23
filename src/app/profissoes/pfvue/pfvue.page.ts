import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-profissoes-pfvue',
  templateUrl: 'pfvue.page.html',
  styleUrls: ['pfvue.page.scss'],
})
export class PfvuePage {
  @ViewChild(IonContent) content!: IonContent;

  isContentVisible: { [K in 'content1' | 'content2']: boolean } = {
    content1: false,
    content2: false,
  };

  toggleContent(contentKey: 'content1' | 'content2') {
    this.isContentVisible[contentKey] = !this.isContentVisible[contentKey];
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
