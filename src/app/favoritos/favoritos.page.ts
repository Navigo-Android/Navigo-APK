import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  favorites: string[] = [];
  userId: string | null = null;

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    // Obter o ID do usuário logado
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userId = user.uid;
        this.loadFavorites();
      }
    });
  }

  loadFavorites() {
    if (!this.userId) return;

    // Carregar os favoritos do Firestore
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((data: any) => {
        this.favorites = data?.favorites || [];
      });
  }

  removeFavorite(item: string) {
    if (!this.userId) return;

    // Remover o item da lista
    const index = this.favorites.indexOf(item);
    if (index > -1) {
      this.favorites.splice(index, 1);

      // Atualizar no Firestore
      this.firestore.collection('users').doc(this.userId).set(
        { favorites: this.favorites },
        { merge: true }
      );
    }
  }
}
