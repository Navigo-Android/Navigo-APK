import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';  // Importando o Firestore
import firebase from 'firebase/compat/app';  // Import correto do Firebase
import 'firebase/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isPasswordVisible: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,  // Injetando o Firestore no construtor
    private toastController: ToastController,
    private loadingController: LoadingController,
    private navCtrl: NavController // Adicionado para navegação
  ) {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    await loading.present();

    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      await loading.dismiss();
      this.navCtrl.navigateForward('/home'); // Redireciona para a página inicial
    } catch (error) {
      await loading.dismiss();
      console.error('Erro de autenticação:', error);
      this.showToast('Credênciais erradas. Tente Novamente!');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
    });
    toast.present();
  }

  // Método de login com Google
  async signInWithGoogle() {
    const loading = await this.loadingController.create({
      message: 'Entrando com Google...',
    });
    await loading.present();

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);

      // Salva os dados do usuário no Firestore
      const user = credential.user;
      if (user) {
        await this.firestore.collection('users').doc(user.uid).set({
          name: user.displayName || 'Usuário Google',
          email: user.email,
          celular: '',
          createdACC: new Date(),
        });
      }

      // Redireciona após o login bem-sucedido
      await loading.dismiss();
      this.showToast('Login com Google realizado com sucesso!');
      this.navCtrl.navigateForward('/home');
    } catch (error) {
      await loading.dismiss();
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      console.error('Erro ao registrar com Google:', error);
      this.showToast('Erro ao registrar com Google: ' + errorMessage);
    }
  }
}
