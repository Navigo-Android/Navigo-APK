import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController, LoadingController } from '@ionic/angular';
import firebase from 'firebase/compat/app';  // Import correto do Firebase
import 'firebase/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user: { telefone: string } = { telefone: '' }; 
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
  
      // Salva o usuário no Firestore
      await this.firestore.collection('users').doc(user.user?.uid).set({
        name: this.name,
        email: this.email,
        celular: this.celular,
        password: this.password
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
      this.showToast('Registro com Google realizado com sucesso!');
      this.navCtrl.navigateForward('/home');
    } catch (error) {
      await loading.dismiss();
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      console.error('Erro ao registrar com Google:', error);
      this.showToast('Erro ao registrar com Google: ' + errorMessage);
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000
    });
    toast.present();
  }

  formatTelefone() {
    if (this.celular) {
      // Remove todos os caracteres não numéricos
      let telefone = this.celular.replace(/\D/g, '');
  
      // Aplica a formatação
      if (telefone.length > 10) {
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
      } else if (telefone.length > 6) {
        telefone = telefone.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
      } else if (telefone.length > 2) {
        telefone = telefone.replace(/^(\d{2})(\d{0,4}).*/, '($1) $2');
      } else {
        telefone = telefone.replace(/^(\d{0,2}).*/, '($1');
      }
  
      // Atualiza o valor formatado
      this.celular = telefone;
    }
  }
}
