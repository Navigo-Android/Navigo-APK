import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements AfterViewInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  isPasswordVisible: boolean = false;

  ngAfterViewInit() {
    console.log('View inicializada, IonContent disponível:', this.content);
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  scrollToTop() {
    if (this.content) {
      this.content.scrollToTop(500);
    } else {
      console.error('IonContent não está definido');
    }
  }
}
