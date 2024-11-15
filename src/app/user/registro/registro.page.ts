import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importa o Firestore
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
    private firestore: AngularFirestore, // Adiciona o Firestore ao construtor
    private toastController: ToastController,
    private loadingController: LoadingController,
    private navCtrl: NavController
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
  
      // Salva o usuário no Firestore (caso você já tenha implementado esse código)
      await this.firestore.collection('users').doc(user.user?.uid).set({
        name: this.name,
        email: this.email,
        celular: this.celular
      });
  
      // Redireciona para a página de login após o registro
      this.navCtrl.navigateForward('/user/login');
    } catch (error: any) {
      await loading.dismiss();
      console.error('Erro no cadastro:', error);
      this.showToast('Erro ao cadastrar: ' + (error.message || 'Erro desconhecido'));
    }
  }
  

  private async saveUserData(userId: string | undefined) {
    if (userId) {
      const userData = {
        name: this.name,
        celular: this.celular,
        email: this.email,
        password: this.password,
        createdACC: new Date()
      };

      await this.firestore.collection('users').doc(userId).set(userData);
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
