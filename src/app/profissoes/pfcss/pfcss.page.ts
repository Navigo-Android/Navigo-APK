import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-profissoes-pfcss',
  templateUrl: 'pfcss.page.html',
  styleUrls: ['pfcss.page.scss'],
})
export class PfcssPage {
  @ViewChild(IonContent) content!: IonContent;

  isContentVisible: { [K in 'content1']: boolean } = {
    content1: false,
  };

  toggleContent(contentKey: 'content1') {
    this.isContentVisible[contentKey] = !this.isContentVisible[contentKey];
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}

