import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Certifique-se de instalar e configurar Firebase.

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements AfterViewInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent; // Acessa o conteúdo da página para manipulação.
  isPasswordVisible: boolean = false; // Estado de visibilidade da senha.

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngAfterViewInit() {
    console.log('View inicializada, IonContent disponível:', this.content);
  }

  // Alterna a visibilidade do campo de senha.
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // Rola a página para o topo.
  scrollToTop() {
    if (this.content) {
      this.content.scrollToTop(500); // Tempo de rolagem: 500ms.
    } else {
      console.error('IonContent não está definido');
    }
  }

  // Realiza logout e redireciona para a página de login.
  logout() {
    this.afAuth.signOut().then(() => {
      console.log('Logout realizado com sucesso.');
      this.router.navigate(['/user/login']); // Substitua pelo caminho correto da sua rota de login.
    }).catch((error) => {
      console.error('Erro ao fazer logout:', error);
    });
  }
}
