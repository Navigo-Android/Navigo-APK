import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-profissoes-pfc',
  templateUrl: 'pfc.page.html',
  styleUrls: ['pfc.page.scss'],
})
export class PfcPage {
  @ViewChild(IonContent) content!: IonContent;

  isContentVisible: { [K in 'content1' | 'content2' | 'content3' | 'content4']: boolean } = {
    content1: false,
    content2: false,
    content3: false,
    content4: false,
  };

  toggleContent(contentKey: 'content1' | 'content2' | 'content3' | 'content4') {
    this.isContentVisible[contentKey] = !this.isContentVisible[contentKey];
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}

