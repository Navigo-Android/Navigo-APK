import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('content', { static: false }) content!: IonContent;
  favorites: string[] = []; // Lista de favoritos
  userId: string | null = null; // ID do usuário logado

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

  toggleFavorite(item: string) {
    if (!this.userId) return;

    // Adicionar ou remover dos favoritos
    const index = this.favorites.indexOf(item);
    if (index > -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(item);
    }

    // Atualizar os favoritos no Firestore
    this.firestore.collection('users').doc(this.userId).set(
      { favorites: this.favorites },
      { merge: true } // Faz merge com os dados existentes
    );
  }

  isFavorited(item: string): boolean {
    return this.favorites.includes(item);
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
