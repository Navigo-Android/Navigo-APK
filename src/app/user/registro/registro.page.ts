import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  // Propriedade para controlar a visibilidade da senha
  isPasswordVisible: boolean = false;

  // Referência ao IonContent
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  constructor() { }

  ngOnInit() { }

  // Método para alternar a visibilidade da senha
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // Método para rolar ao topo da página
  scrollToTop() {
    this.content.scrollToTop(500);
  }
}