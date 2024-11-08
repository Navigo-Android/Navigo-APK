import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favorites: string[] = [];

  constructor() { }

  // Adiciona ou remove um item dos favoritos
  toggleFavorite(tech: string) {
    if (this.isFavorited(tech)) {
      this.favorites = this.favorites.filter(f => f !== tech);
    } else {
      this.favorites.push(tech);
    }
  }

  // Verifica se um item está favoritado
  isFavorited(tech: string): boolean {
    return this.favorites.includes(tech);
  }

  // Retorna todos os itens favoritos
  getFavorites(): string[] {
    return this.favorites;
  }
}

