import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  @ViewChild('content', { static: false }) content!: IonContent; // Referência ao ion-content

  favorites: string[] = []; // Lista de favoritos
  userId: string | null = null; // ID do usuário autenticado

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    // Obter o ID do usuário autenticado
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

  scrollToTop() {
    this.content.scrollToTop(500); 
  }
}
