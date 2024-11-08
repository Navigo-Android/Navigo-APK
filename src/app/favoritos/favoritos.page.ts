import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage {
  favorites: string[] = []; // Lista de favoritos

  constructor() {
    // Carregar favoritos do localStorage
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  removeFavorite(item: string) {
    const index = this.favorites.indexOf(item);
    if (index > -1) {
      this.favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites)); // Atualiza no localStorage
    }
  }
}
