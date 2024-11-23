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
  @ViewChild('content', { static: false }) content!: IonContent; // Referência ao ion-content
  favorites: string[] = []; // Lista de favoritos
  items = ['Angular', 'React', 'Vue']; // Lista de itens
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

  toggleFavorite(item: string) {
    if (!this.userId) return;

    const index = this.favorites.indexOf(item);
    if (index > -1) {
      this.favorites.splice(index, 1); // Remove o item se já estiver nos favoritos
    } else {
      this.favorites.push(item); // Adiciona o item aos favoritos
    }

    // Atualizar no Firestore
    this.firestore.collection('users').doc(this.userId).set(
      { favorites: this.favorites },
      { merge: true }
    );
  }

  isFavorited(item: string): boolean {
    return this.favorites.includes(item); // Verifica se está nos favoritos
  }

  scrollToTop() {
    this.content.scrollToTop(500); // Rola ao topo com animação
  }
}
