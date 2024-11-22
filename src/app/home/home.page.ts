import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('content', { static: false }) content!: IonContent; // Referência ao ion-content
  favorites: string[] = []; // Lista de favoritos
  items = ['Angular', 'React', 'Vue']; // Lista de itens

  constructor() {}

  ngOnInit() {
    // Carregar favoritos do localStorage
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  // Função que adiciona ou remove dos favoritos
  toggleFavorite(item: string) {
    const index = this.favorites.indexOf(item);
    if (index > -1) {
      this.favorites.splice(index, 1); // Remove se já estiver nos favoritos
    } else {
      this.favorites.push(item); // Adiciona aos favoritos
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites)); // Atualiza no localStorage
  }

  isFavorited(item: string): boolean {
    return this.favorites.includes(item); // Verifica se está nos favoritos
  }

  scrollToTop() {
    this.content.scrollToTop(500); // Rola ao topo com animação
  }
}
