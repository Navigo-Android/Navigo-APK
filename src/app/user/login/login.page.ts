import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController, LoadingController, NavController } from '@ionic/angular';

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
      this.showToast('ESTAMOS CONECTADOS');
      this.navCtrl.navigateForward('/home'); // Redireciona para a página inicial
    } catch (error) {
      await loading.dismiss();
      console.error('Erro de autenticação:', error);
      this.showToast('NÃO ESTAMOS CONECTADOS');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}
