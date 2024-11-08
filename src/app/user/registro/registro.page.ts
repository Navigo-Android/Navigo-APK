import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular'; // Importa o NavController
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';
  celular: string = '';
  isPasswordVisible: boolean = false;

  @ViewChild(IonContent, { static: false }) content!: IonContent;

  constructor(
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private navCtrl: NavController // Adiciona NavController ao construtor
  ) { }

  ngOnInit() { }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  async register() {
    const loading = await this.loadingController.create({
      message: 'Registrando...',
    });
    await loading.present();
  
    try {
      const user = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      await loading.dismiss();
      this.showToast('Cadastro realizado com sucesso!');
      // Tente usar navigateRoot() ao invés de navigateForward()
      this.navCtrl.navigateRoot('/user/login'); // Redirecionamento para a página de login
    } catch (error: any) {
      await loading.dismiss();
      console.error('Erro no cadastro:', error);
      this.showToast('Erro ao cadastrar: ' + (error.message || 'Erro desconhecido'));
    }
  }
  

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
