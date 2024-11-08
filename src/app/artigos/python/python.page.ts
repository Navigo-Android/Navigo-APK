import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-artigos-python',
  templateUrl: 'python.page.html',
  styleUrls: ['python.page.scss'],
})
export class PythonPage {
  @ViewChild(IonContent) content!: IonContent;

  isContentVisible: { [K in 'content1' | 'content2' | 'content3' | 'content4' | 'content5' | 'content6' | 'content7' | 'content8' | 'content9' | 'content10']: boolean } = {
    content1: false,
    content2: false,
    content3: false,
    content4: false,
    content5: false,
    content6: false,
    content7: false,
    content8: false,
    content9: false,
    content10: false,
  };

  toggleContent(contentKey: 'content1' | 'content2' | 'content3' | 'content4' | 'content5' | 'content6' | 'content7' | 'content8' | 'content9' | 'content10') {
    this.isContentVisible[contentKey] = !this.isContentVisible[contentKey];
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
