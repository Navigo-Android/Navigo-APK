import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-profissoes-pffirebase',
  templateUrl: 'pffirebase.page.html',
  styleUrls: ['pffirebase.page.scss'],
})
export class PffirebasePage {
  @ViewChild(IonContent) content!: IonContent;

  isContentVisible: { [K in 'content1' | 'content2' | 'content3']: boolean } = {
    content1: false,
    content2: false,
    content3: false,
  };

  toggleContent(contentKey: 'content1' | 'content2' | 'content3') {
    this.isContentVisible[contentKey] = !this.isContentVisible[contentKey];
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}