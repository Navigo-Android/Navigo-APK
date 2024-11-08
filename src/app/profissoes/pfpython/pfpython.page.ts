import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-profissoes-pfpython',
  templateUrl: 'pfpython.page.html',
  styleUrls: ['pfpython.page.scss'],
})
export class PfpythonPage {
  @ViewChild(IonContent) content!: IonContent;

  isContentVisible: { [K in 'content1' | 'content2' | 'content3' | 'content4' | 'content5']: boolean } = {
    content1: false,
    content2: false,
    content3: false,
    content4: false,
    content5: false,
  };

  toggleContent(contentKey: 'content1' | 'content2' | 'content3' | 'content4' | 'content5') {
    this.isContentVisible[contentKey] = !this.isContentVisible[contentKey];
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
