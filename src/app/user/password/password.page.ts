import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage {
  email: string = '';

  constructor(private afAuth: AngularFireAuth, private toastController: ToastController) {}

  async resetPassword() {
    if (!this.email) {
      this.showToast('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      await this.afAuth.sendPasswordResetEmail(this.email);
      this.showToast('E-mail de recuperação enviado. Verifique sua caixa de entrada.');
    } catch (error) {
      this.showToast('Ocorreu um erro ao enviar o e-mail. Verifique o endereço informado.');
      console.error(error);
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }
}
